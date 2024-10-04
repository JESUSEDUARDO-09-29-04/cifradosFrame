import React from 'react';
import './CiphersInfo.css'; // Aquí puedes aplicar los estilos que hemos manejado.

const CiphersInfo = () => {
  const mostrarInstrucciones = () => {
    alert("Estas son las instrucciones para manejar diferentes tipos de cifrados.");
  };

  return (
    <section className="container my-5">
      <div className="row">
        {/* Cifrado Simétrico Blowfish */}
        <div className="col-md-6">
          <h3>Cifrado Simétrico (Blowfish)</h3>
          <p>Blowfish es un algoritmo de cifrado simétrico, lo que significa que usa la misma clave para cifrar y descifrar datos. Los sistemas simétricos son muy rápidos y eficientes para grandes cantidades de datos, pero tienen el desafío de compartir la clave de forma segura entre las partes involucradas.</p>
          <p><strong>Ventajas:</strong></p>
          <ul>
            <li>Rápido y eficiente en términos de rendimiento.</li>
            <li>Bueno para cifrar grandes cantidades de datos.</li>
          </ul>
          <p><strong>Desventajas:</strong></p>
          <ul>
            <li>Gestión de claves: La clave secreta debe mantenerse confidencial y compartirse de manera segura.</li>
          </ul>
        </div>

        {/* Cifrado Asimétrico ElGamal */}
        <div className="col-md-6">
          <h3>Cifrado Asimétrico (ElGamal)</h3>
          <p>ElGamal es un algoritmo de cifrado asimétrico que utiliza una clave pública para cifrar y una clave privada para descifrar. Es ideal para comunicaciones seguras en las que no se puede compartir una clave secreta previamente.</p>
          <p><strong>Ventajas:</strong></p>
          <ul>
            <li>Alta seguridad: No se requiere compartir una clave secreta entre las partes.</li>
            <li>Perfecto para sistemas donde las claves públicas pueden distribuirse de forma segura.</li>
          </ul>
          <p><strong>Desventajas:</strong></p>
          <ul>
            <li>ElGamal es más lento que los métodos simétricos.</li>
          </ul>
        </div>
      </div>

      {/* Información sobre SHA-3 */}
      <div className="row mt-4">
        <div className="col-md-12">
          <h3>Hash (SHA-3)</h3>
          <p>SHA-3 (Secure Hash Algorithm 3) es una familia de algoritmos de hashing, diseñados para generar un valor hash de longitud fija a partir de un bloque de datos. Es una función unidireccional que verifica la integridad de los datos sin "descifrarlos".</p>
          <p><strong>Versiones:</strong></p>
          <ul>
            <li>SHA3-224: Produce un hash de 224 bits.</li>
            <li>SHA3-256: Produce un hash de 256 bits.</li>
            <li>SHA3-384: Produce un hash de 384 bits.</li>
            <li>SHA3-512: Produce un hash de 512 bits.</li>
          </ul>
        </div>
      </div>

      {/* Comparación React vs Laravel */}
      <div className="row mt-4">
        <div className="col-md-12">
          <h3>Comparación entre React y Laravel para trabajar con estos métodos</h3>
          <p><strong>React:</strong></p>
          <p>React es una biblioteca para construir interfaces de usuario en el cliente (navegador). Aunque puede realizar tareas criptográficas sencillas como hashing, no es seguro realizar cifrado asimétrico como ElGamal en el navegador debido a la exposición de claves privadas.</p>

          <p><strong>Laravel:</strong></p>
          <p>Laravel es un framework que ofrece un entorno más seguro para realizar operaciones criptográficas como el cifrado asimétrico y la gestión de claves. Es ideal para implementar ElGamal y operaciones avanzadas de hashing y cifrado simétrico.</p>

          <p><strong>Conclusión:</strong></p>
          <ul>
            <li><strong>Blowfish:</strong> Se puede implementar tanto en React como en Laravel, pero es más seguro en Laravel.</li>
            <li><strong>ElGamal:</strong> Es mejor ejecutarlo en el backend por la gestión de claves y la seguridad.</li>
            <li><strong>SHA-3:</strong> Puede ejecutarse tanto en React como en Laravel, pero el backend es más seguro para la verificación de datos y autenticación.</li>
          </ul>
        </div>
      </div>

      {/* Botón para regresar al menú */}
      <button className="menu-button" onClick={() => window.location.href = '/'}>
        Regresar al Menú
      </button>

      
    </section>
  );
};

export default CiphersInfo;
