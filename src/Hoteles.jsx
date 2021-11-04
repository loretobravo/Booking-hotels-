import React from "react";
import "./Hoteles.css";
import Hotel from "./Hotel";

const Hoteles = (props) => {
  return (
    <div className="hoteles">
      {props.listaHoteles.length ? (
        props.listaHoteles.map((hotel) => {
          return (
            <Hotel
              key={hotel.slug}
              nombre={hotel.name}
              fechadesde={hotel.availabilityFrom}
              fechahasta={hotel.availabilityTo}
              pais={hotel.country}
              ciudad={hotel.city}
              descripcion={hotel.description}
              imagen={hotel.photo}
              precio={hotel.price}
              habitaciones={hotel.rooms}
            />
          );
        })
      ) : (
        <div className="Error">
          <div className="sad">
            <i className="far fa-sad-cry"></i>
          </div>
          <h2>
            Lo sentimos, no se encuentran hoteles con los filtros seleccionados
          </h2>
        </div>
      )}
    </div>
  );
};

export default Hoteles;
