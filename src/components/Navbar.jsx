import React from 'react';
import logoMatricula from '../assets/logomatricula.jpg'; 

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-2 py-lg-3" data-bs-theme="dark">
      <div className="container">
        
        {/* LOGO: Ahora cambia de tamaño según la pantalla de forma responsiva */}
        <a className="navbar-brand d-flex align-items-center fw-bold text-white me-0 me-lg-5" href="#dashboard">
          <img 
            src={logoMatricula} 
            alt="Logo Mi Matrícula" 
            className="d-inline-block align-top rounded-circle" 
            style={{ 
              objectFit: 'cover',
              border: '2px solid #00d2d3',
              // Usamos variables CSS o clases para controlar el tamaño responsivo de forma limpia:
              width: 'clamp(45px, 8vw, 75px)',  
              height: 'clamp(45px, 8vw, 75px)'
            }}
          />
        </a>
        
        {/* Botón de hamburguesa para celular */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#responsive-navbar-nav" 
          aria-controls="responsive-navbar-nav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Contenedor principal del menú */}
        <div className="collapse navbar-collapse" id="responsive-navbar-nav">
          
          {/* ENLACES: Añadido centrado de texto y margen superior en móvil para que no se pegue al logo */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center text-lg-start mt-3 mt-lg-0">
            {/* 'py-2 py-lg-0' da espacio para que sea fácil presionar con el dedo en el celular */}
            <li className="nav-item mx-lg-2 py-2 py-lg-0">
              <a className="nav-link text-white-50" href="#inicio">Inicio</a>
            </li>
            <li className="nav-item mx-lg-2 py-2 py-lg-0">
              <a className="nav-link text-white-50" href="#cursos">Cursos</a>
            </li>
            <li className="nav-item mx-lg-2 py-2 py-lg-0">
              <a className="nav-link text-white-50" href="#especializaciones">Especializaciones</a>
            </li>
            <li className="nav-item mx-lg-2 py-2 py-lg-0">
              <a className="nav-link text-white-50" href="#contacto">Contacto</a>
            </li>
          </ul>
          
          {/* BOTÓN LOGIN: Centrado en celulares con márgenes cómodos */}
          <ul className="navbar-nav ms-lg-3 text-center mt-2 mt-lg-0"> 
            <li className="nav-item py-2 py-lg-0">
              <a 
                className="btn btn-sm text-uppercase fw-bold px-4 rounded-pill d-inline-block" 
                href="#login"
                style={{ 
                  backgroundColor: 'transparent',
                  border: '2px solid #00d2d3', 
                  color: '#00d2d3',
                  transition: '0.3s'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#00d2d3';
                  e.target.style.color = 'white';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#00d2d3';
                }}
              >
                Login
              </a>
            </li>
          </ul>
          
        </div>

      </div>
    </nav>
  );
};

export default Navbar;