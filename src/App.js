import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Formulario from "./components/Formulario/Formulario";
import Time from "./components/Time/Time";
import Rodape from "./components/Rodape/Rodape";

function App() {
  const [times, setTimes] = useState([
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
  ]);

  const inicial = [
    {
      nome: "JULIANA AMOASEI",
      cargo: "Desenvolvedora de software e instrutora",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      time: times[0].nome,
    },
    {
      nome: "DANIEL ARTINE",
      cargo: "Engenheiro de Software na Stone Age",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      time: times[0].nome,
    },
    {
      nome: "GUILHERME LIMA",
      cargo: "Desenvolvedor Python e JavaScript na Alura",
      imagem:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      time: times[0].nome,
    },
    {
      nome: "PAULO SILVEIRA",
      cargo: "Hipster e CEO da Alura",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      time: times[0].nome,
    },
    {
      nome: "JULIANA AMOASEI",
      cargo: "Desenvolvedora de software e instrutora",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      time: times[1].nome,
    },
    {
      nome: "DANIEL ARTINE",
      cargo: "Engenheiro de Software na Stone Age",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      time: times[1].nome,
    },
    {
      nome: "GUILHERME LIMA",
      cargo: "Desenvolvedor Python e JavaScript na Alura",
      imagem:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      time: times[1].nome,
    },
    {
      nome: "PAULO SILVEIRA",
      cargo: "Hipster e CEO da Alura",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      time: times[1].nome,
    },
    {
      nome: "JULIANA AMOASEI",
      cargo: "Desenvolvedora de software e instrutora",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      time: times[2].nome,
    },
  ];
  const [colaboradores, setColaboradores] = useState(inicial);
  function deletarColaborador(nome) {
    console.log("Deletar colaborador");
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.nome !== nome)
    );
  }
  function mudarCorTime(cor, nome) {
    setTimes(
      times.map((time) => {
        if (time.nome === nome) {
          time.corPrimaria = cor;
        }
        return time;
      })
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
      {times.map((time, indice) => (
        <Time
          key={indice}
          mudarCor={mudarCorTime}
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
