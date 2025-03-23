import { useState } from "react";
import Botao from "../Botao/Botao";
import CampoSelection from "../CampoSelect/CampoSelect";
import Campo from "../Campo/Campo";
import "./Formulario.css";

export default function Formulario({
  aoColaboradorCadastrado,
  times,
  cadastrarTime,
}) {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [nomeNovoTime, setNomeNovoTime] = useState("");
  const [corNovoTime, setCorNovoTime] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();

    aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };
  return (
    <section className="card-formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <Campo
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <Campo
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <Campo
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <CampoSelection
          obrigatorio={true}
          label="Times"
          itens={times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao texto="Criar card" />
      </form>
      <form
        onSubmit={(evento) => {
          evento.preventDefault();
          cadastrarTime({ nome: nomeNovoTime, cor: corNovoTime });
          setNomeNovoTime("");
          setCorNovoTime("");
        }}
      >
        <h2>Preencha os dados para criar um novo time.</h2>
        <Campo
          obrigatorio
          label="Nome do time"
          placeholder="Digite o nome do time"
          valor={nomeNovoTime}
          aoAlterado={(valor) => setNomeNovoTime(valor)}
        />
        <Campo
          obrigatorio
          type="color"
          label="Cor do time"
          placeholder="Digite a cor do time em hexadecimal"
          valor={corNovoTime}
          aoAlterado={(valor) => setCorNovoTime(valor)}
        />

        <Botao texto="Criar um novo time" />
      </form>
    </section>
  );
}
