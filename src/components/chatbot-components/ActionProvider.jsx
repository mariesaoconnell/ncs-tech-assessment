import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
		const botMessage = createChatBotMessage('Hello. Nice to meet you.');

		setState((prev) => ({
			...prev,
			messages: [...prev.messages, botMessage],
		}));
	};
  const handleVIN = () => {
		const botMessage = createChatBotMessage('There are 17 characters in a VIN, they can be letters OR numbers. The VIN can be found on the dash or inside the driver side door.');

		setState((prev) => ({
			...prev,
			messages: [...prev.messages, botMessage],
		}));
	};
  const handleFAQS = () => {
		const botMessage = createChatBotMessage('You can ask me: "What are the properties of a windshield", "How many characters are in a VIN number"');

		setState((prev) => ({
			...prev,
			messages: [...prev.messages, botMessage],
		}));
	};
  const handleOther = () => {
		const botMessage = createChatBotMessage(
			`I'm sorry, I don't have an answer for that. What I'd recommend is sending an email to fake@email.com and they can get you the answer!`
		);

		setState((prev) => ({
			...prev,
			messages: [...prev.messages, botMessage],
		}));
	};
  const handleWindshield = () => {
		const botMessage = createChatBotMessage(
			'A finished windshield consists of two glass layers sandwiched around a plastic interlayer. Although very thin—about . 25 inch thick—such laminated glass is very strong and is less likely to shatter than normal safety glass. In the United States, windshields are required by law to be made of laminated glass.'
		);

		setState((prev) => ({
			...prev,
			messages: [...prev.messages, botMessage],
		}));
	};

  return (
		<div>
			{React.Children.map(children, (child) => {
				return React.cloneElement(child, {
					actions: {
            handleHello, handleWindshield, handleFAQS, handleVIN, handleOther
          },
				});
			})}
		</div>
	);
};

export default ActionProvider;
