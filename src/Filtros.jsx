import React from "react";
import "./Filtros.css";

function Filtros({
  fechaDesde,
  fechaHasta,
  pais,
  precio,
  tamaño,
  actualizarFechaDesde,
  actualizarFechaHasta,
  actualizarPais,
  actualizarPrecio,
  actualizarTamaño
}) {
  const manejarCambioFechaDesde = (evento) => {
    actualizarFechaDesde(evento.target.value);
  };
  const manejarCambioFechaHasta = (evento) => {
    actualizarFechaHasta(evento.target.value);
  };
  const manejarCambioPais = (evento) => {
    actualizarPais(evento.target.value);
  };
  const manejarCambioPrecio = (evento) => {
    actualizarPrecio(evento.target.value);
  };
  const manejarCambioTamaño = (evento) => {
    actualizarTamaño(evento.target.value);
  };

  const manejarClick = () => {
    // resetear los filtros a su estado inicial
    actualizarFechaDesde("");
    actualizarFechaHasta("");
    actualizarPais("todos");
    actualizarPrecio("todos");
    actualizarTamaño("todos");
  };
  return (
    <div className="filtros">
      <span> Desde: </span>
      <input
        value={fechaDesde}
        max={fechaHasta}
        type="date"
        className="fechas"
        onChange={manejarCambioFechaDesde}
      />
      <span> Hasta: </span>
      <input
        value={fechaHasta}
        min={fechaDesde}
        type="date"
        className="fechas"
        onChange={manejarCambioFechaHasta}
      />
      <select className="select" value={pais} onChange={manejarCambioPais}>
        <option value="todos">Todos los paises</option>
        <option value="argentina">Argentina</option>
        <option value="brasil">Brasil</option>
        <option value="chile">Chile</option>
        <option value="uruguay">Uruguay</option>
      </select>
      <select className="select" value={precio} onChange={manejarCambioPrecio}>
        <option value="todos">Cualquier precio</option>
        <option value="$">$(oferta)</option>
        <option value="$$">$$(económico)</option>
        <option value="$$$">$$$(moderado)</option>
        <option value="$$$$">$$$$(lujoso)</option>
      </select>
      <select className="select" value={tamaño} onChange={manejarCambioTamaño}>
        <option value="todos">Cualquier tamaño</option>
        <option value="pequeño">pequeño</option>
        <option value="mediano">mediano</option>
        <option value="grande">grande</option>
      </select>
      <button className="limpiar" onClick={manejarClick}>
        <i className="fas fa-sync-alt"></i> LIMPIAR
      </button>
    </div>
  );
}

export default Filtros;
