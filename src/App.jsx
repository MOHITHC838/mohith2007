import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TechOrbitBackground from './components/TechOrbitBackground';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Certification from './pages/Certification';
import Achievement from './pages/Achievement';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="App" style={{ position: 'relative', minHeight: '100vh' }}>
        <TechOrbitBackground />

        <div style={{ position: 'relative', zIndex: 2, display: 'flex', minHeight: '100vh' }}>
          <Navbar />

          <main
            className="app-main"
            style={{
              flex: 1,
              marginLeft: 'var(--sidebar-width, 72px)',
              width: 'calc(100% - var(--sidebar-width, 72px))',
              minHeight: '100vh',
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/certification" element={<Certification />} />
              <Route path="/achievement" element={<Achievement />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;