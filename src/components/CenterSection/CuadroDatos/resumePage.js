import React from "react";
import ResumenContent from "./resumenContent";

const ResumePage = ({content}) => {
  return (
    <div class="single-page-container">
      <div class="bullet-points">
        <div class="bullet-point">Resumen</div>
        <div class="bullet-point">Cliente</div>
        <div class="bullet-point">Proveedor</div>
        <div class="bullet-point">Retoques</div>
        <div class="bullet-point">Presupuesto</div>
        <div class="bullet-point">Archivo</div>
      </div>
      <div class="content">
        {content}
        {/* <ResumenContent /> */}
      </div>
    </div>
  );
};

export default ResumePage;
