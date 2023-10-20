import './App.css';
import ItemListContainer from './components/ItemListContainer/itemListContainer';
import "./components/data/datastyle.css";
import NavBar from "./components/navBar";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ItemList from './components/itemList/ItemList';
import Consolas from './components/secciones/consolas';

function App () {
  return (
      <BrowserRouter>
      <NavBar />
      <Routes> 
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/servicios" element={<ItemList />} />
        <Route path="/consolas" element={<Consolas titulo="Consolas" />} />
      </Routes>
      </BrowserRouter>
  )
  
}

export default App;
