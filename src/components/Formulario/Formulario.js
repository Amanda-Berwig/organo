import CampoSelection from "../CampoSelect/CampoSelect";
import CampoTexto from "../CampoTexto/CampoTexto";
import "./Formulario.css";

export default function Formulario() {
  const times = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];
  return (
    <section className="card-formulario">
      <form>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
        <CampoSelection label="Times" itens={times} />
      </form>
    </section>
  );
}
