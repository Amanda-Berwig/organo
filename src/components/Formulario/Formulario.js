import Botao from "../Botao/Botao";
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
  const aoSalvar = (evento) => {
    evento.preventDefault();
    console.log("Form foi submetido");
  };
  return (
    <section className="card-formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
        />
        <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
        <CampoSelection obrigatorio={true} label="Times" itens={times} />
        <Botao texto="Criar card" />
      </form>
    </section>
  );
}
