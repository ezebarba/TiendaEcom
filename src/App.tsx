import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import "./index.css";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar toggleCartDrawer={toggleCartDrawer} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
      </div>
    </Router>
  );
}

export default App;
