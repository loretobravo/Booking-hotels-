import React, { useState } from "react";
import Header from "./Header";
import Filtros from "./Filtros";
import Hoteles from "./Hoteles";
import { hotelsData } from "./HotelsData";

export default function App() {
  const [fechaDesde, actualizarFechaDesde] = useState("");
  const [fechaHasta, actualizarFechaHasta] = useState("");
  const [pais, actualizarPais] = useState("todos");
  const [precio, actualizarPrecio] = useState("todos");
  const [tamaño, actualizarTamaño] = useState("todos");

  const hotelesFiltrados = hotelsData
    .filter((hotel) => {
      if (pais === "todos") {
        return hotel;
      } else {
        return hotel.country.toLowerCase() === pais.toLowerCase();
      }
    })
    .filter((hotel) => {
      if (tamaño === "todos") {
        return hotel;
      } else if (tamaño === "grande") {
        return hotel.rooms >= 20;
      } else if (tamaño === "mediano") {
        return hotel.rooms >= 11 && hotel.rooms <= 19;
      } else {
        return hotel.rooms <= 10;
      }
    })
    .filter((hotel) => {
      if (precio === "todos") {
        return hotel;
      } else {
        return hotel.price === precio.length;
      }
    })
    .filter((hotel) => {
      if (fechaDesde !== "" && fechaHasta !== "") {
        let dayInMillis = 24 * 3600000;
        return (
          Math.floor(hotel.availabilityFrom / dayInMillis) <=
            Math.floor(
              new Date(fechaDesde + "T00:00:00").getTime() / dayInMillis
            ) &&
          Math.floor(hotel.availabilityTo / dayInMillis) >=
            Math.floor(
              new Date(fechaHasta + "T00:00:00").getTime() / dayInMillis
            )
        );
      }
      return hotel;
    });
  return (
    <div className="App">
      <Header
        fechaDesde={fechaDesde}
        fechaHasta={fechaHasta}
        pais={pais}
        precio={precio}
        tamaño={tamaño}
      />
      <Filtros
        fechaDesde={fechaDesde}
        fechaHasta={fechaHasta}
        pais={pais}
        precio={precio}
        tamaño={tamaño}
        actualizarFechaDesde={actualizarFechaDesde}
        actualizarFechaHasta={actualizarFechaHasta}
        actualizarPais={actualizarPais}
        actualizarPrecio={actualizarPrecio}
        actualizarTamaño={actualizarTamaño}
      />
      <Hoteles listaHoteles={hotelesFiltrados} />
    </div>
  );
}
