import Card from "../Card/Card";
import "./Time.css";

export default function Time({
  nome,
  corPrimaria,
  corSecundaria,
  colaboradores,
  aoDeletar,
  mudarCor,
}) {
  return colaboradores.length > 0 ? (
    <section className="time" style={{ backgroundColor: corSecundaria }}>
      <input
        type="color"
        className="input-color"
        value={corPrimaria}
        onChange={(evento) => mudarCor(evento.target.value, nome)}
      />
      <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
      <div className="colaboradores">
        {colaboradores.map((colaborador, indice) => {
          return (
            <Card
              key={indice}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              corDeFundo={corPrimaria}
              aoDeletar={aoDeletar}
            />
          );
        })}
      </div>
    </section>
  ) : (
    ""
  );
}
