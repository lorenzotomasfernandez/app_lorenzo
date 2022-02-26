import './App.css';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
        <Header/>
        <ItemListContainer 
                           nombre="Lorenzo"
                           apellido="Fernandez"
        />
    </>
  );
}

export default App;
