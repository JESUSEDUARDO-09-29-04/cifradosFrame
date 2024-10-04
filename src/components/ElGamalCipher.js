import React, { useState } from 'react';
import './ElGamalCipher.css'; // Importa los estilos

const ElGamalCipher = () => {
  const [message, setMessage] = useState('');
  const [encryptedMessage, setEncryptedMessage] = useState(null);
  const [decryptedMessage, setDecryptedMessage] = useState('');
  const [showHelp, setShowHelp] = useState(false); // Estado para mostrar/ocultar el modal de ayuda

  const p = 23;  // Número primo grande
  const g = 5;   // Número base
  const publicKey = 7;   // Clave pública
  const privateKey = 15;  // Clave privada

  // Cifrar el mensaje
  const encryptMessage = () => {
    const messageAsNumber = stringToNumber(message); // Convertir el mensaje en número
    const k = getRandomInt(1, p - 2); // Valor aleatorio k
    const c1 = modPow(g, k, p); // c1 = g^k mod p
    const s = modPow(publicKey, k, p); // s = publicKey^k mod p
    const c2 = (messageAsNumber * s) % p; // c2 = mensaje * s mod p
    setEncryptedMessage({ c1, c2 });
  };

  // Descifrar el mensaje
  const decryptMessage = () => {
    if (encryptedMessage) {
      const { c1, c2 } = encryptedMessage;
      const s = modPow(c1, privateKey, p); // s = c1^privateKey mod p
      const sInverse = modInverse(s, p); // s^-1 mod p
      const decryptedNumber = (c2 * sInverse) % p; // mensaje = c2 * s^-1 mod p
      setDecryptedMessage(numberToString(decryptedNumber)); // Convertir número en cadena
    }
  };

  // Convertir un string a número
  const stringToNumber = (str) => {
    return str.split('').reduce((acc, char) => acc * 256 + char.charCodeAt(0), 0);
  };

  // Convertir número a string
  const numberToString = (num) => {
    let result = '';
    while (num > 0) {
      result = String.fromCharCode(num % 256) + result;
      num = Math.floor(num / 256);
    }
    return result;
  };

  // Calcular (base^exp) % mod
  const modPow = (base, exp, mod) => {
    let result = 1;
    base = base % mod;
    while (exp > 0) {
      if (exp % 2 === 1) {
        result = (result * base) % mod;
      }
      exp = Math.floor(exp / 2);
      base = (base * base) % mod;
    }
    return result;
  };

  // Calcular el inverso modular
  const modInverse = (a, m) => {
    const m0 = m;
    let y = 0, x = 1;
    if (m === 1) return 0;
    while (a > 1) {
      const q = Math.floor(a / m);
      let t = m;
      m = a % m;
      a = t;
      t = y;
      y = x - q * y;
      x = t;
    }
    if (x < 0) x += m0;
    return x;
  };

  // Generar un número aleatorio entre min y max
  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <div className="container">
      <h2>Cifrado ElGamal</h2>
      <p>Ingresa el mensaje que deseas cifrar:</p>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Mensaje"
      />
      <div className="buttons">
        <button className="cipher-button" onClick={encryptMessage}>Cifrar</button>
        <button className="decipher-button" onClick={decryptMessage}>Descifrar</button>
      </div>

      {encryptedMessage && (
        <div className="ciphered-section">
          <h3>Mensaje Cifrado</h3>
          <p><strong>C1:</strong> {encryptedMessage.c1}</p>
          <p><strong>C2:</strong> {encryptedMessage.c2}</p>
        </div>
      )}

      {decryptedMessage && (
        <div className="decrypted-section">
          <h3>Mensaje Descifrado</h3>
          <p>{decryptedMessage}</p>
        </div>
      )}

      {/* Botón para regresar al menú */}
      <button className="menu-button" onClick={() => window.location.href = '/'}>Regresar al Menú</button>

      {/* Botón de ayuda (❓) */}
      <button className="help-button" onClick={() => setShowHelp(true)}>❓</button>

      {/* Modal de ayuda */}
      {showHelp && (
        <div className="modal" onClick={() => setShowHelp(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => setShowHelp(false)}>&times;</span>
            <h3>Instrucciones para Cifrado ElGamal</h3>
            <p>ElGamal es un cifrado asimétrico donde:</p>
            <ul>
              <li>Usas una clave pública para cifrar el mensaje.</li>
              <li>Se requiere una clave privada para descifrar.</li>
              <li>El cifrado genera dos valores: C1 y C2, que deben enviarse juntos.</li>
            </ul>
            <p><strong>Pasos para usarlo:</strong></p>
            <ol>
              <li>Ingresa el mensaje en el campo de texto.</li>
              <li>Haz clic en "Cifrar" para obtener el mensaje cifrado.</li>
              <li>Si deseas descifrar, presiona "Descifrar".</li>
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};

export default ElGamalCipher;
