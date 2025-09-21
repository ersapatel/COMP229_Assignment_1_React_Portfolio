import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './Page/home';
import AboutMe from './Page/about-me';
import Projects from './Page/projects';
import Services from './Page/services';
import Contact from './Page/contact';

function App() {

  return (
    <>
      <BrowserRouter>
        {/* Navigation */}
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/about">About</Link> |{" "}
          <Link to="/projects">Projects</Link> |{" "}
          <Link to="/services">Services</Link> |{" "}
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
