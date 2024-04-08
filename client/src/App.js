import React from "react";
import HomeMain from "./pages/HomeFolder/HomeMain";
import SpeakersMain from "./pages/SpeakersFolder/SpeakersMain";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomeSnap from "./pages/HomeFolder/HomeSnap";
import TeamMain from "./pages/TeamFolder/TeamMain";
import ContactUsMain from "./pages/ContactUs/ContactUsMain";
import GalleryMain from "./pages/Gallery/GalleryMain";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomeMain />} />
          <Route path="/about" element={<HomeSnap />} />
          <Route path="/speakers" element={<SpeakersMain />} />
          <Route path="/team" element={<TeamMain />} />
          <Route path="/contactus" element={<ContactUsMain />} />
          <Route path="/gallery" element={<GalleryMain />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
