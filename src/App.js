import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Luego, usa <Router> en lugar de <BrowserRouter>

import CesarCipher from './components/CesarCipher';
import EscitalaCipher from './components/EscitalaCipher';
import BlowfishCipher from './components/BlowfishCipher';
import ElGamalCipher from './components/ElGamalCipher';
import SHA3Cipher from './components/SHA3Cipher';
import Home from './components/Home';
import CiphersInfo from './components/CiphersInfo';  // Importa el nuevo componente
import AuthorInfo from './components/AutorInfo';



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
        <Route path="/info-cifrados" element={<CiphersInfo />} /> {/* Nueva ruta */}
        <Route path="/author-info" element={<AuthorInfo />} />
      </Routes>
    </Router>
  );
};

export default App;
