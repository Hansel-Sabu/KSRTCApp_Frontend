import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import AddBus from './components/AddBus';
import DeleteBUs from './components/DeleteBUs';
import Viewall from './components/Viewall';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<Viewall/>}/>
        <Route path='/1'element={<AddBus/>}/>
        <Route path='/2'element={<DeleteBUs/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
