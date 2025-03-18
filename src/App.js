import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Formulario from "./components/Formulario/Formulario";

function App() {
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
    </div>
  );
}

export default App;
