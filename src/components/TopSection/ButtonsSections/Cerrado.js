import Button from "@/components/Button/Button";
import React from "react";

const Cerrado = () => {
  return (
    <Button
      propsStyles={{
        color: "white",
        backgroundColor: "black",
        border: "none",
        fontSize: "small",
      }}
    >
      Cerrado
    </Button>
  );
};

export default Cerrado;