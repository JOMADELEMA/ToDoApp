import React from "react";
import CambiarTema from "./CambiarTema";
import {
  ActionIcon,
  Center,
  Container,
  Group,
  Input,
  Button,
  Paper,
  Text,
} from "@mantine/core";
import { Plus, Trash, Square, SquareCheck } from "tabler-icons-react";
import Lista from "./Lista";

function Tareas() {

  const tareas = ["tarea 1", "tarea 2", "tarea 3", "tarea 4"]



  return (
    <>
      <Container>
        <CambiarTema />

        <Center>
          <Group grow style={{ width: "100%" }} m="xl">
            <Input radius="sm"placeholder="Ingrese la tarea" />
          </Group>
          <ActionIcon radius="xl" variant="hover" color="green">
            <Plus />
          </ActionIcon>
        </Center>

        <br />

        <Lista listado={tareas} />

        {/* <Input
          disabled
          icon={<Square size={18} />}
          placeholder="Tarea de prueba 1"
          rightSectionWidth={70}
          rightSection={
            <ActionIcon variant="hover" color="red" radius="md">
              <Trash size={18} />
            </ActionIcon>
          }
        /> */}

        {/* <Paper
          style={{ display: "flex", justifyContent: "space-between" }}
          withBorder
          p="sm"
          shadow="sm"
          sx={(theme) => ({
            "&:hover": {
              backgroundColor: theme.colors.gray[1],
            },
          })}
        >
          <Group>
            <Square size={25} />
            <Text size="lg">Tarea de prueba 1</Text>
          </Group>
          <ActionIcon variant="hover" color="red" radius="md">
            <Trash size={18} />
          </ActionIcon>
        </Paper>
        <Paper
          style={{ display: "flex", justifyContent: "space-between" }}
          withBorder
          p="sm"
          shadow="sm"
          sx={(theme) => ({
            "&:hover": {
              backgroundColor: theme.colors.gray[1],
            },
          })}
        >
          <Group>
            <SquareCheck size={25} />
            <Text size="lg" style={{ textDecoration: "line-through" }}>
              Tarea de prueba 1
            </Text>
          </Group>
          <ActionIcon variant="hover" color="red" radius="md">
            <Trash size={18} />
          </ActionIcon>
        </Paper>
        <Paper
          style={{ display: "flex", justifyContent: "space-between" }}
          withBorder
          p="sm"
          shadow="sm"
          sx={(theme) => ({
            "&:hover": {
              backgroundColor: theme.colors.gray[1],
            },
          })}
        >
          <Group>
            <SquareCheck size={25} />
            <Text size="lg" style={{ textDecoration: "line-through" }}>
              Tarea de prueba 1
            </Text>
          </Group>
          <ActionIcon variant="hover" color="red" radius="md">
            <Trash size={18} />
          </ActionIcon>
        </Paper>
        <Paper
          style={{ display: "flex", justifyContent: "space-between" }}
          withBorder
          p="sm"
          shadow="sm"
          sx={(theme) => ({
            "&:hover": {
              backgroundColor: theme.colors.gray[1],
            },
          })}
        >
          <Group>
            <SquareCheck size={25} />
            <Text size="lg" style={{ textDecoration: "line-through" }}>
              Tarea de prueba 1
            </Text>
          </Group>
          <ActionIcon variant="hover" color="red" radius="md">
            <Trash size={18} />
          </ActionIcon>
        </Paper>
        <Paper
          style={{ display: "flex", justifyContent: "space-between" }}
          withBorder
          p="sm"
          shadow="sm"
          sx={(theme) => ({
            "&:hover": {
              backgroundColor: theme.colors.gray[1],
            },
          })}
        >
          <Group>
            <SquareCheck size={25} />
            <Text size="lg" style={{ textDecoration: "line-through" }}>
              Tarea de prueba 1
            </Text>
          </Group>
          <ActionIcon variant="hover" color="red" radius="md">
            <Trash size={18} />
          </ActionIcon>
        </Paper> */}

        {/* <Paper p="md" shadow="md" withBorder>
          <Text>Tarea de prueba 1</Text>
        </Paper>
        <Paper p="md" shadow="md" withBorder>
          <Text>Tarea de prueba 1</Text>
        </Paper>
        <Paper p="md" shadow="md" withBorder>
          <Text>Tarea de prueba 1</Text>
        </Paper> */}
      </Container>
    </>
  );
}

export default Tareas;
