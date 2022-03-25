import React from 'react'
import { Button } from '@mantine/core'

function Boton(props) {
    console.log(props.variante);
  return (
   <Button variant={props.variante}> {props.texto}</Button>
   
  )
}

export default Boton