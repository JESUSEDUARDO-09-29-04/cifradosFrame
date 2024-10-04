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
        <Link to="/blowfish"><button>Cifrado Simétrico</button></Link>
        <Link to="/elgamal"><button>Cifrado ElGamal</button></Link>
        <Link to="/sha3" ><button>Cifrado Hash</button></Link>

        {/* Nuevo botón para la página de información de cifrados */}
        <Link to="/info-cifrados" id='inf'><button>Información de Cifrados</button></Link>
        <Link to="/author-info"><button style={{ backgroundColor: '#03bb85' }}>Acerca del Autor</button></Link>
      </div>
    </div>
  );
};

export default Home;
