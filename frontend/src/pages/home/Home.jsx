import { useState, useEffect } from "react";
import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import useConversation from "../../zustand/useConversation";

const Home = () => {
	const { selectedConversation } = useConversation();
	const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 640);
		};
		
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	// On mobile: show sidebar when no conversation selected, show chat when conversation selected
	const showSidebar = !isMobile || !selectedConversation;
	const showMessageContainer = !isMobile || selectedConversation;

	return (
		<div className='flex md:w-auto w-screen md:h-[550px] h-full max-md:pb-3 max-md:[max-h-dvh] sm:rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			{/* Sidebar - hidden on mobile when chat is selected */}
			<div className={`${showSidebar ? 'flex' : 'hidden'} w-full sm:w-auto`}>
				<Sidebar />
			</div>
			
			{/* MessageContainer - hidden on mobile when sidebar is shown */}
			<div className={`${showMessageContainer ? 'flex' : 'hidden'} w-full flex-col`}>
				<MessageContainer showBackButton={isMobile} />
			</div>
		</div>
	);
};

export default Home;

// import MessageContainer from "../../components/messages/MessageContainer";
// import Sidebar from "../../components/sidebar/Sidebar";

// const Home = () => {
// 	return (
// 		<div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
// 			<Sidebar />
// 			<MessageContainer />
// 		</div>
// 	);
// };
// export default Home;