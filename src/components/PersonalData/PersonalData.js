import React, { useEffect, useState } from "react";
import axios from "axios";
import PacientCard from "../PacientCard/PacientCard";

const PersonalData = () => {


const [persData, setPersData] = useState({});
const PROYECTO = "pacientes-9c028";

useEffect(() => {
    axios.get(`https://${PROYECTO}.firebaseio.com/pacient.json`)
    .then(({data}) => setPersData(data));

  }, [])


  return (
    <div>
      <div className="title">
        <p className="bold">{Object.keys(persData).map((id) => 
        <persData name={persData[id].name} />)  }</p>
        <p className="regular">Sexo</p>
      </div>
      <ul>
        <li>
          <div className="icon">
            <i className="fas fa-map-signs"></i>
          </div>
          <div className="data" age="">Edades</div>
        </li>
        <li>
          <div className="icon">
            <i className="fas fa-mobile-alt"></i>
          </div>
          <div className="data">Teléfono de Contacto</div>
        </li>
        <li>
          <div className="icon">
            <i className="fas fa-envelope"></i>
          </div>
          <div className="data">correo electrónico</div>
        </li>
        <li>
          <div className="icon">
            <i className="fab fa-weebly"></i>
          </div>
          <div className="data">Tipo sanguíneo</div>
        </li>
      </ul>
    </div>
  );
};

export default PersonalData;
