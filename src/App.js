
import Home from "./pages/Home/Home";

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Common/Header/Header';
import Footer from './components/Common/Footer/Footer';
import TourDetails from "./pages/Tours/TourDetails";

import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Tours from "./pages/Tours/Tours";
// import TourDetails from "./pages/Tours/TourDetails";
import Booking from "./pages/Booking/Booking";
import Destinations from "./pages/Destinations/Destinations";
import PhotoGallery from "./pages/PhotoGallery/PhotoGallery";

function App() {
  return (
    <> 
    <div className='Heading'>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="about-us" element={<About />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="tours" element={<Tours />} />
        {/* <Route path="tour-details" element={<TourDetails />} /> */}
        <Route path="tour-details" element={<TourDetails />} />
        <Route path="booking" element={<Booking />} />
        <Route path="destinations" element={<Destinations />} />
        <Route path="gallery" element={<PhotoGallery />} />
    </Routes>
    <Footer/>
    </div>
    </>
  );
}

export default App;