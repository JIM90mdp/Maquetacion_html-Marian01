import React from "react";
import Button from "../../Button/Button";

const LeftBottomSection = () => {
  return (
    <div class="left_bottom_section">
      <div class="button_lote-section">
        <Button
          propsStyles={{
            color: "white",
            backgroundColor: "black",
            fontSize: "small",
            margin: "0",
          }}
        >
          NUEVO LOTE
        </Button>
        <div class="lotes-left_bottom_section">
          <a href="">Lote 1 : Lorem Isum Lorem Isum</a>
          <a href="">Lote 2 : Lorem Isum Lorem Isum</a>
          <a href="">Lote 3 : Lorem Isum Lorem Isum</a>
        </div>
      </div>
      <Button
        propsStyles={{
          color: "white",
          backgroundColor: "#851618",
          fontSize: "small",
          margin: "0",
        }}
      >
        BORRAR
      </Button>
    </div>
  );
};

export default LeftBottomSection;
