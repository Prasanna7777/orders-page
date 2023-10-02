import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Header1 from './components/Header1';
import OrderDetails from './components/orderDetails';
import Orders from './components/orders';
import MediaContext from './context/MediaContext';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth<=850)

  const handleResize = () => {
    setIsMobile(window.innerWidth<=850);
  }

  window.addEventListener("resize",handleResize);

  return (
    <div>
      <MediaContext.Provider value={{isMobile}}>
        <Header />
        <Header1/>
        <OrderDetails />
        <Orders />
      </MediaContext.Provider>
    </div>
  );
}

export default App;
