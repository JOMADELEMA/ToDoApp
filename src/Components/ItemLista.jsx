import React, { useState } from "react";
import { Paper, Group, Text, ActionIcon, Button } from "@mantine/core";
import { Square, SquareCheck, Trash } from "tabler-icons-react";

function ItemLista(props) {
  const [seleccionado, setSeleccionado] = useState(false);

  let { valor, llave } = props;
  console.log(llave);

  function seleccionar() {
    //console.log(seleccionado);
    if (seleccionado === true) {
      setSeleccionado(false);
    }
    if (seleccionado === false) {
      setSeleccionado(true);
    }
  }

  return (
    <>
      <Paper
        onClick={() => seleccionar()}
        style={{
          display: "flex",
          justifyContent: "space-between",
          userSelect: "none",
          width: "100%",
        }}
        withBorder
        p="sm"
        m="sm"
        shadow="xs"
        sx={(theme) => ({
          "&:hover": {
            backgroundColor: theme.colors.gray[2],
          },
        })}
      >
        <Group>
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
      </Paper>
    </>
  );
}

export default ItemLista;
