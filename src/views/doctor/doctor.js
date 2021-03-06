import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Doctor = () => {

  const PROJECT = 'clinicapp-3b040';

  const [cedula, setCedula] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [especialidad, setEspecialidad] = useState('');
  const [horario, setHorario] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const handleCedula = (e) => {
    setCedula(e.target.value);
  }

  const handleNombre = (e) => {
    setNombre(e.target.value);
  }

  const handleApellidos = (e) => {
    setApellidos(e.target.value);
  }

  const handleEspecialidad = (e) => {
    setEspecialidad(e.target.value);
  }

  const handleHorario = (e) => {
    setHorario(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const createRegister = () => {
    setLoading(true);
    if (nombre.length > 2
      && apellidos.length > 5
      && cedula.length > 5
      && especialidad.length > 5
      && horario.length > 5
      && password.length >5) {
      const body = {
        cedula: cedula,
        nombre: nombre,
        apellidos: apellidos,
        especialidad: especialidad,
        horario: horario,
        password: password
      }
      axios.post(`https://${PROJECT}.firebaseio.com/registro-medicos.json`, body)
        .then(() => {
          history.push('/');
        })
        .catch(() => {
          setLoading(false);
          setError("Ocurrió un error de conexión");
        });
    } else {
      setLoading(false);
      setError('Verifica que ingresaste información válida');
    }
  };

  return (

    // </div>
    <div>
        <h1>Registro de médico</h1>
        <div className="form-group row">
          <label htmlFor="" className="col-sm-2 col-form-label">Cédula</label>
          <div className="col-sm-10">
          <input onChange={handleCedula} value={cedula} type="text" className="form-control text-left" />
        </div>
        </div>
        
        <div className="form-group row">
          <label htmlFor="" className="col-sm-2 col-form-label">Nombre</label>
          <div className="col-sm-10">
          <input onChange={handleNombre} value={nombre} type="text" className="form-control text-left" id="nombre"/>
        </div>
        </div>

        <div className="form-group row">
          <label htmlFor="" className="col-sm-2 col-form-label">Apellidos</label>
          <div className="col-sm-10">
          <input onChange={handleApellidos} value={apellidos} type="text" className="form-control text-left" id="apellidos" />
        </div>
        </div>

        <div className="form-group row">
          <label htmlFor="" className="col-sm-2 col-form-label">Especialidad</label>
          <div className="col-sm-10">
          <input onChange={handleEspecialidad} value={especialidad} type="text" className="form-control text-left" id="especialidad"  />
        </div>
        </div>

        <div className="form-group row">
          <label htmlFor="" className="col-sm-2 col-form-label">Horario de atención</label>
          <div className="col-sm-10">
          <input onChange={handleHorario} value={horario} type="text" className="form-control text-left" id="horario"  />
        </div>
        </div>

        <div className="form-group row">
          <label htmlFor="" className="col-sm-2 col-form-label">Contraseña</label>
          <div className="col-sm-10">
          <input onChange={handlePassword} value={password} type="password" className="form-control text-left" id="password" 
                  placeholder="La contraseña debe tener mínimo 5 caracteres" />
        </div>
        </div>

        <div class="text-danger">
           {error}
         </div>
         {loading
           ?
          <div class="spinner-border text-info" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          : <button onClick={() => createRegister()} type="submit" className="btn btn-primary">Crear Registro</button>
        }
    </div>
  )
}

export default Doctor;
