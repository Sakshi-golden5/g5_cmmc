import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Events from "./Nav-Links/Events";
import Agenda from "./Nav-Links/Agenda";
import Speakers from "./Nav-Links/Speakers";
import ContactUs from "./Nav-Links/ContactUs";
import Home from "./Nav-Links/Home";
import Footer from "./Footer";
import BHost from "./Nav-Links/BHost";

function App() {
  return (
   <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/host-regi" element={<BHost />} />
      </Routes>
      <Footer />
   </>
  );
}

export default App;
