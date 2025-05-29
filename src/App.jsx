import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Compo/Navbar/Navbar';
import Home from './Compo/Home/Home';
import About from './Compo/About/About';
import AddProduct from './Compo/AddProduct/AddProduct';
import Footer from './Compo/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        {/* Main Home Page (with all sections) */}
        <Route path="/" element={
          <Home/>
        } />

        {/* About Page */}
        <Route path="/about" element={<About/>} />

        {/* Add Product Page */}
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;