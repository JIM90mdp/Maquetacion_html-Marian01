import Button from "@/components/Button/Button";
import React from "react";

const ImagenEjemplo = () => {
  return (
    <div class="bottom_section-right">
      <div class="imagenes_ejemplo-card">
        <div class="card-header">Imágenes ejemplo</div>
        <div class="card-body">
          <div class="card-top-section">
            <div class="imagenes_ejemplo-text">
              ARRASTRE LAS IMÁGENES <span>AQUÍ</span>
            </div>

            <Button
              propsStyles={{
                color: "white",
                backgroundColor: "black",
                border: "none",
                fontSize: "x-small",
                margin: "0 0 0.5rem 0",
              }}
            >
              Subir img +
            </Button>
          </div>

          <div class="cuadriculado-container">
            <div class="cuadriculado"></div>

            <svg
              width="10px"
              height="10px"
              viewBox="0 0 17 17"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#009dfff9"
              stroke="#009dfff9"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M6.854 4.146l4.353 4.354-4.354 4.354-0.707-0.707 3.647-3.647-3.647-3.646 0.708-0.708zM17 8.5c0 4.687-3.813 8.5-8.5 8.5s-8.5-3.813-8.5-8.5 3.813-8.5 8.5-8.5 8.5 3.813 8.5 8.5zM16 8.5c0-4.136-3.364-7.5-7.5-7.5s-7.5 3.364-7.5 7.5 3.364 7.5 7.5 7.5 7.5-3.364 7.5-7.5z"
                  fill="#000000"
                ></path>
              </g>
            </svg>

            <div class="cuadriculado"></div>

            <svg
              width="10px"
              height="10px"
              viewBox="0 0 17 17"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#009dfff9"
              stroke="#009dfff9"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M6.854 4.146l4.353 4.354-4.354 4.354-0.707-0.707 3.647-3.647-3.647-3.646 0.708-0.708zM17 8.5c0 4.687-3.813 8.5-8.5 8.5s-8.5-3.813-8.5-8.5 3.813-8.5 8.5-8.5 8.5 3.813 8.5 8.5zM16 8.5c0-4.136-3.364-7.5-7.5-7.5s-7.5 3.364-7.5 7.5 3.364 7.5 7.5 7.5 7.5-3.364 7.5-7.5z"
                  fill="#000000"
                ></path>
              </g>
            </svg>

            <div class="cuadriculado"></div>
          </div>
        </div>
        <div class="imagenes_ejemplo-icons"></div>
      </div>

      <div class="bottom_section-right_section-logos_section">
        {/* BIN GARBAGE */}
        <div class="logo logos_section-bin_garbage">
          <a href="" target="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              width={"30px"}
            >
              <path d="M3 6l2.46 14.76A2 2 0 007.36 22h9.28a2 2 0 001.9-1.24L21 6H3z" />
              <line x1="9" y1="3" x2="15" y2="3" />
              <line x1="10" y1="11" x2="10" y2="17" />
              <line x1="14" y1="11" x2="14" y2="17" />
            </svg>
          </a>
        </div>
        <div class="img_tableLine"></div>
        {/* EDIT */}
        <div class="logo logos_section-edit">
          <a href="" target="">
            <svg
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              width={"30px"}
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#5C5F62"
                  d="M18 9a1 1 0 00-1 1v7H3V3h7a1 1 0 100-2H2.5A1.5 1.5 0 001 2.5v15A1.5 1.5 0 002.5 19h15a1.5 1.5 0 001.5-1.5V10a1 1 0 00-1-1z"
                ></path>
                <path
                  fill="#5C5F62"
                  d="M15.53 2.029l2.439 2.44-7.739 7.738-3.23.792.792-3.231 7.738-7.74zM19.088 3.35L16.65.913l.406-.407a1.725 1.725 0 012.44 2.439l-.408.407z"
                ></path>
              </g>
            </svg>
          </a>
        </div>
        {/* COMMENT */}
        <div className="logo logos_section-notes">
          <a href="" target="">
            <svg
              width={"30px"}
              viewBox="0 0 15 15"
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
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.5 11.4928L7.5 14.4909L9.5 11.4928H13.5C14.053 11.4928 14.5 11.0461 14.5 10.4935V1.49935C14.5 0.946709 14.053 0.5 13.5 0.5H1.5C0.947 0.5 0.5 0.946709 0.5 1.49935V10.4935C0.5 11.0461 0.947 11.4928 1.5 11.4928H5.5Z"
                  stroke="#000000"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </a>
        </div>
        {/* SQUARE */}
        <div className="logo logos_section-square">
          <a href="" target="">
            <svg
              width={"30px"}
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
                <g id="Shape / Square">
                  {" "}
                  <path
                    id="Vector"
                    d="M3 6.2002V17.8002C3 18.9203 3 19.4796 3.21799 19.9074C3.40973 20.2837 3.71547 20.5905 4.0918 20.7822C4.5192 21 5.07899 21 6.19691 21H17.8031C18.921 21 19.48 21 19.9074 20.7822C20.2837 20.5905 20.5905 20.2837 20.7822 19.9074C21 19.48 21 18.921 21 17.8031V6.19691C21 5.07899 21 4.5192 20.7822 4.0918C20.5905 3.71547 20.2837 3.40973 19.9074 3.21799C19.4796 3 18.9203 3 17.8002 3H6.2002C5.08009 3 4.51962 3 4.0918 3.21799C3.71547 3.40973 3.40973 3.71547 3.21799 4.0918C3 4.51962 3 5.08009 3 6.2002Z"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>{" "}
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImagenEjemplo;
