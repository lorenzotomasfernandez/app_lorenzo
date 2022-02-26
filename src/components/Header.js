import { NavBar } from "./NavBar";
import './Header.css';
import CartWidget from './CartWidget';

function Header() {
    return (
        
            <header className="encabezado">
               <div>
                   <h1 className='titulo'>TIENDA ONLINE</h1>
                   <div className='cart'>
                       <CartWidget/>
                   </div>
               </div>
               <NavBar/>                
            </header>
        )
    }

export default Header;