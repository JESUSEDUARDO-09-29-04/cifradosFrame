import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import './SHA3Cipher.css'; // Asegúrate de usar el CSS correcto

const SHA3Cipher = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [tarjeta, setTarjeta] = useState('');
  const [hashType, setHashType] = useState('SHA3-224'); // Default Hash Type
  const [resultadoHash, setResultadoHash] = useState('');
  const [showInstructions, setShowInstructions] = useState(false); // Estado para mostrar el modal de instrucciones

  // Función para seleccionar el algoritmo de Hash
  const getHashFunction = () => {
    switch (hashType) {
      case 'SHA3-224':
        return (data) => CryptoJS.SHA3(data, { outputLength: 224 }).toString(CryptoJS.enc.Base64);
      case 'SHA3-256':
        return (data) => CryptoJS.SHA3(data, { outputLength: 256 }).toString(CryptoJS.enc.Base64);
      case 'SHA3-384':
        return (data) => CryptoJS.SHA3(data, { outputLength: 384 }).toString(CryptoJS.enc.Base64);
      case 'SHA3-512':
        return (data) => CryptoJS.SHA3(data, { outputLength: 512 }).toString(CryptoJS.enc.Base64);
      default:
        return (data) => CryptoJS.SHA3(data, { outputLength: 224 }).toString(CryptoJS.enc.Base64);
    }
  };

  // Función para cifrar los datos
  const cifrar = () => {
    const hashFn = getHashFunction();
    const hashData = {
      nombre: hashFn(nombre),
      apellido: hashFn(apellido),
      email: hashFn(email),
      password: hashFn(password),
      tarjeta: hashFn(tarjeta),
    };
    setResultadoHash(hashData);
  };

  // Función para mostrar u ocultar instrucciones
  const mostrarInstrucciones = () => {
    setShowInstructions(true);
  };

  const ocultarInstrucciones = () => {
    setShowInstructions(false);
  };

  return (
    <div className="container">
      <h2>Ejemplo de cifrado de datos (SHA-3)</h2>
      <p>Ingresa los datos que se solicitan</p>

      {/* Contenedor principal del formulario */}
      <div className="section-container">
        <div className="form-section">
          <h3>Formulario de datos</h3>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre"
          />

          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            id="apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            placeholder="Apellido"
          />

          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo electrónico"
          />

          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
          />

          <label htmlFor="tarjeta">Tarjeta de crédito</label>
          <input
            type="text"
            id="tarjeta"
            value={tarjeta}
            onChange={(e) => setTarjeta(e.target.value)}
            placeholder="Tarjeta de crédito"
          />

          <label htmlFor="hashType">Método de cifrado:</label>
          <select
            id="hashType"
            value={hashType}
            onChange={(e) => setHashType(e.target.value)}
          >
            <option value="SHA3-224">SHA3-224</option>
            <option value="SHA3-256">SHA3-256</option>
            <option value="SHA3-384">SHA3-384</option>
            <option value="SHA3-512">SHA3-512</option>
          </select>

          {/* Botón para cifrar */}
          <button className="cipher-button" onClick={cifrar}>
            Cifrar
          </button>

          {/* Botón para regresar al menú */}
          <button className="menu-button" onClick={() => window.location.href = '/'}>
            Regresar al Menú
          </button>

          {/* Botón de ayuda */}
          <button className="help-button" onClick={mostrarInstrucciones}>❓</button>
        </div>

        {/* Contenedor de datos cifrados */}
        {resultadoHash && (
          <div className="ciphered-section">
            <h3>Datos Cifrados</h3>
            <p><strong>Nombre:</strong> {resultadoHash.nombre}</p>
            <p><strong>Apellido:</strong> {resultadoHash.apellido}</p>
            <p><strong>Correo electrónico:</strong> {resultadoHash.email}</p>
            <p><strong>Contraseña:</strong> {resultadoHash.password}</p>
            <p><strong>Tarjeta de crédito:</strong> {resultadoHash.tarjeta}</p>
          </div>
        )}
      </div>

      {/* Modal para mostrar las instrucciones */}
      {showInstructions && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={ocultarInstrucciones}>&times;</span>
            <h3>Instrucciones</h3>
            <p>
              1. Ingresa los datos que deseas cifrar.<br />
              2. Selecciona el método de cifrado (SHA3-224, SHA3-256, etc).<br />
              3. Haz clic en "Cifrar" para obtener el resultado.<br />
              4. El cifrado es irreversible y no se puede descifrar.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SHA3Cipher;
