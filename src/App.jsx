import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import './App.css'

function App() {
  return (
    <BrowserRouter>
    {/* <div className="min-h-screen bg-gray-50 flex flex-col"> */}
  <Navbar />
  <main className="container mx-auto px-4 py-8 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
  <Footer />
  {/* </div> */}
   </BrowserRouter>
  );
}

export default App
