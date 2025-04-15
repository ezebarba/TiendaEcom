import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import config from './config.json';

function App() {
  return (
    <Router>
      <div className={`template-${config.template}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/tienda" element={<Shop />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
