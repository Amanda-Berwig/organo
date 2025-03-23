import "./Card.css";
import { IoCloseCircleSharp } from "react-icons/io5";

export default function Card({ nome, cargo, imagem, corDeFundo, aoDeletar }) {
  return (
    <div className="colaborador">
      <IoCloseCircleSharp
        size={35}
        className="deletar"
        onClick={() => aoDeletar(nome)}
      />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={nome} />
      </div>

      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
}
