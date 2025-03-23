import "./Card.css";
import { IoCloseCircleSharp } from "react-icons/io5";

export default function Card({ colaborador, corDeFundo, aoDeletar }) {
  return (
    <div className="colaborador">
      <IoCloseCircleSharp
        size={35}
        className="deletar"
        onClick={() => aoDeletar(colaborador.id)}
      />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={colaborador.imagem} alt={colaborador.nome} />
      </div>

      <div className="rodape">
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
      </div>
    </div>
  );
}
