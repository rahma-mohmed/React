import './App.css';
import Home from './Home/home';
import About from './about/about';
import Contact from './contact/contact';
import Header from './header/header';
import Products from './product/products';
import ProductDetails from './product/details';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />

      <div className="App">
        <h1>Hello, welcome to the React application!</h1>
      </div>

      <div className="container"> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/details/:id" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
