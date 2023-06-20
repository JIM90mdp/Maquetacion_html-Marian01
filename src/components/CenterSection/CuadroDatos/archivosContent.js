import Button from "@/components/Button/Button";
import RowTableArchivosContent from "@/components/RowTables/rowTableArchivosContent";
import React from "react";

const ArchivosContent = () => {
  return (
    <div class="tab-content archivos_content-container">
      <div class="column first-column">
        <h2>FOTO ENVIADA POR CLIENTE</h2>
        <div className="search-container">
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
          <input
            class="search-input"
            type="text"
            placeholder="Search..."
            autoComplete="off"
          />
        </div>
        <RowTableArchivosContent />
        <RowTableArchivosContent />
        <RowTableArchivosContent />
        <RowTableArchivosContent />
        <RowTableArchivosContent />
        <RowTableArchivosContent />
      </div>
      <div class="column sec-column">
        <h2>FOTO ENVIADA POR PROVEEDOR</h2>
        <div className="search-container">
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
          <input
            class="search-input"
            type="text"
            placeholder="Search..."
            autoComplete="off"
          />
        </div>
        <RowTableArchivosContent />
        <RowTableArchivosContent />
        <RowTableArchivosContent />
        <RowTableArchivosContent />
        <RowTableArchivosContent />

        <RowTableArchivosContent />
      </div>
      <div class="column third-column">
        {" "}
        <h2>FOTO ENVIADA POR ADMIN</h2>
        <div className="search-container">
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
          <input
            class="search-input"
            type="text"
            placeholder="Search..."
            autoComplete="off"
          />
        </div>
        <RowTableArchivosContent />
        <RowTableArchivosContent />
        <RowTableArchivosContent />
        <RowTableArchivosContent />
        <RowTableArchivosContent />
        <RowTableArchivosContent />
      </div>
    </div>
  );
};

export default ArchivosContent;
