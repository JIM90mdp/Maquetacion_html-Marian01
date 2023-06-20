import RoyTable from "@/components/BottomSection/Imagenes/royTable";
import Button from "@/components/Button/Button";
import PlayButton from "@/components/Button/playButton";
import RowTableCenterSection from "@/components/RowTables/rowTableCenterSection";
import React from "react";

const RetoquesContentPage10 = () => {
  return (
    <div class="tab-content retoques_content-container">
      <div class="column first-col">
        <PlayButton name="Protocolo">
          <div class="button-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon-svg"
              fill="#00aaff"
              height="20px"
              width="20px"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"
              />
              <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
              <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
            </svg>
            <h2>Protocolo</h2>
          </div>
        </PlayButton>
        <PlayButton>
          <div class="button-container">
            <svg
              class="icon-svg"
              fill="#00aaff"
              height="20px"
              width="20px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 487.482 487.482"
              xmlSpace="preserve"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <path d="M477.482,63.277H10c-5.523,0-10,4.478-10,10v340.928c0,5.522,4.477,10,10,10h467.482c5.522,0,10-4.478,10-10V73.277 C487.482,67.755,483.005,63.277,477.482,63.277z M467.482,83.277v235.236l-104.018-80.07c-3.364-2.591-7.996-2.773-11.555-0.457 l-68.298,44.456l-134.745-92.417c-3.192-2.189-7.362-2.34-10.706-0.384L20,258.777v-175.5H467.482z M20,404.205V281.948 l122.786-71.841l135.024,92.608c3.337,2.286,7.723,2.34,11.111,0.134l67.959-44.235l110.602,85.138v60.453H20z"></path>{" "}
                  <path d="M280.707,218.281c26.063,0,47.266-21.202,47.266-47.264c0-26.058-21.203-47.258-47.266-47.258 c-26.062,0-47.264,21.2-47.264,47.258C233.443,197.079,254.645,218.281,280.707,218.281z M280.707,143.76 c15.034,0,27.266,12.228,27.266,27.258c0,15.033-12.231,27.264-27.266,27.264c-15.033,0-27.264-12.23-27.264-27.264 C253.443,155.987,265.674,143.76,280.707,143.76z"></path>{" "}
                </g>{" "}
              </g>
            </svg>
            <h2>Recursos</h2>
          </div>
        </PlayButton>
        <PlayButton>
          <div class="button-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon-svg"
              fill="#00aaff"
              height="20px"
              width="20px"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M0 10.5A1.5 1.5 0 0 1 1.5 9h1A1.5 1.5 0 0 1 4 10.5v1A1.5 1.5 0 0 1 2.5 13h-1A1.5 1.5 0 0 1 0 11.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm10.5.5A1.5 1.5 0 0 1 13.5 9h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM6 4.5A1.5 1.5 0 0 1 7.5 3h1A1.5 1.5 0 0 1 10 4.5v1A1.5 1.5 0 0 1 8.5 7h-1A1.5 1.5 0 0 1 6 5.5v-1zM7.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"
              />
              <path d="M6 4.5H1.866a1 1 0 1 0 0 1h2.668A6.517 6.517 0 0 0 1.814 9H2.5c.123 0 .244.015.358.043a5.517 5.517 0 0 1 3.185-3.185A1.503 1.503 0 0 1 6 5.5v-1zm3.957 1.358A1.5 1.5 0 0 0 10 5.5v-1h4.134a1 1 0 1 1 0 1h-2.668a6.517 6.517 0 0 1 2.72 3.5H13.5c-.123 0-.243.015-.358.043a5.517 5.517 0 0 0-3.185-3.185z" />
            </svg>
            <h2>Silueteado</h2>
          </div>
        </PlayButton>
        <PlayButton>
          <div class="button-container">
            <svg
              class="icon-svg"
              fill="#00aaff"
              height="20px"
              width="20px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M468.884,439.242V180.547c0-4.466-3.618-8.084-8.084-8.084c-4.466,0-8.084,3.619-8.084,8.084v258.695 c0,4.466,3.619,8.084,8.084,8.084C465.266,447.326,468.884,443.708,468.884,439.242z"></path>{" "}
                      <path d="M185.937,388.042h-75.453c-16.345,0-29.642,13.298-29.642,29.642v64.674c0,4.848,1.171,9.429,3.242,13.474H45.811 c-4.465,0-8.084,3.619-8.084,8.084c0,4.466,3.62,8.084,8.084,8.084h140.126c16.345,0,29.642-13.298,29.642-29.642v-64.674 C215.579,401.34,202.282,388.042,185.937,388.042z M199.411,482.358c0,7.43-6.044,13.474-13.474,13.474h-75.453 c-7.43,0-13.474-6.044-13.474-13.474v-35.032h83.537c4.465,0,8.084-3.618,8.084-8.084c0-4.466-3.62-8.084-8.084-8.084H97.011 v-13.474c0-7.43,6.044-13.474,13.474-13.474h75.453c7.43,0,13.474,6.044,13.474,13.474V482.358z"></path>{" "}
                      <path d="M18.863,495.832H8.084C3.62,495.832,0,499.45,0,503.916C0,508.382,3.62,512,8.084,512h10.779 c4.465,0,8.084-3.618,8.084-8.084C26.947,499.45,23.328,495.832,18.863,495.832z"></path>{" "}
                      <path d="M439.242,97.011h-10.779V29.642C428.463,13.298,415.165,0,398.821,0h-37.726c-16.344,0-29.642,13.298-29.642,29.642 v67.368h-10.779c-35.683,0-65.858,25.504-71.752,60.642c-0.739,4.404,2.232,8.571,6.636,9.311 c4.402,0.735,8.57-2.233,9.311-6.636c4.582-27.32,28.052-47.149,55.806-47.149h118.568c31.203,0,56.589,25.387,56.589,56.589 v312.589c0,7.43-6.044,13.474-13.474,13.474H353.01c-4.466,0-8.084,3.619-8.084,8.084c0,4.466,3.618,8.084,8.084,8.084h129.347 C498.702,512,512,498.702,512,482.358V169.768C512,129.649,479.361,97.011,439.242,97.011z M412.295,97.011h-64.674V29.642 c0-7.43,6.044-13.474,13.474-13.474h37.726c7.43,0,13.474,6.044,13.474,13.474V97.011z"></path>{" "}
                      <path d="M285.642,312.589h-2.695v-99.705c0-16.344-13.298-29.642-29.642-29.642h-21.558c-16.345,0-29.642,13.298-29.642,29.642 v99.705h-2.695c-28.231,0-51.2,22.969-51.2,51.2c0,4.466,3.62,8.084,8.084,8.084s8.084-3.618,8.084-8.084 c0-19.317,15.716-35.032,35.032-35.032h86.232c19.317,0,35.032,15.715,35.032,35.032v118.568c0,7.43-6.044,13.474-13.474,13.474 h-72.758c-4.465,0-8.084,3.619-8.084,8.084c0,4.466,3.62,8.084,8.084,8.084H307.2c16.344,0,29.642-13.298,29.642-29.642V363.789 C336.842,335.558,313.873,312.589,285.642,312.589z M266.779,312.589h-48.505v-99.705c0-7.43,6.044-13.474,13.474-13.474h21.558 c7.43,0,13.474,6.044,13.474,13.474V312.589z"></path>{" "}
                      <path d="M296.421,460.8v-97.01c0-4.466-3.619-8.084-8.084-8.084c-4.466,0-8.084,3.618-8.084,8.084v97.01 c0,4.466,3.618,8.084,8.084,8.084C292.803,468.884,296.421,465.266,296.421,460.8z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
            <h2>Productos</h2>
          </div>
        </PlayButton>
        <PlayButton>
          <div class="button-container">
            <svg
              class="icon-svg"
              fill="#00aaff"
              height="20px"
              width="20px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M22,20H16L8,13v7H5V12S2,11,2,8,5,4,5,4L16,14A6,6,0,0,1,22,20Z"></path>
              </g>
            </svg>
            <h2>Moda</h2>
          </div>
        </PlayButton>
        <PlayButton>
          <div class="button-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon-svg"
              fill="#00aaff"
              height="20px"
              width="20px"
              viewBox="0 0 16 16"
            >
              <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6l3-4zm11.386 3.785-1.806-2.41-.776 2.413 2.582-.003zm-3.633.004.961-2.989H4.186l.963 2.995 5.704-.006zM5.47 5.495 8 13.366l2.532-7.876-5.062.005zm-1.371-.999-.78-2.422-1.818 2.425 2.598-.003zM1.499 5.5l5.113 6.817-2.192-6.82L1.5 5.5zm7.889 6.817 5.123-6.83-2.928.002-2.195 6.828z" />
            </svg>
            <h2>Joyería</h2>
          </div>
        </PlayButton>
        <PlayButton>
          <div class="button-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon-svg"
              fill="#00aaff"
              height="20px"
              width="20px"
              viewBox="0 0 16 16"
            >
              <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z" />
            </svg>
            <h2>Otros/Efectos</h2>
          </div>
        </PlayButton>
      </div>

      <div class="scroll-container">
        <div class="inputs-container-page10">
          <select>
            <option>Completo moda</option>
          </select>
          <div class="input-container">
            <p>Corrección Arrugas</p>
            <input type="checkbox" placeholder="Nombre del lote..." />
          </div>
          <div class="input-container">
            <p>Licuados</p>
            <input type="checkbox" placeholder="Nombre del lote..." />
          </div>
          <div class="input-container">
            <p>Retoque de fondo</p>
            <input type="checkbox" placeholder="Nombre del lote..." />
          </div>
          <div class="input-container">
            <p>Piel</p>
            <input type="checkbox" placeholder="Nombre del lote..." />
          </div>
          <div class="input-container">
            <p>Simetría</p>
            <input type="checkbox" placeholder="Nombre del lote..." />
          </div>
          <div class="input-container">
            <p>Limpieza de fondo</p>
            <input type="checkbox" placeholder="Nombre del lote..." />
          </div>
          <div class="input-container">
            <p>Relleno de Cuello</p>
            <input type="checkbox" placeholder="Nombre del lote..." />
          </div>
          <select>
            <option>Procesado Raw</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default RetoquesContentPage10;
