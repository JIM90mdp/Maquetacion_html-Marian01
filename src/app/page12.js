import Button from "@/components/Button/Button";
import SquarePage12 from "@/components/CenterSection/CuadroDatos/squarePage12";

export default function Page12() {
  return (
    <div class="page12">
      <div class="single-page">
        <div class="left-section">
          <div class="col">
            <div class="square">
              <p>12</p>
            </div>
            <p>HORA</p>
          </div>
          <div class="col">
            <div class="square">
              <p>20</p>
            </div>
            <p>MINUTO</p>
          </div>
          <div class="col">
            <div class="square">
              <p>03</p>
            </div>
            <p>SEGUNDO</p>
            <div class="buttons-section">
              <Button
                propsStyles={{
                  width: "110px",
                  color: "white",
                  backgroundColor: "black",
                  border: "none",
                  fontSize: "small",
                }}
              >
                Duplicar
              </Button>
              <Button
                propsStyles={{
                  width: "110px",
                  color: "white",
                  backgroundColor: "#00aaff",
                  border: "none",
                  fontSize: "small",
                }}
              >
                Crear
              </Button>
              <Button
                propsStyles={{
                  width: "110px",
                  color: "white",
                  backgroundColor: "#234f2b",
                  border: "none",
                  fontSize: "small",
                }}
              >
                Guardar
              </Button>
              <Button
                propsStyles={{
                  width: "110px",
                  color: "white",
                  backgroundColor: "#851618",
                  border: "none",
                  fontSize: "small",
                }}
              >
                Enviar prov.
              </Button>
            </div>
          </div>
        </div>
        <div class="right-section">
          <SquarePage12 />

          <div class="paginator">
            <button class="paginator-button">Anterior</button>
            <svg
              width="10px"
              height="10px"
              viewBox="0 0 17 17"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#009dfff9"
              stroke="#009dfff9"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M10.146 4.146l-4.354 4.354 4.354 4.354 0.708-0.707-3.647-3.647 3.647-3.646-0.707-0.708zM17 8.5c0 4.687-3.813 8.5-8.5 8.5s-8.5-3.813-8.5-8.5 3.813-8.5 8.5-8.5 8.5 3.813 8.5 8.5zM16 8.5c0-4.136-3.364-7.5-7.5-7.5s-7.5 3.364-7.5 7.5 3.364 7.5 7.5 7.5 7.5-3.364 7.5-7.5z"
                  fill="#000000"
                ></path>
              </g>
            </svg>

            <div class="paginator-numbers">
              <p class="paginator-number">1</p>
              <p class="paginator-number">2</p>
              <p class="paginator-number">3</p>
              <p class="paginator-number">4</p>
            </div>
            <svg
              width="10px"
              height="10px"
              viewBox="0 0 17 17"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#009dfff9"
              stroke="#009dfff9"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M6.854 4.146l4.353 4.354-4.354 4.354-0.707-0.707 3.647-3.647-3.647-3.646 0.708-0.708zM17 8.5c0 4.687-3.813 8.5-8.5 8.5s-8.5-3.813-8.5-8.5 3.813-8.5 8.5-8.5 8.5 3.813 8.5 8.5zM16 8.5c0-4.136-3.364-7.5-7.5-7.5s-7.5 3.364-7.5 7.5 3.364 7.5 7.5 7.5 7.5-3.364 7.5-7.5z"
                  fill="#000000"
                ></path>
              </g>
            </svg>
            <button class="paginator-button">Siguiente</button>
          </div>
        </div>
      </div>
    </div>
  );
}
