import React, { useState } from 'react';
import './escitala.css'; // Importa los estilos del CSS

const EscitalaCipher = () => {
  const [mensaje, setMensaje] = useState('');
  const [columnas, setColumnas] = useState(0);
  const [resultado, setResultado] = useState('');
  const [matriz, setMatriz] = useState([]);
  const [showInstructions, setShowInstructions] = useState(false); // Estado para mostrar el modal de instrucciones

  const validarFormulario = () => {
    if (!mensaje) {
      alert('El campo de mensaje no puede estar vacío');
      return false;
    }
    if (columnas < 3) {
      alert('El número de columnas debe ser mayor o igual a 3');
      return false;
    }
    if (columnas > mensaje.length) {
      alert('El número de columnas no puede ser mayor que la longitud del mensaje.');
      return false;
    }
    return true;
  };

  const cifrarEscitala = () => {
    if (!validarFormulario()) return;

    const longitud = mensaje.length;
    const filas = Math.ceil(longitud / columnas);
    const matriz = Array.from({ length: filas }, () => Array(columnas).fill(''));

    for (let i = 0; i < longitud; i++) {
      const fila = Math.floor(i / columnas);
      const columna = i % columnas;
      matriz[fila][columna] = mensaje[i];
    }

    let mensajeCifrado = '';
    for (let col = 0; col < columnas; col++) {
      for (let row = 0; row < filas; row++) {
        if (matriz[row][col] !== '') {
          mensajeCifrado += matriz[row][col];
        }
      }
    }

    setResultado(mensajeCifrado);
    setMatriz(matriz);
  };

  const descifrarEscitala = () => {
    if (!validarFormulario()) return;

    const longitud = mensaje.length;
    const filas = Math.ceil(longitud / columnas);
    const matriz = Array.from({ length: filas }, () => Array(columnas).fill(''));
    const numFullColumns = longitud % columnas;
    let index = 0;

    for (let col = 0; col < columnas; col++) {
      for (let row = 0; row < filas; row++) {
        if (numFullColumns !== 0 && col >= numFullColumns && row === filas - 1) continue;
        if (index < longitud) {
          matriz[row][col] = mensaje[index++];
        }
      }
    }

    let mensajeDescifrado = '';
    for (let row = 0; row < filas; row++) {
      for (let col = 0; col < columnas; col++) {
        if (matriz[row][col] !== '') {
          mensajeDescifrado += matriz[row][col];
        }
      }
    }

    setResultado(mensajeDescifrado);
  };

  const copiarTexto = () => {
    if (resultado) {
      navigator.clipboard.writeText(resultado)
        .then(() => alert('Texto copiado al portapapeles'))
        .catch(() => alert('Error al copiar el texto'));
    } else {
      alert('No hay texto para copiar');
    }
  };

  // Muestra el modal de instrucciones
  const mostrarInstrucciones = () => {
    setShowInstructions(true);
  };

  // Oculta el modal de instrucciones
  const ocultarInstrucciones = () => {
    setShowInstructions(false);
  };

  return (
    <div className="container">
      <h2>Cifrado Escítala</h2>
      <div className="form-container">
        <label htmlFor="mensaje">Mensaje a cifrar/descifrar:</label>
        <input
          type="text"
          id="mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Escribe o pega el mensaje"
        />

        <label htmlFor="columnas">Número de columnas (clave):</label>
        <input
          type="number"
          id="columnas"
          value={columnas}
          onChange={(e) => setColumnas(Number(e.target.value))}
          placeholder="Número de columnas"
        />

        <div className="buttons">
          <button id="cifrar" onClick={cifrarEscitala}>Cifrar</button>
          <button id="descifrar" onClick={descifrarEscitala}>Descifrar</button>
        </div>

        <div id="resultado-container" className="resultado-container">
          <strong>Resultado:</strong>
          <textarea readOnly value={resultado} />
          <button onClick={copiarTexto}>Copiar</button>
        </div>

        <div id="matriz-container" className="matriz-container">
          <h3>Matriz generada:</h3>
          <table className="matrix-table">
            <tbody>
              {matriz.map((fila, rowIndex) => (
                <tr key={rowIndex}>
                  {fila.map((columna, colIndex) => (
                    <td key={colIndex} className="matrix-cell">
                      {columna || ' '} {/* Si la celda está vacía, muestra un espacio en blanco */}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button className="menu-button" onClick={() => window.location.href = '/'}>
          Regresar al Menú
        </button>

        {/* Botón de ayuda con el signo de interrogación */}
        <button className="help-button" onClick={mostrarInstrucciones}>❓</button>

        {/* Modal de instrucciones */}
        {showInstructions && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={ocultarInstrucciones}>&times;</span>
              <h3>Instrucciones</h3>
              <p>
                1. Ingresa el mensaje que deseas cifrar o descifrar.<br />
                2. Selecciona el número de columnas (mínimo 3).<br />
                3. Haz clic en "Cifrar" o "Descifrar" para obtener el resultado.<br />
                4. Usa el botón "Copiar" para guardar el texto cifrado/descifrado.<br />
                5. Puedes ver la matriz generada (solo en cifrado).
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EscitalaCipher;
