import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import './blowfish.css'; // Importa los estilos personalizados

const BlowfishCipherForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    contrasena: '',
    tarjetaCredito: '',
  });
  const [cipherKey, setCipherKey] = useState('');
  const [cipheredData, setCipheredData] = useState({});
  const [isCiphered, setIsCiphered] = useState(false);
  const [decryptedData, setDecryptedData] = useState(null);
  const [showInstructions, setShowInstructions] = useState(false); // Estado para mostrar las instrucciones

  // Manejo de cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Función para cifrar todos los datos del formulario
  const cifrarDatos = () => {
    if (!cipherKey) {
      alert('Por favor, ingrese la clave de cifrado.');
      return;
    }

    const encryptedData = {
      nombre: CryptoJS.Blowfish.encrypt(formData.nombre, cipherKey).toString(),
      apellido: CryptoJS.Blowfish.encrypt(formData.apellido, cipherKey).toString(),
      correo: CryptoJS.Blowfish.encrypt(formData.correo, cipherKey).toString(),
      contrasena: CryptoJS.Blowfish.encrypt(formData.contrasena, cipherKey).toString(),
      tarjetaCredito: CryptoJS.Blowfish.encrypt(formData.tarjetaCredito, cipherKey).toString(),
    };

    setCipheredData(encryptedData);
    setIsCiphered(true);
    setDecryptedData(null); // Limpiar los datos descifrados
  };

  // Función para descifrar los datos
  const descifrarDatos = () => {
    if (!cipherKey) {
      alert('Por favor, ingrese la clave de cifrado.');
      return;
    }

    try {
      const decryptedData = {
        nombre: CryptoJS.Blowfish.decrypt(cipheredData.nombre, cipherKey).toString(CryptoJS.enc.Utf8),
        apellido: CryptoJS.Blowfish.decrypt(cipheredData.apellido, cipherKey).toString(CryptoJS.enc.Utf8),
        correo: CryptoJS.Blowfish.decrypt(cipheredData.correo, cipherKey).toString(CryptoJS.enc.Utf8),
        contrasena: CryptoJS.Blowfish.decrypt(cipheredData.contrasena, cipherKey).toString(CryptoJS.enc.Utf8),
        tarjetaCredito: CryptoJS.Blowfish.decrypt(cipheredData.tarjetaCredito, cipherKey).toString(CryptoJS.enc.Utf8),
      };

      setDecryptedData(decryptedData);
    } catch (error) {
      alert('Error al descifrar. Verifique la clave y los datos cifrados.');
    }
  };

  // Función para mostrar el modal de instrucciones
  const mostrarInstrucciones = () => {
    setShowInstructions(true);
  };

  // Función para ocultar el modal de instrucciones
  const ocultarInstrucciones = () => {
    setShowInstructions(false);
  };

  return (
    <div className="container">
      <h2>Ejemplo de cifrado de datos</h2>
      <p>Ingresa los datos que se solicitan</p>

      <div className="section-container">
        {/* Contenedor del formulario */}
        <div className="form-section">
          <h3>Formulario de datos</h3>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Nombre"
          />

          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            placeholder="Apellido"
          />

          <label htmlFor="correo">Correo electrónico</label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            placeholder="Correo electrónico"
          />

          <label htmlFor="contrasena">Contraseña</label>
          <input
            type="password"
            id="contrasena"
            name="contrasena"
            value={formData.contrasena}
            onChange={handleChange}
            placeholder="Contraseña"
          />

          <label htmlFor="tarjetaCredito">Tarjeta de crédito</label>
          <input
            type="text"
            id="tarjetaCredito"
            name="tarjetaCredito"
            value={formData.tarjetaCredito}
            onChange={handleChange}
            placeholder="Tarjeta de crédito"
          />

          <label htmlFor="cipherKey">Clave de Cifrado (Blowfish):</label>
          <input
            type="text"
            id="cipherKey"
            value={cipherKey}
            onChange={(e) => setCipherKey(e.target.value)}
            placeholder="Ingrese la clave para Blowfish"
          />

          <button className="cipher-button" onClick={cifrarDatos}>Cifrar</button>
          
          {/* Botón para regresar al menú */}
          <button className="menu-button" onClick={() => window.location.href = '/'}>Regresar al Menú</button>
          
          {/* Botón para mostrar las instrucciones */}
          <button className="help-button" onClick={mostrarInstrucciones}>❓</button>
        </div>

        {/* Contenedor de datos cifrados */}
        {isCiphered && (
          <div className="ciphered-section">
            <h3>Datos Cifrados</h3>
            <p><strong>Nombre:</strong> {cipheredData.nombre}</p>
            <p><strong>Apellido:</strong> {cipheredData.apellido}</p>
            <p><strong>Correo electrónico:</strong> {cipheredData.correo}</p>
            <p><strong>Contraseña:</strong> {cipheredData.contrasena}</p>
            <p><strong>Tarjeta de crédito:</strong> {cipheredData.tarjetaCredito}</p>

            <button className="decipher-button" onClick={descifrarDatos}>Descifrar</button>
          </div>
        )}

        {/* Contenedor de datos descifrados */}
        {decryptedData && (
          <div className="decrypted-section">
            <h3>Datos Descifrados</h3>
            <p><strong>Nombre:</strong> {decryptedData.nombre}</p>
            <p><strong>Apellido:</strong> {decryptedData.apellido}</p>
            <p><strong>Correo electrónico:</strong> {decryptedData.correo}</p>
            <p><strong>Contraseña:</strong> {decryptedData.contrasena}</p>
            <p><strong>Tarjeta de crédito:</strong> {decryptedData.tarjetaCredito}</p>
          </div>
        )}

        {/* Modal para mostrar las instrucciones */}
        {showInstructions && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={ocultarInstrucciones}>&times;</span>
              <h3>Instrucciones de Uso</h3>
              <p>
                1. Ingresa los datos que deseas cifrar.<br />
                2. Escribe la clave de cifrado que utilizarás para el algoritmo Blowfish.<br />
                3. Haz clic en "Cifrar" para cifrar los datos.<br />
                4. Haz clic en "Descifrar" para descifrar los datos previamente cifrados.<br />
                5. Usa "Regresar al Menú" para volver a la página principal.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlowfishCipherForm;
