import React from 'react'

const Doctor = () => {
  const PROJECT = 'clinicapp-3b040';

  return (
    <div>
      <form>
        <h1>Registro de médico</h1>
        <div className="form-group row">
          <label htmlFor="" class="col-sm-2 col-form-label">Cédula</label>
          <div class="col-sm-10">
          <input type="text" className="form-control text-left" id="cedula" />
        </div>
        </div>
        
        <div className="form-group row">
          <label htmlFor="" class="col-sm-2 col-form-label">Nombre</label>
          <div class="col-sm-10">
          <input type="text" className="form-control text-left" id="nombre"/>
        </div>
        </div>

        <div className="form-group row">
          <label htmlFor="" class="col-sm-2 col-form-label">Apellidos</label>
          <div class="col-sm-10">
          <input type="text" className="form-control text-left" id="apellidos" />
        </div>
        </div>

        <div className="form-group row">
          <label htmlFor="" class="col-sm-2 col-form-label">Especialidad</label>
          <div class="col-sm-10">
          <input type="text" className="form-control text-left" id="especialidad"  />
        </div>
        </div>

        <div className="form-group row">
          <label htmlFor="" class="col-sm-2 col-form-label">Horario de atención</label>
          <div class="col-sm-10">
          <input type="text" className="form-control text-left" id="horario"  />
        </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Doctor
