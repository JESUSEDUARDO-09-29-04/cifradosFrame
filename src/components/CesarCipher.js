import React, { useState } from 'react';
import './cesar.css';

const CesarCipher = () => {
  const [inputText, setInputText] = useState('');
  const [shift, setShift] = useState(0);
  const [outputText, setOutputText] = useState('');
  const [showInstructions, setShowInstructions] = useState(false); // Estado para mostrar el modal de instrucciones

  // Función para aplicar el cifrado
  const aplicarCifrado = (texto, desplazamiento) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';

    for (let i = 0; i < texto.length; i++) {
      let char = texto[i];

      if (alphabet.includes(char)) {
        let index = alphabet.indexOf(char);
        let newIndex = (index + desplazamiento) % alphabet.length;
        if (newIndex < 0) {
          newIndex = alphabet.length + newIndex;
        }
        result += alphabet[newIndex];
      } else {
        result += char; // Mantener caracteres no alfabéticos
      }
    }
    return result;
  };

  // Funciones para cifrar y descifrar
  const cifrar = () => {
    if (!isNaN(shift)) {
      const result = aplicarCifrado(inputText, parseInt(shift));
      setOutputText(result);
    } else {
      alert('Por favor, ingresa un desplazamiento válido');
    }
  };

  const descifrar = () => {
    if (!isNaN(shift)) {
      const result = aplicarCifrado(inputText, -parseInt(shift));
      setOutputText(result);
    } else {
      alert('Por favor, ingresa un desplazamiento válido');
    }
  };

  // Copiar el resultado al portapapeles
  const copiarTexto = () => {
    if (outputText) {
      navigator.clipboard.writeText(outputText).then(() => {
        alert('Texto copiado al portapapeles');
      }).catch(() => {
        alert('Error al copiar el texto');
      });
    } else {
      alert('No hay texto para copiar');
    }
  };

  // Función para mostrar/ocultar las instrucciones
  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  return (
    <div className="container">
      <h2>Cifrado César</h2>
      <div className="form-container">
        <label htmlFor="inputText">Mensaje a cifrar/descifrar:</label>
        <input
          type="text"
          id="inputText"
          placeholder="Introduce el texto"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />

        <label htmlFor="shift">Desplazamiento (número entero):</label>
        <input
          type="number"
          id="shift"
          placeholder="Introduce el desplazamiento"
          value={shift}
          onChange={(e) => setShift(e.target.value)}
        />

        <div className="buttons">
          <button onClick={cifrar}>Cifrar</button>
          <button onClick={descifrar}>Descifrar</button>
        </div>

        <div id="resultado-container">
          <strong>Resultado:</strong>
          <textarea id="outputText" value={outputText} readOnly />
          <button onClick={copiarTexto}>Copiar</button>
        </div>

        <button className="menu-button" onClick={() => window.location.href = '/'}>
          Regresar al Menú
        </button>

        {/* Botón de interrogación justo después del botón "Regresar al Menú" */}
        <button className="help-button" onClick={toggleInstructions}>❓</button>

        {showInstructions && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={toggleInstructions}>&times;</span>
              <h3>Instrucciones</h3>
              <p>
                1. Ingresa el mensaje que deseas cifrar o descifrar.<br />
                2. Selecciona el número de desplazamiento.<br />
                3. Haz clic en "Cifrar" o "Descifrar" para obtener el resultado.<br />
                4. Usa el botón "Copiar" para guardar el texto cifrado/descifrado.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CesarCipher;
