import "./CampoSelect.css";
export default function CampoSelection(props) {
  return (
    <div className="campo__texto">
      <label>{props.label}</label>
      <select name="" id="">
        <option value="" disabled selected>
          Selecione uma opção
        </option>
        {props.itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
}
