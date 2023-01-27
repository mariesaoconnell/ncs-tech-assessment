import React from 'react';

const MessageParser = ({ children, actions }) => {
	const parse = (message) => {
		if(message.toLowerCase().includes('hello')){
      actions.handleHello();
    }
		if(message.toLowerCase().includes('what are the properties of a windshield')){
      actions.handleWindshield();
    }
		if(message.toLowerCase().includes('faqs')){
      actions.handleFAQS();
    }
		if(message.toLowerCase().includes('how many characters are in a vin number')){
      actions.handleVIN();
    }
		if(message.toLowerCase().includes('')){
      actions.handleOther();
    }
	};

	return (
		<div>
			{React.Children.map(children, (child) => {
				return React.cloneElement(child, {
					parse: parse,
					actions,
				});
			})}
		</div>
	);
};

export default MessageParser;
