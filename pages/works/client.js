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
          Portfolio for a client <Badge>2021</Badge>
        </Title>
        <Paragrahp>
          Portfolio for a client create with basic tecnologies is totally responsive in mobile
        </Paragrahp>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://dragonvlx.github.io/front-end-challenge/">
              https://dragonvlx.github.io/front-end-challenge/ <ExternalLinkIcon />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>tecnologies</Meta>
            <span>HTML, CSS, JAVASCRIPT</span>
          </ListItem>
        </List>
        <WorkImage src="/images/client.png" alt="client" />
        <WorkImage src="/images/clientMobile.png" alt="client" />

      </Container>
    </Layout >
  )
}

export default Work