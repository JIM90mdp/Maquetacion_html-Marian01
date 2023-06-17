import React from "react";

const ResumenPedido = () => {
  return (
    <div class="ticket-container">
      <div class="ticket">
        <div class="ticket-header">Resumen Pedido</div>
        <h2>Tiempo de ejecución</h2>
        <select>
          <option disabled selected>
            Seleccionar...
          </option>
        </select>
        <h2>Fechas</h2>
        <p>Fecha creación: 12:00:00 20/10/22</p>
        <p>Fecha terminado: 12:00:00 20/10/22</p>
        <h2>Deadline</h2>
        <p>Deadline cliente: 12:00:00 20/10/22</p>
        <p>Deadline proveedor: 12:00:00 20/10/22</p>
        <h2>Administrador</h2>
        <h2>Proveedor</h2>
        <h2>Total: 155,50€</h2>
      </div>
    </div>
  );
};

export default ResumenPedido;
