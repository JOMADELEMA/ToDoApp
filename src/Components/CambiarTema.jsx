import {
  MantineProvider,
  MantineThemeOverride,
  ActionIcon,
  useMantineColorScheme,
} from "@mantine/core";
import react, { useState } from "react";

import { MoonStars, Sun } from "tabler-icons-react";

// const miTemaOscuro: MantineThemeOverride = {
//   colorScheme: "dark",
//   primaryColor: "red",
//   defaultRadius: 0,
// };

// const miTemaClaro: MantineThemeOverride = {
//   colorScheme: "light",
//   primaryColor: "green",
//   defaultRadius: 0,
// };

function CambiarTema() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  //   const [tema, setTema] = useState(false);

  //   let cambiarTema = () => {
  //     //console.log(tema)
  //     if (tema) {
  //       setTema(false);
  //     } else {
  //       setTema(true);
  //     }
  //   };
  return (
    <ActionIcon
      variant="outline"
      color={dark ? "yellow" : "blue"}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {dark ?  <Sun size={40} /> : <MoonStars size={40} /> }
    </ActionIcon>
  );
}

export default CambiarTema;
