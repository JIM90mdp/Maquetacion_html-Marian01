import ButtonsSections from "@/components/TopSection/ButtonsSections/ButtonsSections";

import ResumePage from "@/components/CenterSection/CuadroDatos/resumePage";
import ResumenPedido from "@/components/CenterSection/resumenPedido/resumenPedido";
import LeftBottomSection from "@/components/BottomSection/LeftBottomSection/leftBottomSection";
import ImagenSection from "@/components/BottomSection/Imagenes/imagenSection";
import ImagenEjemplo from "@/components/BottomSection/ImagenesEjemplo/ImagenesEjemplo";
import ResumenContent from "@/components/CenterSection/CuadroDatos/resumenContent";
import EnCorreccion from "@/components/TopSection/ButtonsSections/EnCorreccion";

const content = ResumenContent();
const dynamicButton = EnCorreccion();

export default function Page4() {
  return (
    <div class="page4">
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
