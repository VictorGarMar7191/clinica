import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom'
import './LoginMedico.css'
import axios from 'axios';

const LoginMedico = () => {

    const PROJECT = 'clinicapp-3b040';

    const [cedula, setCedula] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleCedula = (e) => {
        setCedula(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const consultMed = () => {
        axios.get(`https://${PROJECT}.firebaseio.com/registro-medicos.json`)
            .then(({ data }) => {
                const arrayCedulas = Object.keys(data).map((key) => data[key].cedula)
                for (let i = 0; i < arrayCedulas.length; i++) {
                    // Se busca si existe el número de cédula
                    if (arrayCedulas[i] === cedula) {
                        // Se busca si está bien la contraseña
                        const arrayPassword = Object.keys(data).map((key) => data[key].password)
                        for (let i = 0; i < arrayPassword.length; i++) {
                            if (arrayPassword[i] === password) {
                                // Si ambos datos concuerdan, se redirige a otra parte
                                window.location.href = '/Consulta';
                                console.log("Exitoso")
                            } else {
                                alert("Contraseña incorrecta")
                            }
                        }
                    } else {
                        alert(`El número de cédula ${cedula} no fue encontrado`)
                    }
                }
            });
    }

    return (
        <div>
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <div className="fadeIn first">
                        <h1>Bienvenido</h1>
                    </div>

                    <input
                        onChange={handleCedula}
                        type="text"
                        id="cedula"
                        className="fadeIn second"
                        name="login"
                        placeholder="Cédula profesional"
                        value={cedula}
                    />
                    <input
                        onChange={handlePassword}
                        type="password"
                        id="contrasenia"
                        className="fadeIn third"
                        name="login"
                        placeholder="Contraseña"
                        value={password}
                    />
                    <button onClick={() => consultMed()} type="button" className="fadeIn fourth">Ingresar</button>
                </div>
            </div>
        </div>
    )
}

export default LoginMedico
