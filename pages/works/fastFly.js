import { Container, Badge, List, Link, ListItem } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../componets/layouts/workdetails"
import Paragrahp from "../../componets/layouts/paragrahp"
import Layout from "../../componets/layouts/article"

const Work = () => {
  return (
    <Layout title="Hulu">
      <Container>
        <Title>
          Fastfly <Badge>2020</Badge>
        </Title>
        <Paragrahp>
          A minimal website create with Framework css Materialize, totally responsive for mobile users, and small animations
        </Paragrahp>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://dragonvlx.github.io/Materialize-Proyect/">
              https://dragonvlx.github.io/Materialize-Proyect/ <ExternalLinkIcon />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>tecnologies</Meta>
            <span>HTML, CSS, JAVASCRIPT, Materialize</span>
          </ListItem>
        </List>
        <WorkImage src="/images/Fastfly.png" alt="Fastfly" />
        <WorkImage src="/images/Fastfy2.png" alt="Fastfly" />

      </Container>
    </Layout >
  )
}

export default Work