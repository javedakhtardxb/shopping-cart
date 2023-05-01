import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <nav class="navbar navbar-light bg-light" style={{marginBottom: "20px"}}>
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Shopping Cart</span>
        </div>
      </nav>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
