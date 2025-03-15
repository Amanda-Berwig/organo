import "./Banner.css";
import Imagem from "./assets/banner.png";
function Banner() {
  return (
    <header className="banner">
      <img src={Imagem} alt="imagem do banner" />;
    </header>
  );
}
export default Banner;
