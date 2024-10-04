import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <h2>Bienvenido a la página de Cifrados</h2>
      <p>Selecciona el cifrado que deseas utilizar:</p>
      <div className="buttons">
        <Link to="/cesar"><button>Cifrado César</button></Link>
        <Link to="/escitala"><button>Cifrado Escítala</button></Link>
        <Link to="/blowfish"><button>Cifrado Blowfish</button></Link>
        <Link to="/elgamal"><button>Cifrado ElGamal</button></Link>
        <Link to="/sha3"><button>Cifrado SHA-3</button></Link>
      </div>
    </div>
  );
};

export default Home;
