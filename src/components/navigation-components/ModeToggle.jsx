import React from 'react';
import ReactSwitch from 'react-switch';

function ModeToggle({toggleTheme, theme}) {
  return (
    <div>
      <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
    </div>
  );
}

export default ModeToggle;
