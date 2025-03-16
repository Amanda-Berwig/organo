import "./CampoSelect.css";
export default function CampoSelection() {
  return (
    <div className="campo__texto">
      <label>Time</label>
      <select name="" id="">
        <option value="" disabled selected>
          Selecione uma opção
        </option>
        <option value="">Programação</option>
        <option value="">Front-End</option>
        <option value="">Data Science</option>
        <option value="">Devops</option>
      </select>
    </div>
  );
}
