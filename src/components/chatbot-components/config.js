import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';
import BotAvatar from './BotAvatar';

const config = {
	initialMessages: [
		createChatBotMessage(
			(
				<>
					<h5>Hi, I'm Finn, VIN Finder's AI! 👋</h5>
					<p>For a list of questions you can ask me, say "FAQs".</p>
				</>
			)
		),
	],
	customComponents: {
		header: () => '',
		botAvatar: (props) => <BotAvatar {...props} />,
	},
};

export default config;
