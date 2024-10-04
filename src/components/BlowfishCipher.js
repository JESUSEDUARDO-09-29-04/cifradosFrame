import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import './App.css';

const BlowfishCipher = () => {
  const [message, setMessage] = useState('');
  const [key, setKey] = useState('');
  const [result, setResult] = useState('');

  const encrypt = () => {
    const encrypted = CryptoJS.Blowfish.encrypt(message, key).toString();
    setResult(encrypted);
  };

  const decrypt = () => {
    const decrypted = CryptoJS.Blowfish.decrypt(result, key).toString(CryptoJS.enc.Utf8);
    setResult(decrypted);
  };

  return (
    <div>
      <h2>Blowfish Cipher</h2>
      <input type="text" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
      <input type="text" placeholder="Key" value={key} onChange={(e) => setKey(e.target.value)} />
      <button onClick={encrypt}>Encrypt</button>
      <button onClick={decrypt}>Decrypt</button>
      <div><strong>Result:</strong> {result}</div>
    </div>
  );
};

export default BlowfishCipher;
