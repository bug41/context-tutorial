import React from 'react';
import ColorBox from './components/ColorBox';
import ColorContext from './contexts/color';

const App = () => {
  return (
    <ColorContext.Provider value={{ color: 'purple' }}>      
      <div>
        <ColorBox></ColorBox>
      </div>
   </ColorContext.Provider>
  );
}

export default App;
