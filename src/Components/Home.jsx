import React from "react";
import CambiarTema from "./CambiarTema";
import { Container, Text, Loader, Center, Paper } from "@mantine/core";

function Home() {
  return (
    <>
      <CambiarTema />

      <h1>Bienvenidos al Home</h1>
      <div>
        <br />

        <Container>
          <Center>
            <Paper shadow="lg" p="md" withBorder>
              <Text
                component="span"
                align="center"
                variant="gradient"
                gradient={{ from: "indigo", to: "cyan", deg: 90 }}
                size="xl"
                weight={700}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit,
                voluptatem? Nihil illum culpa voluptas eum molestiae tempora
                quasi nisi! Odit vero voluptatum ab facere id dolorum ratione
                eum delectus optio.
              </Text>
            </Paper>
          </Center>
          <Center>
            <Loader size="xl" color="Green" />
          </Center>
        </Container>

        <Container
          sx={(theme) => ({
            backgroundColor: theme.colors.gray,
            "&:hover": {
              backgroundColor: theme.colors.blue,
            },
          })}
        >
          <ul>
            <li>Item de prueba</li>
            <li>Item de prueba</li>
            <li>Item de prueba</li>
            <li>Item de prueba</li>
            <li>Item de prueba</li>
            <li>Item de prueba</li>
            <li>Item de prueba</li>
          </ul>
        </Container>
      </div>
    </>
  );
}

export default Home;
