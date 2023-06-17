import ButtonsSections from "@/components/TopSection/ButtonsSections/ButtonsSections";
import "./page.css";
import ResumePage from "@/components/CenterSection/CuadroDatos/resumePage";
import ResumenPedido from "@/components/CenterSection/resumenPedido/resumenPedido";
import LeftBottomSection from "@/components/BottomSection/LeftBottomSection/leftBottomSection";
import ImagenSection from "@/components/BottomSection/Imagenes/imagenSection";
import ImagenEjemplo from "@/components/BottomSection/ImagenesEjemplo/ImagenesEjemplo";


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
