import ButtonsSections from "@/components/TopSection/ButtonsSections/ButtonsSections";

import ResumePage from "@/components/CenterSection/CuadroDatos/resumePage";
import ResumenPedido from "@/components/CenterSection/resumenPedido/resumenPedido";
import LeftBottomSection from "@/components/BottomSection/LeftBottomSection/leftBottomSection";
import ImagenSection from "@/components/BottomSection/Imagenes/imagenSection";
import ImagenEjemplo from "@/components/BottomSection/ImagenesEjemplo/ImagenesEjemplo";
import ArchivosContent from "@/components/CenterSection/CuadroDatos/archivosContent";
import Cerrado from "@/components/TopSection/ButtonsSections/Cerrado";

const content = ArchivosContent();
const dynamicButton = Cerrado();

export default function Page9() {
  return (
    <div class="page9">
      <div class="single-page">
        <div class="button-section">
          <ButtonsSections dynamicButton={dynamicButton} />
        </div>
        <div class="top-section">
          <ResumePage content={content} />
          <ResumenPedido />
        </div>
        <div class="bottom-section">
          <div class="bottom_section-left-column">
            <LeftBottomSection />
            <ImagenSection />
          </div>
          <div class="bottom_section-right-column">
            <ImagenEjemplo />
          </div>
        </div>
      </div>
    </div>
  );
}
