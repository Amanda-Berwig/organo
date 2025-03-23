import Card from "../Card/Card";
import "./Time.css";

export default function Time({
  nome,
  corPrimaria,
  corSecundaria,
  colaboradores,
  aoDeletar,
}) {
  return colaboradores.length > 0 ? (
    <section className="time" style={{ backgroundColor: corSecundaria }}>
      <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
      <div className="colaboradores">
        {colaboradores.map((colaborador) => {
          return (
            <Card
              key={colaborador.nome}
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
