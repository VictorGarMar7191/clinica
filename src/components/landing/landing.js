import React from 'react'
import doctor from '../../img/doctor.PNG'

const Landing = () => {
    return (

        <div>
            <div className="container">
                <div className="card bg-dark text-black">
                    <img src={doctor} alt="" className="card-img" />
                    <div className="card-img-overlay">
                    </div>
                </div>
            </div>


            <div className="card container">
                <div className="card-header text-center">
                    <a name="quienes">
                            <h1>Nuestra Plataforma</h1>
                    </a>
                </div>

                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>Clinicapp es una plataforma que permite a los profesionales de la salud acceder a una base de datos donde podrá conocer el Historial clínico de sus pacientes.</p>
                    </blockquote>

                    <div className="card-deck">
                        <div className="card">
                            <div className="card-body text-center">
                                    <h1>1.-</h1>
                                <p className="card-text">Da de alta un paciente en la plataforma o encuentra su expediente clínico en nuestra plataforma.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body text-center">
                                    <h1>2.-</h1>
                                <p className="card-text">Elabora una nota médica con la información de la consulta.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body text-center">
                                    <h1>3.-</h1>
                                <p className="card-text">Guarda la información del paciente en la plataforma para que pueda ser accesible por otros especialistas.</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Landing
