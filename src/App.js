import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CesarCipher from './components/CesarCipher';
import EscitalaCipher from './components/EscitalaCipher';
import BlowfishCipher from './components/BlowfishCipher';
import ElGamalCipher from './components/ElGamalCipher';
import SHA3Cipher from './components/SHA3Cipher';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cesar" element={<CesarCipher />} />
        <Route path="/escitala" element={<EscitalaCipher />} />
        <Route path="/blowfish" element={<BlowfishCipher />} />
        <Route path="/elgamal" element={<ElGamalCipher />} />
        <Route path="/sha3" element={<SHA3Cipher />} />
      </Routes>
    </Router>
  );
};

export default App;
