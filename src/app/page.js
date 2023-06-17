import ButtonsSections from "@/components/ButtonsSections/ButtonsSections";
import "./page.css";
import ResumePage from "@/components/CuadroDatos/resumePage";
import ResumenPedido from "@/components/resumenPedido/resumenPedido";
import LeftBottomSection from "@/components/LeftBottomSection/leftBottomSection";
import ImagenSection from "@/components/Imagenes/imagenSection";
import ImagenEjemplo from "@/components/ImagenesEjemplo/ImagenesEjemplo";


export default function Home() {
  return (
    <div class="page4">
      <div class="button-section">
        <ButtonsSections />
      </div>
      <div class="top-section">
        <ResumePage />
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
