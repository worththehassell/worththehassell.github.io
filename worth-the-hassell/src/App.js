import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';
import DrawerAppBar from './components/MuiNavbar';
import { Container } from '@mui/system';

function App() {
  return (
    <>
    <DrawerAppBar />
    <Container maxWidth="md">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </Container>
    </>
  );
}

export default App;