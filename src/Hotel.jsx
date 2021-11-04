import React from "react";
import "./Hotel.css";
import PriceTag from "./PriceTag";

const Hotel = (props) => {
  return (
    <section className="hotel">
      <img className="image" src={props.imagen} alt={props.nombre} />
      <h3 className="nombre-hotel">{props.nombre}</h3>
      <div>
        <div className="fecha">
          Desde: {new Date(props.fechadesde).toLocaleDateString()}
        </div>
      </div>
      <div>
        <div className="fecha">
          Hasta: {new Date(props.fechahasta).toLocaleDateString()}
        </div>
      </div>
      <div className="descripcion">{props.descripcion}</div>
      <div>
        <div className="destino">
          <i className="fas fa-map-marker-alt"></i>
          {`   ${props.ciudad}, ${props.pais}`}
        </div>
      </div>
      <div className="items">
        <PriceTag count={props.precio} />
      </div>
      <div className="items">
        <i className="fas fa-bed"></i> Habitaciones:
        {`   ${props.habitaciones}`}
      </div>

      <button className="boton-reserva ">Reservar</button>
    </section>
  );
};

export default Hotel;
