import { useState } from "react";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import CambiarTema from "./Components/CambiarTema";

function App() {
  const [colorScheme, setColorScheme] = useState("dark");

  const toggleColorScheme = (value?: ColorScheme) => {
    console.log(colorScheme);
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  };

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
      
    >
      <MantineProvider theme={{ colorScheme }} withGlobalStyles>
        <CambiarTema></CambiarTema>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
