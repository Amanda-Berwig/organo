import Card from "../Card/Card";
import "./Time.css";
import hexToRgba from "hex-to-rgba";

export default function Time({ time, colaboradores, aoDeletar, mudarCor }) {
  return colaboradores.length > 0 ? (
    <section
      className="time"
      style={{ backgroundColor: hexToRgba(time.cor, "0.6") }}
    >
      <input
        type="color"
        className="input-color"
        value={time.cor}
        onChange={(evento) => mudarCor(evento.target.value, time.id)}
      />
      <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
      <div className="colaboradores">
        {colaboradores.map((colaborador, indice) => {
          return (
            <Card
              key={indice}
              colaborador={colaborador}
              corDeFundo={time.cor}
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
