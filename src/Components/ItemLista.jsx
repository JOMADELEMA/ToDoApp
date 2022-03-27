import React, { useState } from "react";
import { Paper, Group, Text, ActionIcon } from "@mantine/core";
import { Square, SquareCheck, Trash } from "tabler-icons-react";

function ItemLista(props) {
  const [seleccionado, setSeleccionado] = useState(false);

  let {valor} = props;
  console.log(valor)

  function seleccionar() {
    console.log(seleccionado);
    if (!seleccionado) {
      setSeleccionado("false");
    }
  }

  return (
    <>
      <Paper
        style={{
          display: "flex",
          justifyContent: "space-between",
          userSelect: "none",
        }}
        withBorder
        p="sm"
        shadow="sm"
        sx={(theme) => ({
          "&:hover": {
            backgroundColor: theme.colors.gray[1],
          },
        })}
      >
        <Group onClick={() => seleccionar()}>
          {seleccionado ? <SquareCheck size={25} /> : <Square size={25} />}

          {seleccionado ? (
            <Text
              size="lg"
              color="dimmed"
              style={{ textDecoration: "line-through" }}
            >
              {valor}
            </Text>
          ) : (
            <Text size="lg" color="dimmed">
              {valor}
            </Text>
          )}
        </Group>
        <ActionIcon variant="hover" color="red" radius="md">
          <Trash size={18} />
        </ActionIcon>
      </Paper>
    </>
  );
}

export default ItemLista;
