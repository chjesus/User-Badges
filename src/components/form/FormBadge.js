import React from "react";

import "./FormBadge.scss";

const FormBadge = props => {
  return (
    <form action="" className="form" onSubmit={props.submit}>
      <div className="form__group">
        <label htmlFor="firstname">Nombre</label>
        <input
          type="text"
          name="firstName"
          id="firstname"
          placeholder="Nombre"
          onChange={props.change}
          value={props.formValues.firstName}
        />
      </div>
      <div className="form__group">
        <label htmlFor="lastname">Apellido</label>
        <input
          type="text"
          name="lastName"
          id="lastname"
          placeholder="Apellido"
          onChange={props.change}
          value={props.formValues.lastName}
        />
      </div>
      <div className="form__group">
        <label htmlFor="email">Correo</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Correo"
          onChange={props.change}
          value={props.formValues.email}
        />
      </div>
      <div className="form__group">
        <label htmlFor="titulo">Titulo Profesional</label>
        <input
          type="text"
          name="jobTitle"
          id="titulo"
          placeholder="Titulo Profesiona"
          onChange={props.change}
          value={props.formValues.jobTitle}
        />
      </div>
      <div className="form__group">
        <button
          type="button"
          name="avatar"
          className="btn btn-info"
          onClick={props.changeAvatar}
        >
          Imagen Aleatoria
        </button>
        <button
          type="button"
          className="btn btn-info"
          onClick={props.userRandom}
        >
          Usuario Aleatorio
        </button>
      </div>
      <div className="form__group check">
        {props.success && (
          <div className="btn btn-primary">{props.success}</div>
        )}
        {props.error && <div className="btn btn-danger">Campos Vacios</div>}

        {/* <input type="checkbox" name="" id="terminos" /> */}
        {/* <label htmlFor="terminos">Lorem, ipsum dolor.</label> */}
      </div>
      <div className="form__group">
        <button className="btn btn-primary" onClick={props.click}>
          Guardar Usuario
        </button>
      </div>
    </form>
  );
};

export default FormBadge;
