import Button from "@/components/Button/Button";

export default function Page3() {
  return (
    <div class="page3">
      <div class="single-page">
        <div class="col first-col">
          <div class="data">
            <div class="data-header">PEDIDO</div>

            <div class="data-container">
              <div>
                <h2>Usuario</h2>
                <div class="search-container">
                  <svg
                    viewBox="0 0 24 24"
                    width="20px"
                    height="20px"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g id="Interface / Search_Magnifying_Glass">
                        {" "}
                        <path
                          id="Vector"
                          d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z"
                          stroke="#000000"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                  <input class="search-input" type="search"></input>
                </div>
                <h2>Nombre</h2>
                <input type="text"></input>
                <div class="third-row">
                  <div class="col-container">
                    <h2>Admin</h2>
                    <select>
                      <option disabled selected>
                        Seleccionar...
                      </option>
                    </select>
                  </div>
                  <div class="col-container">
                    <h2>Proveedor</h2>
                    <select>
                      <option disabled selected>
                        Seleccionar...
                      </option>
                    </select>
                  </div>
                </div>
                <div class="last-row">
                  <h2>Estado</h2>
                  <select>
                    <option disabled selected>
                      Seleccionar...
                    </option>
                  </select>
                </div>
              </div>
              <div class="right-section">
                <div class="right_section-top-section">
                  <Button
                    propsStyles={{
                      width: "120px",
                      color: "white",
                      backgroundColor: "#00aaff",
                      border: "none",
                      fontSize: "small",
                      margin: "0",
                    }}
                  >
                    Crear Pedido
                  </Button>
                  <div class="checkbox-container">
                    <p>Envío automático</p>
                    <div class="header-input">
                      <input type="checkbox" size="50" />
                    </div>
                  </div>
                </div>
                <Button
                  propsStyles={{
                    width: "120px",
                    color: "white",
                    backgroundColor: "#851618",
                    border: "none",
                    fontSize: "small",
                    margin: "0",
                  }}
                >
                  Entregado
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div class="col sec-col">
          <div class="data">
            <div class="data-header">LOTES</div>
            <div class="data-container">
              <div class="col firs-col">
                <h2>NOMBRE</h2>
                <p>Lote 1: Lorem Isum Lorem Isum</p>
                <p>Lote 2 : Lorem Isum Lorem Isum</p>
                <p>Lote 3: Lorem Isum Lorem Isum</p>
              </div>
              <div class="col sec-col">
                <h2>PESO</h2>
                <p>35,0MB</p>
                <p>35,0MB</p>
                <p>35,0MB</p>
              </div>
              <div class="col third-col">
                <h2>ARCH.SUBIR</h2>
                <p>20</p>
                <p>20</p>
                <p>20</p>
              </div>
              <div class="col las-col">
                <h2>ARCH.ENTREGAR</h2>
                <p>10</p>
                <p>10</p>
                <p>10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
