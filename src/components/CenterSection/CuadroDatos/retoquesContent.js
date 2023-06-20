import RoyTable from "@/components/BottomSection/Imagenes/royTable";
import Button from "@/components/Button/Button";
import PlayButton from "@/components/Button/playButton";
import RowTableCenterSection from "@/components/RowTables/rowTableCenterSection";
import React from "react";

const RetoquesContent = () => {
  return (
    <div class="tab-content retoques_content-container">
      <div class="column first-col">
        <PlayButton>
          <div>
            <div></div>
            <p>Protocolo</p>
          </div>
        </PlayButton>
        <PlayButton>
          <div>
            <div></div>
            <p>Protocolo</p>
          </div>
        </PlayButton>
        <PlayButton>
          <div>
            <div></div>
            <p>Protocolo</p>
          </div>
        </PlayButton>
        <PlayButton>
          <div>
            <div></div>
            <p>Protocolo</p>
          </div>
        </PlayButton>
        <PlayButton>
          <div>
            <div></div>
            <p>Protocolo</p>
          </div>
        </PlayButton>
        <PlayButton>
          <div>
            <div></div>
            <p>Protocolo</p>
          </div>
        </PlayButton>
        <PlayButton>
          <div>
            <div></div>
            <p>Protocolo</p>
          </div>
        </PlayButton>
      </div>

      <div class="scroll-container">
        <div class="table-container">
          <div class="rows-table">
            <RowTableCenterSection />
            <RowTableCenterSection />
            <RowTableCenterSection />
            <RowTableCenterSection />
            <RowTableCenterSection />
            <RowTableCenterSection />
            <RowTableCenterSection />
            <RowTableCenterSection />
            <RowTableCenterSection />
            <RowTableCenterSection />
            <RowTableCenterSection />
          </div>
          <div class="sec-col-right-side">
            <Button
              propsStyles={{
                color: "white",
                backgroundColor: "#00aaff",
                border: "none",
                fontSize: "x-small",
                width: "100px",
              }}
            >
              Subir IMG +
            </Button>
            <Button
              propsStyles={{
                color: "white",
                backgroundColor: "black",
                border: "none",
                fontSize: "x-small",
                width: "100px",
              }}
            >
              Subir PDF +
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetoquesContent;
