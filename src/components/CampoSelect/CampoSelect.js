import "./CampoSelect.css";
export default function CampoSelection(props) {
  return (
    <div className="campo__texto">
      <label>{props.label}</label>
      <select
        onChange={(evento) => props.aoAlterado(evento.target.value)}
        value={props.valor}
      >
        <option value="" disabled>
          Selecione uma opção
        </option>
        {props.itens.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}
