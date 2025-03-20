import "./Rodape.css";
import Facebook from "./assets/fb.png";
import Twitter from "./assets/tw.png";
import Instagram from "./assets/ig.png";
import LogoOrgano from "./assets/logo.png";

export default function Rodape() {
  return (
    <footer className="footer">
      <ul className="redes-sociais">
        <li>
          <a href="facebook.com" target="_blank">
            <img src={Facebook} alt="logo Facebook" />{" "}
          </a>
        </li>
        <li>
          <a href="twitter.com" target="_blank">
            <img src={Twitter} alt="logo Twitter" />{" "}
          </a>
        </li>
        <li>
          <a href="instagram.com" target="_blank">
            <img src={Instagram} alt="logo Instagram" />{" "}
          </a>
        </li>
      </ul>
      <div>
        <img src={LogoOrgano} alt="logo organo" />
      </div>
      <div>
        <p>Desenvolvido por Alura.</p>
      </div>
    </footer>
  );
}
