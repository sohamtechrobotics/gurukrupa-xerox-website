
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import PrintOnline from "./pages/PrintOnline";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import TrackOrder from "./pages/TrackOrder";
import Help from "./pages/Help";

function App() {
  return (
    <HashRouter>
      <div className="app">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/print-online" element={<PrintOnline />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/help" element={<Help />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />
        <WhatsAppButton />
      </div>
    </HashRouter>
  );
}

export default App;
