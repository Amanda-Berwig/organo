import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Formulario from "./components/Formulario/Formulario";
import Time from "./components/Time/Time";
import Rodape from "./components/Rodape/Rodape";

function App() {
  const times = [
    {
      nome: "Programação",
      corPrimaria: "var(--destaq-prog)",
      corSecundaria: "var(--fundo-prog)",
    },
    {
      nome: "Front-End",
      corPrimaria: "var(--destaq-front)",
      corSecundaria: "var(--fundo-front)",
    },
    {
      nome: "Data Science",
      corPrimaria: "var(--destaq-data)",
      corSecundaria: "var(--fundo-data)",
    },
    {
      nome: "Devops",
      corPrimaria: "var(--destaq-devops)",
      corSecundaria: "var(--fundo-devops)",
    },
    {
      nome: "UX e Design",
      corPrimaria: "var(--destaq-ux)",
      corSecundaria: "var(--fundo-ux)",
    },
    {
      nome: "Mobile",
      corPrimaria: "var(--destaq-mobile)",
      corSecundaria: "var(--fundo-mobile)",
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "var(--destaq-inov)",
      corSecundaria: "var(--fundo-inov)",
    },
  ];
  const [colaboradores, setColaboradores] = useState([]);

  function deletarColaborador(nome) {
    console.log("Deletar colaborador");
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.nome !== nome)
    );
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) => {
          setColaboradores([...colaboradores, colaborador]);
        }}
      />
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
          aoDeletar={deletarColaborador}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
