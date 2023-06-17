import Button from "@/components/Button/Button";
import React from "react";

const EnCorreccion = () => {
  return (
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
  );
};

export default EnCorreccion;
