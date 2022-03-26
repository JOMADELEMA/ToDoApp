import React, {useState} from "react";
import CambiarTema from "./CambiarTema";
import { Container, Text, Loader, Center, Paper, Blockquote, Modal, Button } from "@mantine/core";

function Home() {

  const [opened, setOpened] = useState(false);
  return (
    <>
      <CambiarTema />

      <h1>Bienvenidos al Home</h1>
      <div>
        <br />

        <Container>
          <Center>
            <Paper shadow="md" p="md" withBorder style={{marginBottom: 20}}>
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
                eum delectus optio. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Architecto natus distinctio aliquam
                consectetur deserunt dolor autem, a voluptates dolorum debitis
                nulla ad veritatis quam dolores et iure esse obcaecati
                perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Iste accusamus laborum sequi at in, aliquid voluptatum
                nostrum nihil earum natus dolores rerum assumenda impedit
                molestiae asperiores ab! Recusandae, minus magnam. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Facilis aspernatur
                dicta, ipsum modi placeat, esse recusandae adipisci est nam et
                iure vitae totam tempore quis illum nobis natus laudantium qui!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                nihil sunt corporis esse voluptas nulla? Totam earum itaque
                perferendis praesentium, explicabo asperiores, architecto iure
                culpa consequatur, nemo ipsa iusto iste!
              </Text>
            </Paper>
          </Center>
          <Center>
          <Paper p="md" >

            <Blockquote cite="- Desmond Tutu">
              My Father always used to say, "Don't raise your voice. Improve your argument."
            </Blockquote>
            <Center>

            <Loader size="xl" color="Green" variant="bars"/>
            </Center>
            </Paper>
          </Center>
        </Container>

        <Container p="md"
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


        <Modal 
        opened={opened}
        onClose={()=> setOpened(false)}
        title="Titulo del Modal!">

          Contenido del Modal
        </Modal>

<Center p="lg">

        <Button onClick={()=>setOpened(true)}>
          Abrir Modal
        </Button>
</Center>
      </div>
    </>
  );
}

export default Home;
