import ButtonsSections from "@/components/TopSection/ButtonsSections/ButtonsSections";

import ResumePage from "@/components/CenterSection/CuadroDatos/resumePage";
import ResumenPedido from "@/components/CenterSection/resumenPedido/resumenPedido";
import ImagenSection from "@/components/BottomSection/Imagenes/imagenSection";
import Aprobado from "@/components/TopSection/ButtonsSections/Aprobado";
import RetoquesContent from "@/components/CenterSection/CuadroDatos/retoquesContent";
import LeftBottomSectionPage7 from "@/components/BottomSection/LeftBottomSection/leftBottomSectionPage7";
import ImagenEjemploPage7 from "@/components/BottomSection/ImagenesEjemplo/ImagenesEjemploPage7";

const content = RetoquesContent();
const dynamicButton = Aprobado();

export default function Page7() {
  return (
    <div class="page7">
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
            <LeftBottomSectionPage7 />
            <ImagenSection />
          </div>
          <div class="bottom_section-right-column">
            <ImagenEjemploPage7 />
          </div>
        </div>
      </div>
    </div>
  );
}
