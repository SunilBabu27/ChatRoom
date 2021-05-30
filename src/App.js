import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />

	return (
		<ChatEngine
			height='100vh'
			userName={localStorage.getItm('username')}
			userSecret={localStorage.getItem('password')}
			projectID='466ad941-6d60-4adf-b934-64cf3f891fb6'
            renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps}/>}
		/>
	);
}
export default App;