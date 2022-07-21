import { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <main className='h-screen bg-gradient-to-br from-[#3F9A8E] to-[#59B0E0] overflow-hidden'>
      <Header onShowCart={showCartHandler} />
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
