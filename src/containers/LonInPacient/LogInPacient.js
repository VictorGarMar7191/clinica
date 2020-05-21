import React from "react";
import "./LogInPacient.css";

const LogInPacient = () => {
  return (
    <div>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <h1>Bienvenido</h1>
          </div>

          <form>
            <input
              type="text"
              id="CURP"
              className="fadeIn second"
              name="login"
              placeholder="login"
            />
            <input
              type="text"
              id="Contraseña"
              className="fadeIn third"
              name="login"
              placeholder="password"
            />
            <input type="submit" className="fadeIn fourth" value="Ingresar" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogInPacient;
