import Button from "@/components/Button/Button";
import React from "react";

const PresupuestoContent = () => {
  return (
    <div class="tab-content presupuesto_content-container">
      <div class="column first-column">
        <div class="first-column-title">
          <h2>Descripción</h2>
          <h2>Cant.</h2>
          <h2>Precio</h2>
          <h2>Desc.</h2>
          <h2>Total</h2>
        </div>
        <div class="first-column-container">
          <div class="row-container">
            <div>
              <p>
                Protocolo moda .................................................
              </p>
              <p>-Retoque de piel</p>
              <p>-Retoque de arrugas compleja </p>
              <p>-Máscara sencilla</p>
              <p>-Licuado deprendas</p>
            </div>
            <p>1...............</p>
            <p>5,25€.......</p>
            <p>10 %.......</p>
            <p>4,40€</p>
          </div>
        </div>
        <div class="first-column-container">
          <div class="row-container">
            <div>
              <p>
                Protocolo moda .................................................
              </p>
              <p>-Retoque de piel</p>
              <p>-Retoque de arrugas compleja </p>
              <p>-Máscara sencilla</p>
              <p>-Licuado deprendas</p>
            </div>
            <p>1...............</p>
            <p>5,25€.......</p>
            <p>10 %.......</p>
            <p>4,40€</p>
          </div>
        </div>
        <div class="first-column-container">
          <div class="row-container">
            <div>
              <p>
                Protocolo moda .................................................
              </p>
              <p>-Retoque de piel</p>
              <p>-Retoque de arrugas compleja </p>
              <p>-Máscara sencilla</p>
              <p>-Licuado deprendas</p>
            </div>
            <p>1...............</p>
            <p>5,25€.......</p>
            <p>10 %.......</p>
            <p>4,40€</p>
          </div>
        </div>
      </div>
      <div class="column sec-column">
        <div class="sec-column-top-section">
          <h2>N°: 487</h2>
          <h2>Fecha: 12/08/22</h2>
          <h2>Válido hasta: 20/08/22</h2>
          <h2>Cabeza de presupuesto</h2>
          <h2>Pie de presupuesto</h2>
        </div>
        <div class="sec-column-buttons-section">
          <Button
            propsStyles={{
              padding: "0.4rem",
              paddingRight: "1rem",
              paddingLeft: "1rem",
              border: "none",
              margin: "0.5rem",
              borderRadius: "0.5rem",
              color: "white",
              backgroundColor: "black",
              fontSize: "small",
            }}
          >
            Enviar a cliente
          </Button>
          <Button
            propsStyles={{
              padding: "0.4rem",
              paddingRight: "1rem",
              paddingLeft: "1rem",
              border: "none",
              margin: "0.5rem",
              borderRadius: "0.5rem",
              color: "white",
              backgroundColor: "black",
              fontSize: "small",
            }}
          >
            Ir a presupuestos
          </Button>
          <Button
            propsStyles={{
              padding: "0.4rem",
              paddingRight: "1rem",
              paddingLeft: "1rem",
              border: "none",
              margin: "0.5rem",
              borderRadius: "0.5rem",
              color: "white",
              backgroundColor: "black",
              fontSize: "small",
            }}
          >
            Vista previa PDF
          </Button>
          <Button
            propsStyles={{
              padding: "0.4rem",
              paddingRight: "1rem",
              paddingLeft: "1rem",
              border: "none",
              margin: "0.5rem",
              borderRadius: "0.5rem",
              color: "white",
              backgroundColor: "black",
              fontSize: "small",
            }}
          >
            Descargar PDF
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PresupuestoContent;
