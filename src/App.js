import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Piedepagina from './components/Piedepagina';
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
    
        <Header/>
        <Main/>
        <Piedepagina/>
    </BrowserRouter>
  );
}

export default App;
