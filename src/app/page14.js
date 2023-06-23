import Button from "@/components/Button/Button";

export default function Page14() {
  return (
    <div class="page14">
      <div class="single-page">
        <div class="header">
          <h2 class="title">Protocolos</h2>
          <div class="right-section">
            <p>Envío automático</p>
            <div class="header-input">
              <input  type="checkbox" size="50" />
            </div>
            <div class="buttons-section">
              <Button
                propsStyles={{
                  width: "100px",
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
                  width: "100px",
                  color: "white",
                  backgroundColor: "#00aaff",
                  border: "none",
                  fontSize: "small",
                }}
              >
                Link
              </Button>
              <Button
                propsStyles={{
                  width: "100px",
                  color: "white",
                  backgroundColor: "#234f2b",
                  border: "none",
                  fontSize: "small",
                }}
              >
                Guardar
              </Button>
            </div>
          </div>
        </div>
        <div class="bottom-section">
          <div class="data-container">
            <div class="data">
              <div class="data-header">CLIENTES</div>
              <div class="div-interno">
                <div class="first-row">
                  <div class="col-container">
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
                  </div>
                  <div class="col-container">
                    <h2>Nombre protocolo</h2>
                    <input class="first_row-input" type="text" />
                  </div>
                </div>
                <div class="sec-row">
                  <div class="sec-row-first-col">
                    <div class="col-container">
                      <h2>Precio x foto</h2>
                      <div class="input-container">
                        <input type="text" />
                      </div>
                    </div>
                    <div class="col-container">
                      <h2>Coste extra</h2>
                      <input type="text" />
                    </div>
                  </div>
                  <div class="sec-row-sec-col">
                    <div class="col-container">
                      <h2>Precio x foto</h2>
                      <div class="input-container">
                        <input type="text" />
                      </div>
                    </div>
                    <div class="col-container">
                      <h2>Recargo Urgencia</h2>
                      <select>
                        <option disabled selected>
                          Seleccionar...
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="third-row">
                  <div class="col-container">
                    <h2>Tiempo entrega</h2>
                    <select>
                      <option disabled selected>
                        Seleccionar...
                      </option>
                    </select>
                  </div>
                  <div class="col-container">
                    <h2>Formato img</h2>
                    <select>
                      <option disabled selected>
                        Seleccionar...
                      </option>
                    </select>
                  </div>
                  <div class="col-container">
                    <h2>Modo color</h2>
                    <select>
                      <option disabled selected>
                        Seleccionar...
                      </option>
                    </select>
                  </div>
                  <div class="col-container">
                    <h2>Resolución</h2>
                    <select>
                      <option disabled selected>
                        Seleccionar...
                      </option>
                    </select>
                  </div>
                  <div class="col-container col-container-last-col">
                    <h2>Profundidad color</h2>
                    <select>
                      <option disabled selected>
                        Seleccionar...
                      </option>
                    </select>
                  </div>
                </div>
                <div class="retoques-row">
                  <div class="retoques-container">
                    <h2>Retoques presupuestados</h2>
                  </div>
                  <div class="square">
                    <button>+</button>
                  </div>
                </div>

                <div class="table-container">
                  <div class="table-row-container">
                    <h2>Producto</h2>
                    <input type="text" class="row" />
                    <input type="text" class="row" />
                    <input type="text" class="row" />
                    <input type="text" class="row" />
                  </div>
                  <div class="table-row-container">
                    <h2>Tipo</h2>
                    <input type="text" class="row" />
                    <input type="text" class="row" />
                    <input type="text" class="row" />
                    <input type="text" class="row" />
                  </div>
                  <div class="table-row-container">
                    <h2>Tiempo</h2>
                    <input type="text" class="row" />
                    <input type="text" class="row" />
                    <input type="text" class="row" />
                    <input type="text" class="row" />
                  </div>
                </div>

                <div class="textarea-container">
                  <h2>Comentarios cliente</h2>
                  <div class="edit_text_button-container">
                    <button class="edit-text-button b-button">B</button>
                    <button class="edit-text-button">/</button>
                    <button class="edit-text-button">U</button>
                    <button class="edit-text-button">S</button>
                    <button class="edit-text-button attach-button">
                      <svg
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="15px"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            d="M22.0545 5.94619C24.2785 8.17032 24.2785 11.7763 22.0545 14.0005L20.6067 15.4483C20.2943 15.7608 20.2943 16.2673 20.6067 16.5797L21.0862 17.0592C21.3986 17.3716 21.9051 17.3716 22.2175 17.0592L23.6653 15.6113C26.7789 12.4976 26.7789 7.44912 23.6653 4.33534C20.5517 1.22155 15.5035 1.22155 12.3898 4.33534L10.942 5.78321C10.6296 6.09563 10.6296 6.60218 10.942 6.91461L11.4215 7.39406C11.7339 7.70649 12.2404 7.70649 12.5528 7.39407L14.0006 5.94619C16.2246 3.72206 19.8305 3.72206 22.0545 5.94619Z"
                            fill="#000000"
                          ></path>
                          <path
                            d="M5.94601 22.0538C8.17004 24.278 11.7759 24.278 13.9999 22.0538L15.4477 20.606C15.7601 20.2935 16.2667 20.2935 16.5791 20.606L17.0585 21.0854C17.3709 21.3979 17.3709 21.9044 17.0585 22.2168L15.6107 23.6647C12.4971 26.7785 7.44886 26.7785 4.33523 23.6647C1.22159 20.5509 1.22159 15.5025 4.33523 12.3887L5.78303 10.9408C6.09544 10.6284 6.60197 10.6284 6.91438 10.9408L7.39382 11.4203C7.70623 11.7327 7.70623 12.2393 7.39382 12.5517L5.94601 13.9996C3.72198 16.2237 3.72198 19.8297 5.94601 22.0538Z"
                            fill="#000000"
                          ></path>
                          <path
                            d="M17.8593 9.80361C17.5078 9.45213 16.938 9.45213 16.5865 9.80361L9.80535 16.5851C9.45389 16.9366 9.45389 17.5064 9.80535 17.8579L10.1434 18.1959C10.4948 18.5474 11.0647 18.5474 11.4161 18.1959L18.1973 11.4145C18.5487 11.063 18.5487 10.4931 18.1973 10.1416L17.8593 9.80361Z"
                            fill="#000000"
                          ></path>
                        </g>
                      </svg>
                    </button>
                    <button class="edit-text-button bullets-button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#000000"
                        viewBox="0 0 48 48"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path d="M8 21c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM8 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 24.33c-1.47 0-2.67 1.19-2.67 2.67s1.2 2.67 2.67 2.67 2.67-1.19 2.67-2.67-1.2-2.67-2.67-2.67zM14 38h28v-4H14v4zm0-12h28v-4H14v4zm0-16v4h28v-4H14z"></path>
                        </g>
                      </svg>
                    </button>
                    <button class="edit-text-button bullets-number-button">
                      <svg
                        width="64px"
                        height="64px"
                        viewBox="0 0 24 24"
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
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.99999 5.5C5.99999 5.22386 5.77613 5 5.49999 5C5.22385 5 4.99999 5.22386 4.99999 5.5V8.5C4.99999 8.77614 5.22385 9 5.49999 9C5.77613 9 5.99999 8.77614 5.99999 8.5V5.5ZM5.25046 11.2673C5.38308 11.1789 5.55766 11.1864 5.68212 11.286C5.85245 11.4223 5.86653 11.6764 5.71228 11.8306L4.39644 13.1464C4.25344 13.2894 4.21066 13.5045 4.28805 13.6913C4.36544 13.8782 4.54776 14 4.74999 14H6.49999C6.77613 14 6.99999 13.7761 6.99999 13.5C6.99999 13.2239 6.77613 13 6.49999 13H5.9571L6.41939 12.5377C6.99508 11.962 6.94256 11.0137 6.30681 10.5051C5.8423 10.1335 5.19072 10.1053 4.69576 10.4352L4.47264 10.584C4.24288 10.7372 4.18079 11.0476 4.33397 11.2773C4.48714 11.5071 4.79758 11.5692 5.02734 11.416L5.25046 11.2673ZM4.74999 15.5C4.47385 15.5 4.24999 15.7239 4.24999 16C4.24999 16.2761 4.47385 16.5 4.74999 16.5H5.29288L4.64644 17.1464C4.50344 17.2894 4.46066 17.5045 4.53805 17.6913C4.61544 17.8782 4.79776 18 4.99999 18H5.74999C5.88806 18 5.99999 18.1119 5.99999 18.25C5.99999 18.3881 5.88806 18.5 5.74999 18.5H4.74999C4.47385 18.5 4.24999 18.7239 4.24999 19C4.24999 19.2761 4.47385 19.5 4.74999 19.5H5.74999C6.44035 19.5 6.99999 18.9404 6.99999 18.25C6.99999 17.6972 6.6412 17.2283 6.1438 17.0633L6.85355 16.3536C6.99654 16.2106 7.03932 15.9955 6.96193 15.8087C6.88454 15.6218 6.70222 15.5 6.49999 15.5H4.74999ZM8.99999 6C8.44771 6 7.99999 6.44772 7.99999 7C7.99999 7.55228 8.44771 8 8.99999 8H19C19.5523 8 20 7.55228 20 7C20 6.44772 19.5523 6 19 6H8.99999ZM8.99999 11C8.44771 11 7.99999 11.4477 7.99999 12C7.99999 12.5523 8.44771 13 8.99999 13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H8.99999ZM8.99999 16C8.44771 16 7.99999 16.4477 7.99999 17C7.99999 17.5523 8.44771 18 8.99999 18H19C19.5523 18 20 17.5523 20 17C20 16.4477 19.5523 16 19 16H8.99999Z"
                            fill="#000000"
                          ></path>{" "}
                        </g>
                      </svg>
                    </button>
                  </div>
                  <textarea
                    class="input-comentarios"
                    placeholder="Escribe un comentario..."
                    name="comentario"
                    rows="1"
                    cols="1"
                  ></textarea>
                </div>
                <div class="img-examples">
                  <h2>Imágenes de ejemplo</h2>
                  <div class="buttons-section">
                    <h2>Status cliente</h2>
                    <select>
                      <option disabled selected>
                        Seleccionar...
                      </option>
                    </select>
                    <Button
                      propsStyles={{
                        marginBottom: "0.5rem",
                        width: "100%",
                        color: "white",
                        backgroundColor: "#00aaff",
                        border: "none",
                        fontSize: "small",
                      }}
                    >
                      Aprobar
                    </Button>
                    <Button
                      propsStyles={{
                        marginBottom: "0.5rem",
                        width: "100%",
                        color: "white",
                        backgroundColor: "black",
                        border: "none",
                        fontSize: "small",
                      }}
                    >
                      Subir IMG/PDF
                    </Button>
                  </div>
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
                <div class="bottom-container">
                  <h2>Log de comentarios</h2>
                  <div class="span-container">
                    <span>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod Lorem ipsum dolor sit amet,
                      consectetuer adipiscing elit, sed diam nonummy nibh
                      euismod Lorem ipsum dolor sit amet, consectetuer
                      adipiscing elit, sed diam nonummy nibh euismod Lorem ipsum
                      dolor sit amet, consectetuer adipiscing elit, sed diam
                      nonummy nibh euismod Lorem ipsum dolor sit amet
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="data-container">
            <div class="data">
              <div class="data-header">PROVEEDOR</div>
              <div class="div-interno">
                <div class="first-row">
                  <div class="col-container">
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
                  </div>
                  <div class="col-container">
                    <h2>Código de protocolo</h2>
                    <input class="first_row-input" type="text" />
                  </div>
                </div>
                <div class="sec-row">
                  <div class="sec-row-first-col">
                    <div class="col-container">
                      <h2>Precio x foto</h2>
                      <div class="input-container">
                        <input type="text" />
                      </div>
                    </div>
                    <div class="col-container">
                      <h2>Coste extra</h2>
                      <input type="text" />
                    </div>
                  </div>
                  <div class="sec-row-sec-col">
                    <div class="col-container">
                      <h2>Precio x foto</h2>
                      <div class="input-container">
                        <input type="text" />
                      </div>
                    </div>
                    <div class="col-container">
                      <h2>Recargo Urgencia</h2>
                      <select>
                        <option disabled selected>
                          Seleccionar...
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="third-row">
                  <div class="col-container">
                    <h2>Tiempo entrega</h2>
                    <select>
                      <option disabled selected>
                        Seleccionar...
                      </option>
                    </select>
                  </div>
                  <div class="col-container">
                    <h2>Formato img</h2>
                    <select>
                      <option disabled selected>
                        Seleccionar...
                      </option>
                    </select>
                  </div>
                  <div class="col-container">
                    <h2>Modo color</h2>
                    <select>
                      <option disabled selected>
                        Seleccionar...
                      </option>
                    </select>
                  </div>
                  <div class="col-container">
                    <h2>Resolución</h2>
                    <select>
                      <option disabled selected>
                        Seleccionar...
                      </option>
                    </select>
                  </div>
                  <div class="col-container col-container-last-col">
                    <h2>Profundidad color</h2>
                    <select>
                      <option disabled selected>
                        Seleccionar...
                      </option>
                    </select>
                  </div>
                </div>
                <div class="retoques-row">
                  <div class="retoques-container">
                    <h2>Retoques proveedor</h2>
                  </div>
                  <div class="square">
                    <button>+</button>
                  </div>
                </div>

                <div class="table-container">
                  <div class="table-row-container">
                    <h2>Producto</h2>
                    <input type="text" class="row" />
                    <input type="text" class="row" />
                    <input type="text" class="row" />
                    <input type="text" class="row" />
                  </div>
                  <div class="table-row-container">
                    <h2>Tipo</h2>
                    <input type="text" class="row" />
                    <input type="text" class="row" />
                    <input type="text" class="row" />
                    <input type="text" class="row" />
                  </div>
                  <div class="table-row-container">
                    <h2>Tiempo</h2>
                    <input type="text" class="row" />
                    <input type="text" class="row" />
                    <input type="text" class="row" />
                    <input type="text" class="row" />
                  </div>
                </div>

                <div class="textarea-container">
                  <h2>Comentarios cliente</h2>
                  <div class="edit_text_button-container">
                    <button class="edit-text-button b-button">B</button>
                    <button class="edit-text-button">/</button>
                    <button class="edit-text-button">U</button>
                    <button class="edit-text-button">S</button>
                    <button class="edit-text-button attach-button">
                      <svg
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="15px"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            d="M22.0545 5.94619C24.2785 8.17032 24.2785 11.7763 22.0545 14.0005L20.6067 15.4483C20.2943 15.7608 20.2943 16.2673 20.6067 16.5797L21.0862 17.0592C21.3986 17.3716 21.9051 17.3716 22.2175 17.0592L23.6653 15.6113C26.7789 12.4976 26.7789 7.44912 23.6653 4.33534C20.5517 1.22155 15.5035 1.22155 12.3898 4.33534L10.942 5.78321C10.6296 6.09563 10.6296 6.60218 10.942 6.91461L11.4215 7.39406C11.7339 7.70649 12.2404 7.70649 12.5528 7.39407L14.0006 5.94619C16.2246 3.72206 19.8305 3.72206 22.0545 5.94619Z"
                            fill="#000000"
                          ></path>
                          <path
                            d="M5.94601 22.0538C8.17004 24.278 11.7759 24.278 13.9999 22.0538L15.4477 20.606C15.7601 20.2935 16.2667 20.2935 16.5791 20.606L17.0585 21.0854C17.3709 21.3979 17.3709 21.9044 17.0585 22.2168L15.6107 23.6647C12.4971 26.7785 7.44886 26.7785 4.33523 23.6647C1.22159 20.5509 1.22159 15.5025 4.33523 12.3887L5.78303 10.9408C6.09544 10.6284 6.60197 10.6284 6.91438 10.9408L7.39382 11.4203C7.70623 11.7327 7.70623 12.2393 7.39382 12.5517L5.94601 13.9996C3.72198 16.2237 3.72198 19.8297 5.94601 22.0538Z"
                            fill="#000000"
                          ></path>
                          <path
                            d="M17.8593 9.80361C17.5078 9.45213 16.938 9.45213 16.5865 9.80361L9.80535 16.5851C9.45389 16.9366 9.45389 17.5064 9.80535 17.8579L10.1434 18.1959C10.4948 18.5474 11.0647 18.5474 11.4161 18.1959L18.1973 11.4145C18.5487 11.063 18.5487 10.4931 18.1973 10.1416L17.8593 9.80361Z"
                            fill="#000000"
                          ></path>
                        </g>
                      </svg>
                    </button>
                    <button class="edit-text-button bullets-button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#000000"
                        viewBox="0 0 48 48"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path d="M8 21c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM8 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 24.33c-1.47 0-2.67 1.19-2.67 2.67s1.2 2.67 2.67 2.67 2.67-1.19 2.67-2.67-1.2-2.67-2.67-2.67zM14 38h28v-4H14v4zm0-12h28v-4H14v4zm0-16v4h28v-4H14z"></path>
                        </g>
                      </svg>
                    </button>
                    <button class="edit-text-button bullets-number-button">
                      <svg
                        width="64px"
                        height="64px"
                        viewBox="0 0 24 24"
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
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.99999 5.5C5.99999 5.22386 5.77613 5 5.49999 5C5.22385 5 4.99999 5.22386 4.99999 5.5V8.5C4.99999 8.77614 5.22385 9 5.49999 9C5.77613 9 5.99999 8.77614 5.99999 8.5V5.5ZM5.25046 11.2673C5.38308 11.1789 5.55766 11.1864 5.68212 11.286C5.85245 11.4223 5.86653 11.6764 5.71228 11.8306L4.39644 13.1464C4.25344 13.2894 4.21066 13.5045 4.28805 13.6913C4.36544 13.8782 4.54776 14 4.74999 14H6.49999C6.77613 14 6.99999 13.7761 6.99999 13.5C6.99999 13.2239 6.77613 13 6.49999 13H5.9571L6.41939 12.5377C6.99508 11.962 6.94256 11.0137 6.30681 10.5051C5.8423 10.1335 5.19072 10.1053 4.69576 10.4352L4.47264 10.584C4.24288 10.7372 4.18079 11.0476 4.33397 11.2773C4.48714 11.5071 4.79758 11.5692 5.02734 11.416L5.25046 11.2673ZM4.74999 15.5C4.47385 15.5 4.24999 15.7239 4.24999 16C4.24999 16.2761 4.47385 16.5 4.74999 16.5H5.29288L4.64644 17.1464C4.50344 17.2894 4.46066 17.5045 4.53805 17.6913C4.61544 17.8782 4.79776 18 4.99999 18H5.74999C5.88806 18 5.99999 18.1119 5.99999 18.25C5.99999 18.3881 5.88806 18.5 5.74999 18.5H4.74999C4.47385 18.5 4.24999 18.7239 4.24999 19C4.24999 19.2761 4.47385 19.5 4.74999 19.5H5.74999C6.44035 19.5 6.99999 18.9404 6.99999 18.25C6.99999 17.6972 6.6412 17.2283 6.1438 17.0633L6.85355 16.3536C6.99654 16.2106 7.03932 15.9955 6.96193 15.8087C6.88454 15.6218 6.70222 15.5 6.49999 15.5H4.74999ZM8.99999 6C8.44771 6 7.99999 6.44772 7.99999 7C7.99999 7.55228 8.44771 8 8.99999 8H19C19.5523 8 20 7.55228 20 7C20 6.44772 19.5523 6 19 6H8.99999ZM8.99999 11C8.44771 11 7.99999 11.4477 7.99999 12C7.99999 12.5523 8.44771 13 8.99999 13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H8.99999ZM8.99999 16C8.44771 16 7.99999 16.4477 7.99999 17C7.99999 17.5523 8.44771 18 8.99999 18H19C19.5523 18 20 17.5523 20 17C20 16.4477 19.5523 16 19 16H8.99999Z"
                            fill="#000000"
                          ></path>{" "}
                        </g>
                      </svg>
                    </button>
                  </div>
                  <textarea
                    class="input-comentarios"
                    placeholder="Escribe un comentario..."
                    name="comentario"
                    rows="1"
                    cols="1"
                  ></textarea>
                </div>
                <div class="img-examples">
                  <h2>Imágenes de ejemplo</h2>
                  <div class="buttons-section">
                    <h2>Status proveedor</h2>
                    <select>
                      <option disabled selected>
                        Seleccionar...
                      </option>
                    </select>
                    <Button
                      propsStyles={{
                        marginBottom: "0.5rem",
                        width: "100%",
                        color: "white",
                        backgroundColor: "#00aaff",
                        border: "none",
                        fontSize: "small",
                      }}
                    >
                      Aprobar
                    </Button>
                    <Button
                      propsStyles={{
                        marginBottom: "0.5rem",
                        width: "100%",
                        color: "white",
                        backgroundColor: "black",
                        border: "none",
                        fontSize: "small",
                      }}
                    >
                      Subir IMG/PDF
                    </Button>
                  </div>
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
                <div class="bottom-container">
                  <h2>Log de comentarios</h2>
                  <div class="span-container">
                    <span>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod Lorem ipsum dolor sit amet,
                      consectetuer adipiscing elit, sed diam nonummy nibh
                      euismod Lorem ipsum dolor sit amet, consectetuer
                      adipiscing elit, sed diam nonummy nibh euismod Lorem ipsum
                      dolor sit amet, consectetuer adipiscing elit, sed diam
                      nonummy nibh euismod Lorem ipsum dolor sit amet
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
