import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light ">
        <NavLink className="navbar-brand" to="#">ClinicApp</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" 
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <NavLink className="nav-link" activeClassName="disabled" to="/Inicio">Inicio</NavLink>
                <NavLink className="nav-link" activeClassName="disabled" to="/Quienes">¿Quiénes Somos?</NavLink>
                <NavLink className="nav-link" activeClassName="disabled" to="/Contacto">Contacto</NavLink>
                <NavLink className="nav-link" activeClassName="disabled" to="/Doctor">Doctor</NavLink>
                <NavLink className="nav-link" activeClassName="disabled" to="/Consulta">Consulta</NavLink>
                <NavLink className="nav-link" activeClassName="disabled" to="/Paciente">Paciente</NavLink>
            </div>
        </div>
    </nav>
        </div>
    )
}

export default Navbar
