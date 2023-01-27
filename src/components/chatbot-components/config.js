import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';
import BotAvatar from './BotAvatar';

const config = {
	initialMessages: [
		createChatBotMessage(
			`Hi, I'm Finn, VIN Finder's AI! 👋 For a list of questions you can ask me, say "FAQs". `
		),
	],
	customComponents: {
		header: () => '',
		botAvatar: (props) => <BotAvatar {...props} />,
	},
};

export default config;
