import './App.css';
import './components/Main.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Menudenavegacion from './components/Menudenavegacion';
import Piedepagina from './components/Piedepagina';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './components/Cart';
import  CartContext from './context/CartContext';

function App() {
  return (
    <BrowserRouter>
      <CartContext>
        <Menudenavegacion/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/categoria/:categoria' element={<ItemListContainer/>} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart/>} />
          </Routes>
        <Piedepagina/>
      </CartContext>
    </BrowserRouter>
  );
  }

export default App;
