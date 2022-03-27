import React from "react";
import ItemLista from "./ItemLista";

function Lista(props) {
  const { listado } = props;
  console.log(listado);

  return (
    <>
      {listado.map((item) => (
        <ItemLista valor={item} />
      ))}
    </>
  );
}

export default Lista;
