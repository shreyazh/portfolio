import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import About from './components/About';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="fixed w-full bg-white shadow-sm z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="text-xl font-bold text-gray-800">Portfolio</Link>
              </div>
              
              {/* Mobile menu button */}
              <div className="flex items-center sm:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-500">
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>

              {/* Desktop navigation */}
              <div className="hidden sm:flex sm:items-center sm:space-x-8">
                <NavLinks />
              </div>
            </div>
          </div>

          {/* Mobile navigation */}
          {isMenuOpen && (
            <div className="sm:hidden">
              <div className="pt-2 pb-3 space-y-1">
                <NavLinks mobile />
              </div>
            </div>
          )}
        </nav>

        {/* Main content */}
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer className="bg-white mt-12">
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex justify-center space-x-6">
              <a href="https://github.com" className="text-gray-500 hover:text-gray-700">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" className="text-gray-500 hover:text-gray-700">
                <Linkedin size={24} />
              </a>
              <a href="mailto:example@email.com" className="text-gray-500 hover:text-gray-700">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

function NavLinks({ mobile }: { mobile?: boolean }) {
  const baseClasses = mobile
    ? "block px-3 py-2 text-base font-medium rounded-md"
    : "text-gray-500 hover:text-gray-700 px-3 py-2 font-medium";
  const activeClasses = mobile
    ? "bg-gray-100 text-gray-900"
    : "text-gray-900";

  return (
    <>
      <Link to="/" className={`${baseClasses} ${activeClasses}`}>Projects</Link>
      <Link to="/experience" className={`${baseClasses}`}>Experience</Link>
      <Link to="/certificates" className={`${baseClasses}`}>Certificates</Link>
      <Link to="/about" className={`${baseClasses}`}>About</Link>
    </>
  );
}

export default App;