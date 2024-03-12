
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appnavbar from './components/AppNavbar';
import Proudcts from './components/Proudct';
import Cart from './components/cart';

function App() {
  return (
    <div className="App">
      <Appnavbar />
      <Proudcts />
      <Routes>
        <Route path='/' element={<Proudcts />} />
        <Route path='cart' element={<Cart/>} />
      </Routes>
    </div>
  );
}

export default App;
