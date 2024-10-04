import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Assuming you want to maintain the same styles

const AuthorInfo = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <h2>Datos de los Autores</h2>
      <div className="form-container">
        <p><strong>Nombre:</strong> Jesús Eduardo Hernández Sánchez</p>
        <p><strong>Nombre:</strong> Carlos Francisco García Flores</p>
        <p><strong>Carrera:</strong> Ingeniería en Desarrollo y Gestión de Software</p>
        <p><strong>Universidad:</strong> Universidad Tecnológica de la Huasteca Hidalguense</p>
        <p><strong>Grado:</strong> 7mo</p>
        <p><strong>Grupo:</strong> A</p>
        <button className="menu-button" onClick={goBack}>Regresar al Menú</button>
      </div>
    </div>
  );
};

export default AuthorInfo;
