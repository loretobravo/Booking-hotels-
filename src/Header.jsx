import React from "react";
import "./Header.css";

function Header({ pais, tamaño, precio, fechaDesde, fechaHasta }) {
  //función que permite convertir los precios en un filtro de lenguaje natural
  const obtenerPrecio = (precio) => {
    let resp = "";
    switch (precio) {
      case "$":
        resp = " en oferta";
        break;
      case "$$":
        resp = "economico";
        break;
      case "$$$":
        resp = "moderado";
        break;
      case "$$$$":
        resp = "lujoso";
        break;
      default:
        resp = "";
        break;
    }
    return resp;
  };
  return (
    <header className="header">
      <h1 className="titulo-header">Hoteles</h1>
      <p>
        {fechaDesde === "" ? (
          "Desde cualquier fecha "
        ) : (
          <strong>
            Desde el{" "}
            {new Date(fechaDesde).toLocaleDateString("es-CL", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              timeZone: "UTC"
            })}{" "}
          </strong>
        )}
        {fechaHasta === "" ? (
          "hasta cualquier fecha."
        ) : (
          <strong>
            hasta el{" "}
            {new Date(fechaHasta).toLocaleDateString("es-CL", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              timeZone: "UTC"
            })}{" "}
          </strong>
        )}
      </p>
      <p>
        {pais === "todos" ? "En cualquier país." : <strong>En {pais}</strong>}
      </p>

      <p>
        {tamaño === "todos" ? (
          "De cualquier tamaño."
        ) : (
          <strong>De tamaño {tamaño}</strong>
        )}
      </p>

      <p>
        {precio === "todos" ? (
          "De cualquier precio."
        ) : (
          <strong>De precio {obtenerPrecio(precio)}</strong>
        )}
      </p>
    </header>
  );
}

export default Header;
