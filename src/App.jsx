import { useState } from "react";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import Tareas from "./Components/Tareas";
// import Home from "./Components/Home";

function App() {
  const [colorScheme, setColorScheme] = useState("dark");

  const toggleColorScheme = (value?: ColorScheme) => {
    //console.log(colorScheme);
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  };

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider theme={{ colorScheme }} withGlobalStyles>
        <Tareas />
        {/* <CambiarTema></CambiarTema> */}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
