import "./CampoTexto.css";

export default function CampoTexto(props) {
  return (
    <div className="campo__texto">
      <label>{props.label}</label>
      <input required={props.obrigatorio} placeholder={props.placeholder} />
    </div>
  );
}
