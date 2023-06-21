import ButtonsSections from "@/components/TopSection/ButtonsSections/ButtonsSections";

import ResumePage from "@/components/CenterSection/CuadroDatos/resumePage";
import ResumenPedido from "@/components/CenterSection/resumenPedido/resumenPedido";
import LeftBottomSection from "@/components/BottomSection/LeftBottomSection/leftBottomSection";
import ImagenSection from "@/components/BottomSection/Imagenes/imagenSection";
import ImagenEjemplo from "@/components/BottomSection/ImagenesEjemplo/ImagenesEjemplo";
import PresupuestoContent from "@/components/CenterSection/CuadroDatos/presupuestoContent";
import Denegado from "@/components/TopSection/ButtonsSections/Denegadp";

const content = PresupuestoContent();
const dynamicButton = Denegado();

export default function Page8() {
  return (
    <div class="page8">
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
