import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicLayout from './components/PublicLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Admin from './pages/Admin';
import Cuisine from './pages/Cuisine';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
        </Route>
        <Route path="/menu/scan" element={<Menu scanMode={true} />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/cuisine" element={<Cuisine />} />
      </Routes>
    </Router>
  );
}

export default App;
