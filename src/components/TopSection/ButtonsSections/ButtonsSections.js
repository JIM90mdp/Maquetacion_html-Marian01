import Button from "@/components/Button/Button";
import React from "react";

const ButtonsSections = () => {
  return (
    <div class="button_section-container">
      <div>
        <input
          placeholder="NOMBRE DEL PEDIDO"
          style={{
            padding: "0.4rem",
            paddingRight: "1rem",
            paddingLeft: "1rem",
            border: "none",
            margin: "0.5rem",
            borderRadius: "0.5rem",
            color: "black",
            backgroundColor: "#BEE6F3",
            fontSize: "small",
          }}
        ></input>
        <Button
          propsStyles={{
            color: "white",
            backgroundColor: "red",
            border: "none",
            fontSize: "small",
          }}
        >
          En corrección
        </Button>
      </div>
      <div>
        <Button
          propsStyles={{
            color: "white",
            backgroundColor: "black",
            border: "none",
            fontSize: "x-small",
          }}
        >
          Editar pedido
        </Button>
        <Button
          propsStyles={{
            color: "white",
            backgroundColor: "black",
            border: "none",
            fontSize: "x-small",
          }}
        >
          Duplicar lote
        </Button>
      </div>
    </div>
  );
};

export default ButtonsSections;
