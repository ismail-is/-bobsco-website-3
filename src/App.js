import React from 'react';
import Components from './components/Components';
import ScrolToTop from './components/Elements/ScrolToTop';
import Loader from "./components/Elements/Loader";
import Popup from './components/Elements/Popup';
import Whatsapp from './components/Common/Whatsapp';

const App = () => {
  
  return (
    <div className="App">
      <Components/>  
      {/* <ScrolToTop/> */}
      <Whatsapp/>
      {/* <Loader/>   */}
    
      
    </div>
  );
}

export default App;