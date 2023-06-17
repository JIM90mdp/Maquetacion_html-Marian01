import Button from "@/components/Button/Button";
import React from "react";

const ClienteContent = () => {
  return (
    <div class="cliente_content-container">
      <div class="column">
        <h2>Ficha</h2>
        <div class="column-name-email">
          <p>Nombre:</p>
          <p>Momo Ansótegui Viedma</p>
        </div>
        <div class="column-name-email">
          <p>Email:</p>
          <p>monodemomo@gmail.com</p>
        </div>
        <Button>Ir al cliente</Button>
        <h2>Comentarios cliente</h2>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniamullamcorper .
        </p>
      </div>
      <div class="column">
        <h2>Precio</h2>
        <input
          class="input-precio"
          type="text"
          placeholder="Precio por foto..."
        />
        <input class="input-precio" type="text" placeholder="Precio €..." />

        <h2>Valoración cliente</h2>
        <p>Valorará de 0 a 100...</p>
        <h2>Comentarios Admin</h2>
        <input
          class="input-comentarios"
          type="text"
          placeholder="Escribe un
          comentario..."
        >
            
        </input>
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

export default ClienteContent;
