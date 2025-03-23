import "./Card.css";
import { IoCloseCircleSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";

export default function Card({
  colaborador,
  corDeFundo,
  aoDeletar,
  aoFavoritar,
}) {
  function favoritar() {
    aoFavoritar(colaborador.id);
  }
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
        <div className="favoritar">
          {colaborador.favorito ? (
            <FaHeart size={25} onClick={favoritar} color="#ff0000" />
          ) : (
            <FaRegHeart size={25} onClick={favoritar} />
          )}
        </div>
      </div>
    </div>
  );
}
