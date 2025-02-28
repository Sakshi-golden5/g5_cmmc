import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Events from "./Nav-Links/Events";
import Agenda from "./Nav-Links/Agenda";
import Speakers from "./Nav-Links/Speakers";
import ContactUs from "./Nav-Links/ContactUs";

function App() {
  return (
   <>
    <Navbar />
      <Routes>
        <Route path="/events" element={<Events />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
   </>
  );
}

export default App;
