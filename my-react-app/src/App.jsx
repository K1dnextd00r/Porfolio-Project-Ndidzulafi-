import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header.jsx';
import Home from './Pages/Home.jsx';
import About from './pages/aboutUs.jsx';
import Divisions from './pages/divisions.jsx';
import Investor from './pages/investor.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Service from './pages/services.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/divisions" element={<Divisions/>}/>
        <Route path="/investor" element={<Investor/>}/>
        <Route path="/services" element={<Service/>}/>
      </Routes>
    </Router>
  );
}

export default App
