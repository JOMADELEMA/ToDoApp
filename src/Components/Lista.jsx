import React from "react";
import ItemLista from "./ItemLista";
import { ActionIcon, Group, Container } from "@mantine/core";
import { Trash } from "tabler-icons-react";

function Lista(props) {
  const { listado } = props;
  //console.log(listado);
  let contador = 0;

  const funcionBorrar = () => {
    console.log("ohla desde la funcion")
  };

  return (
    <>
      {listado.map((item) => (
        <Container
        key={contador++}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <ItemLista valor={item} llave={contador}/>
          <ActionIcon variant="hover" color="red" radius="md" onClick={()=>funcionBorrar()}>
            <Trash size={18} />
          </ActionIcon>
        </Container>
      ))}
    </>
  );
}

export default Lista;
