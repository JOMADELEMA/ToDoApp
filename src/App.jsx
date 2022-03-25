import { MantineProvider, MantineThemeOverride } from "@mantine/core";
import react, {useState} from 'react'
import "./App.css";
import Boton from "./Components/Boton";
import ThemeToggle from "./Components/ThemeToggle";

const miTemaOscuro: MantineThemeOverride = {
  colorScheme: 'dark',
  primaryColor: 'red',
  defaultRadius: 0,
};

const miTemaClaro: MantineThemeOverride = {
  colorScheme: 'light',
  primaryColor: 'red',
  defaultRadius: 0,
};

function App() {
  
  const [tema, setTema] = useState(false)
   

  return (
    <MantineProvider theme={ tema? miTemaClaro : miTemaOscuro} withGlobalStyles>
      <div className="App">
        {/* <ThemeToggle /> */}
        <Boton texto="Hola mundo" variante="outline">
          {" "}
        </Boton>
      </div>
    </MantineProvider>
  );
}

export default App;
