import CampoSelection from "../CampoSelect/CampoSelect";
import CampoTexto from "../CampoTexto/CampoTexto";
import "./Formulario.css";

export default function Formulario() {
  return (
    <section className="card-formulario">
      <form>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
        <CampoSelection />
      </form>
    </section>
  );
}
