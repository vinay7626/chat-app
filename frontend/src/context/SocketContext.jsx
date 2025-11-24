// frontend/src/context/SocketContext.jsx
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => useContext(SocketContext);

export const SocketContextProvider = ({ children }) => {
  const { authUser } = useAuthContext();
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);

  // Local dev = localhost:5000
  // Production = VITE_SOCKET_URL from env
  const SOCKET_URL =
    import.meta.env.VITE_SOCKET_URL ||
    (window.location.hostname === "localhost"
      ? "http://localhost:5000"
      : window.location.origin);

  useEffect(() => {
    if (!authUser) {
      if (socket) socket.close();
      setSocket(null);
      return;
    }

    const newSocket = io(SOCKET_URL, {
      query: { userId: authUser._id },

      // FIX #1 – required for localhost dev
      transports: ["websocket", "polling"],

      // FIX #2 – important for cookies (jwt)
      withCredentials: true,

      // FIX #3 – helps WebSocket upgrade succeed
      reconnectionAttempts: 5,
      reconnectionDelay: 500,
    });

    setSocket(newSocket);

    newSocket.on("connect", () => {
      console.log("Socket connected:", newSocket.id);
    });

    newSocket.on("getOnlineUsers", (users) => {
      setOnlineUsers(users);
    });

    newSocket.on("disconnect", () => {
      console.log("Socket disconnected");
    });

    return () => newSocket.close();
  }, [authUser?._id]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
