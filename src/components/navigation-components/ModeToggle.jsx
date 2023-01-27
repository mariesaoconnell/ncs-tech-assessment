import React from 'react';
import ReactSwitch from 'react-switch';

function ModeToggle({toggleTheme, theme}) {
  return (
		<div>
			<ReactSwitch
				onChange={toggleTheme}
				checked={theme === 'dark'}
				offColor='#262626'
				onColor='#f8f9fa'
				uncheckedIcon={'☀️'}
				checkedIcon={'🌕'}
				offHandleColor='#f8f9fa'
				onHandleColor='#262626'
			/>
		</div>
	);
}

export default ModeToggle;
