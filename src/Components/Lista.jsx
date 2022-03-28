import React from "react";
import ItemLista from "./ItemLista";
import { ActionIcon, Group, Container } from "@mantine/core";
import { Trash } from "tabler-icons-react";

function Lista(props) {
  const { listado } = props;
  //console.log(listado);
  let contador = 0;

  const borrarTarea = () => {
    console.log();
  }

  return (
    <>
      {listado.map((item) => (
        <>
          <Container
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            
          >
            <ItemLista key={contador} valor={item} llamaPadre={borrarTarea()} />
            <ActionIcon variant="hover" color="red" radius="md">
              <Trash size={18} />
            </ActionIcon>
          </Container>
        </>
      ))}
    </>
  );
}

export default Lista;
