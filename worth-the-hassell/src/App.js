import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Rsvp from './pages/RSVP';
import DetailsTabs from './pages/Details';
import DrawerAppBar from './components/MuiNavbar';
import { Container } from '@mui/system';
import './css/flier.css';

function App() {
  return (
    <>
    <DrawerAppBar />
    <Container maxWidth="lg">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rsvp" element={<Rsvp />} />
          <Route path="details" element={<DetailsTabs />} />
        </Routes>
      </Router>
    </Container>
    </>
  );
}

export default App;