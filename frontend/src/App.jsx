import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import './App.css'

function App() {
  return (
    <BrowserRouter>
    {/* <div className="min-h-screen bg-gray-50 flex flex-col"> */}
    <main className="container mx-auto px-4 py-8 flex-grow max-w-6xl font-mono">
  <Navbar />
  {/* <main className="container mx-auto px-4 py-8 flex-grow max-w-6xl font-mono"> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        {/* </main> */}
  <Footer />
  </main>

  {/* </div> */}
   </BrowserRouter>
  );
}

export default App
