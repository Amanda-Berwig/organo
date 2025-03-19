import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Formulario from "./components/Formulario/Formulario";
import Time from "./components/Time/Time";

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
      nome: "UX e Design ",
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

  return (
    <div className="App">
      <Banner />
      <Formulario
        aoColaboradorCadastrado={(colaborador) => {
          console.log(colaborador);
          setColaboradores([...colaboradores, colaborador]);
        }}
      />
      {times.map((time) => (
        <Time nome={time.nome} />
      ))}
    </div>
  );
}

export default App;
