import React from "react";
import CambiarTema from "./CambiarTema";
import { Center, Container, Group, Input, Button } from "@mantine/core";
import { Plus } from "tabler-icons-react";

function Tareas() {
  return (
    <>
      <Container>
        <CambiarTema />

        <Center>
          <Group grow style={{width: "100%"}} m="xl">
            <Input radius="xl" size="35" placeholder="Ingrese la tarea" />
          </Group>
            <Button radius="xl">
                <Plus size="lg"/>
            </Button>
        </Center>
      </Container>
    </>
  );
}

export default Tareas;
