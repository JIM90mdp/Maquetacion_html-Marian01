import React from "react";
import Button from "../Button/Button";


const ResumenContent = () => {
  return (
    <div class="resumen_content-container">
      <div class="column">
        <input type="text" placeholder="Nombre del lote..." />
        <h2>Protocolo</h2>
        <select>
          <option>Seleccionar...</option>
        </select>
        <Button>Ir al protocolo</Button>
        <input type="text" placeholder="Nro de archivos a subir..." />
        <input type="text" placeholder="Nro de archivos finales..." />
        <h2>Tiempo de ejecucion</h2>
        <p>Tiempo por foto = X</p>
        <p>Tiempo total por lote = X</p>
      </div>
      <div class="column">
        <h2>Imagen</h2>
        <select>
          <option>Modo de color...</option>
        </select>
        <select>
          <option>Profundidad de color...</option>
        </select>
        <select>
          <option>Formato final..</option>
        </select>
        <h2>Deadline</h2>
        <p>Deadline cliente: 12:00:00 20/10/22</p>
        <p>Deadline proveedor: 12:00:00 20/10/22</p>
        <h2>Coste</h2>
        <p>Precio por foto: 1,35 x 3 = 4,05€</p>
        <p>Precio por foto proveedor: 0,3 x 3 = 0,90$</p>
        <p>Total: 10,00€</p>
      </div>
      <div class="column">
        <h2>Retoques</h2>
        <p>Siluetado Nv.3</p>
        <p>
          Retoque moda <span class="celeste">Básico</span>
        </p>
        <p>Procesado Raw</p>
      </div>
    </div>
  );
};

export default ResumenContent;
