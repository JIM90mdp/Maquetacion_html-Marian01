import ButtonsSections from "@/components/TopSection/ButtonsSections/ButtonsSections";

import ResumePage from "@/components/CenterSection/CuadroDatos/resumePage";
import ResumenPedido from "@/components/CenterSection/resumenPedido/resumenPedido";
import LeftBottomSection from "@/components/BottomSection/LeftBottomSection/leftBottomSection";
import ImagenSection from "@/components/BottomSection/Imagenes/imagenSection";
import ImagenEjemplo from "@/components/BottomSection/ImagenesEjemplo/ImagenesEjemplo";
import ClienteContent from "@/components/CenterSection/CuadroDatos/clienteContent";
import ALaEspera from "@/components/TopSection/ButtonsSections/ALaEspera";

const content = ClienteContent();
const dinamicBotton = ALaEspera();

export default function Page5() {
  return (
    <div class="page4">
      <div class="button-section">
        <ButtonsSections dinamicBotton={dinamicBotton} />
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
  );
}
