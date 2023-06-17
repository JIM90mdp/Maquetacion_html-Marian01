import React from "react";
import RoyTable from "./royTable";
import Button from "../Button/Button";

const ImagenSection = () => {
  return (
    <div class="imageTable-container">
      <div class="imageTable-header">IMAGENES</div>
      <div class="imagen_section-container">
        <div class="img_upload-container">
          {/* <div class="cuadrados-container">
            <div class="cuadrado cuadrado_uno"></div>
            <div class="cuadrado cuadrado_dos"></div>
            <div class="cuadrado cuadrado_tres">
              <svg
                fill="#b6dced"
                width="60px"
                height="60px"
                viewBox="-3.2 -3.2 38.40 38.40"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#b6dced"
                transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#CCCCCC"
                  strokeWidth="0.44800000000000006"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path d="M23.845 8.124c-1.395-3.701-4.392-6.045-8.921-6.045-5.762 0-9.793 4.279-10.14 9.86-2.778 0.889-4.784 3.723-4.784 6.933 0 3.93 3.089 7.249 6.744 7.249h2.889c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2.889c-2.572 0-4.776-2.404-4.776-5.249 0-2.514 1.763-4.783 3.974-5.163l0.907-0.156-0.080-0.916-0.008-0.011c0-4.871 3.205-8.545 8.161-8.545 3.972 0 6.204 1.957 7.236 5.295l0.214 0.688 0.721 0.015c3.715 0.078 6.972 3.092 6.972 6.837 0 3.408-2.259 7.206-5.678 7.206h-2.285c-0.552 0-1 0.448-1 1s0.448 1 1 1l2.277-0.003c5-0.132 7.605-4.908 7.605-9.203 0-4.616-3.617-8.305-8.14-8.791zM16.75 16.092c-0.006-0.006-0.008-0.011-0.011-0.016l-0.253-0.264c-0.139-0.146-0.323-0.219-0.508-0.218-0.184-0.002-0.368 0.072-0.509 0.218l-0.253 0.264c-0.005 0.005-0.006 0.011-0.011 0.016l-3.61 3.992c-0.28 0.292-0.28 0.764 0 1.058l0.252 0.171c0.28 0.292 0.732 0.197 1.011-0.095l2.128-2.373v10.076c0 0.552 0.448 1 1 1s1-0.448 1-1v-10.066l2.199 2.426c0.279 0.292 0.732 0.387 1.011 0.095l0.252-0.171c0.279-0.293 0.279-0.765 0-1.058z"></path>{" "}
                </g>
              </svg>
            </div>
          </div>
          <div>
            <div class="img_upload-text">
              ARRASTRE LAS IMÁGENES <span>AQUÍ</span>
            </div>
            <div className="arrow-container">
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="arrow">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  transform="rotate(180)"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title></title>{" "}
                    <g id="Complete">
                      {" "}
                      <g id="F-Chevron">
                        {" "}
                        <polyline
                          fill="none"
                          id="Down"
                          points="5 8.5 12 15.5 19 8.5"
                          stroke="#000000"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        ></polyline>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>
            </div>
          </div> */}
          <div class="img_upload-button-section">
            <div class="button_section-row">
              {/* Wetransfer */}
              <Button
                propsStyles={{
                  padding: "0.4rem",
                  paddingRight: "0.5rem",
                  paddingLeft: "0.5rem",
                  display: "flex",
                  flexDirection: "row",
                  justifySelf: "space-between",
                  alignItems: "center",
                  borderRadius: "1rem",
                  width: "100px",
                  height: "25px",
                  color: "black",
                  backgroundColor: "#bee6f3",
                  border: "none",
                  fontSize: "x-small",
                }}
              >
                <svg
                  fill="#000000"
                  width="20px"
                  height="20px"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>wetransfer</title>{" "}
                    <path d="M9.253 18.659c0.409 0 0.681 0.204 0.953 0.681l1.227 1.977c0.477 0.75 0.886 1.295 1.772 1.295 0.887 0 1.363-0.341 1.772-1.362 0.637-1.37 1.199-2.984 1.601-4.66l0.036-0.18c0.467-1.426 0.783-3.077 0.883-4.786l0.003-0.054c0-1.158-0.341-1.841-1.637-2.046-1.781-0.307-3.831-0.483-5.923-0.483-0.242 0-0.483 0.002-0.724 0.007l0.036-0.001c-0.159-0.002-0.347-0.003-0.534-0.003-2.143 0-4.252 0.15-6.315 0.439l0.238-0.027c-0.935 0.080-1.663 0.858-1.663 1.806 0 0.108 0.009 0.214 0.028 0.317l-0.002-0.011c0.106 1.767 0.398 3.42 0.858 5.001l-0.040-0.16c0.501 1.908 1.060 3.519 1.726 5.072l-0.089-0.234c0.476 1.022 0.885 1.363 1.771 1.363 0.887 0 1.296-0.545 1.773-1.295l1.226-1.977c0.341-0.409 0.614-0.681 1.023-0.681zM18.318 15.864c-0.004-0.086-0.006-0.186-0.006-0.287 0-3.576 2.899-6.474 6.474-6.474 0.147 0 0.293 0.005 0.437 0.015l-0.020-0.001c3.474 0 5.792 1.773 5.792 4.226-0.061 2.125-1.799 3.824-3.933 3.824-0.080 0-0.159-0.002-0.237-0.007l0.011 0c-0.109 0.010-0.235 0.015-0.363 0.015-0.878 0-1.696-0.26-2.38-0.708l0.017 0.010c-0.204-0.205-0.34-0.136-0.34 0.069 0.002 0.848 0.34 1.617 0.887 2.181l-0.001-0.001c0.576 0.508 1.338 0.819 2.171 0.819 0.003 0 0.006 0 0.010 0h-0c0.010 0 0.022 0 0.034 0 0.833 0 1.619-0.202 2.312-0.559l-0.028 0.013c0.175-0.124 0.392-0.199 0.627-0.199 0.399 0 0.748 0.215 0.937 0.535l0.003 0.005c0.41 0.612-0.136 1.431-0.612 1.977-1.151 1.024-2.677 1.649-4.348 1.649-0.149 0-0.297-0.005-0.444-0.015l0.020 0.001c-0.074 0.003-0.161 0.005-0.248 0.005-3.744 0-6.779-3.035-6.779-6.779 0-0.111 0.003-0.221 0.008-0.33l-0.001 0.015z"></path>{" "}
                  </g>
                </svg>
                <p>Wetransfer</p>
              </Button>
              {/* Cancelar */}
              <Button
                propsStyles={{
                  padding: "0.4rem",
                  paddingRight: "0.5rem",
                  paddingLeft: "0.5rem",
                  display: "flex",
                  flexDirection: "row",
                  justifySelf: "space-between",
                  alignItems: "center",
                  borderRadius: "1rem",
                  width: "100px",
                  height: "25px",
                  color: "black",
                  backgroundColor: "#bee6f3",
                  border: "none",
                  fontSize: "x-small",
                }}
              >
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g id="File / Folder_Close">
                      {" "}
                      <path
                        id="Vector"
                        d="M10 15L12 13M12 13L14 11M12 13L10 11M12 13L14 15M3 6V16.8C3 17.9201 3 18.4798 3.21799 18.9076C3.40973 19.2839 3.71547 19.5905 4.0918 19.7822C4.5192 20 5.07899 20 6.19691 20H17.8031C18.921 20 19.48 20 19.9074 19.7822C20.2837 19.5905 20.5905 19.2841 20.7822 18.9078C21.0002 18.48 21.0002 17.9199 21.0002 16.7998L21.0002 9.19978C21.0002 8.07967 21.0002 7.51962 20.7822 7.0918C20.5905 6.71547 20.2839 6.40973 19.9076 6.21799C19.4798 6 18.9201 6 17.8 6H12M3 6H12M3 6C3 4.89543 3.89543 4 5 4H8.67452C9.1637 4 9.40886 4 9.63904 4.05526C9.84311 4.10425 10.0379 4.18526 10.2168 4.29492C10.4186 4.41857 10.5918 4.59182 10.9375 4.9375L12 6"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <p>Cancelar</p>
              </Button>
            </div>
            <div class="button_section-row">
              {/* Borrar */}
              <Button
                propsStyles={{
                  display: "flex",
                  flexDirection: "row",
                  justifySelf: "space-between",
                  alignItems: "center",
                  borderRadius: "1rem",
                  width: "100px",
                  height: "25px",
                  color: "black",
                  backgroundColor: "white",
                  border: "none",
                  fontSize: "x-small",
                }}
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width={"20px"}
                >
                  <path d="M3 6l2.46 14.76A2 2 0 007.36 22h9.28a2 2 0 001.9-1.24L21 6H3z" />
                  <line x1="9" y1="3" x2="15" y2="3" />
                  <line x1="10" y1="11" x2="10" y2="17" />
                  <line x1="14" y1="11" x2="14" y2="17" />
                </svg>
                <p>Borrar</p>
              </Button>
              {/* Mover */}
              <Button
                propsStyles={{
                  display: "flex",
                  flexDirection: "row",
                  justifySelf: "space-between",
                  alignItems: "center",
                  borderRadius: "1rem",
                  width: "100px",
                  height: "25px",
                  color: "black",
                  backgroundColor: "#bee6f3",
                  border: "none",
                  fontSize: "x-small",
                }}
              >
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 3L12.3648 2.65803L12 2.26894L11.6352 2.65803L12 3ZM11.5 9C11.5 9.27614 11.7239 9.5 12 9.5C12.2761 9.5 12.5 9.27614 12.5 9H11.5ZM15.3648 5.85803L12.3648 2.65803L11.6352 3.34197L14.6352 6.54197L15.3648 5.85803ZM11.6352 2.65803L8.63523 5.85803L9.36477 6.54197L12.3648 3.34197L11.6352 2.65803ZM11.5 3V9H12.5V3H11.5Z"
                      fill="#222222"
                    ></path>{" "}
                    <path
                      d="M21 12L21.342 12.3648L21.7311 12L21.342 11.6352L21 12ZM15 11.5C14.7239 11.5 14.5 11.7239 14.5 12C14.5 12.2761 14.7239 12.5 15 12.5L15 11.5ZM18.142 15.3648L21.342 12.3648L20.658 11.6352L17.458 14.6352L18.142 15.3648ZM21.342 11.6352L18.142 8.63523L17.458 9.36477L20.658 12.3648L21.342 11.6352ZM21 11.5L15 11.5L15 12.5L21 12.5L21 11.5Z"
                      fill="#222222"
                    ></path>{" "}
                    <path
                      d="M12 21L12.3648 21.342L12 21.7311L11.6352 21.342L12 21ZM11.5 15C11.5 14.7239 11.7239 14.5 12 14.5C12.2761 14.5 12.5 14.7239 12.5 15H11.5ZM15.3648 18.142L12.3648 21.342L11.6352 20.658L14.6352 17.458L15.3648 18.142ZM11.6352 21.342L8.63523 18.142L9.36477 17.458L12.3648 20.658L11.6352 21.342ZM11.5 21V15H12.5V21H11.5Z"
                      fill="#222222"
                    ></path>{" "}
                    <path
                      d="M3 12L2.65803 12.3648L2.26894 12L2.65803 11.6352L3 12ZM9 11.5C9.27614 11.5 9.5 11.7239 9.5 12C9.5 12.2761 9.27614 12.5 9 12.5L9 11.5ZM5.85803 15.3648L2.65803 12.3648L3.34197 11.6352L6.54197 14.6352L5.85803 15.3648ZM2.65803 11.6352L5.85803 8.63523L6.54197 9.36477L3.34197 12.3648L2.65803 11.6352ZM3 11.5L9 11.5L9 12.5L3 12.5L3 11.5Z"
                      fill="#222222"
                    ></path>{" "}
                  </g>
                </svg>
                <p>Move</p>
              </Button>
            </div>
          </div>
        </div>
        <div class="table-container" v>
          <div class="bullet-points">
            <div class="bullet-point">Imagen</div>
            <div class="bullet-point">Nombre</div>
            <div class="bullet-point">Tamaño</div>
            <div class="bullet-point">Lote</div>
            <div class="bullet-point">Opciones</div>
          </div>
          <div class="content content-rows">
            <RoyTable />
            <RoyTable />
            <RoyTable />
            <RoyTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagenSection;
