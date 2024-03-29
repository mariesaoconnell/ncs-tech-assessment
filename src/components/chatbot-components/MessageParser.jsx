import React from 'react';

const MessageParser = ({ children, actions }) => {
	const parse = (message) => {
		if(message.toLowerCase().includes('hello')){
      return actions.handleHello();
    }
		if(message.toLowerCase().includes('what are the properties of a windshield')){
     return actions.handleWindshield();
    }
		if(message.toLowerCase().includes('faqs')){
      return actions.handleFAQS();
    }
		if(message.toLowerCase().includes('how many characters are in a vin number')){
      return actions.handleVIN();
    }
		if(message.toLowerCase().includes('can the crack in my windshield be fixed')){
			return actions.handleCrack();
		}
		if(message.toLowerCase().includes('where can i find my vin')){
			return actions.handleVinLocation();
		}
		else{
      return actions.handleOther();
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
