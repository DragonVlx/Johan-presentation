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
          Hulu <Badge>2020</Badge>
        </Title>
        <Paragrahp>
          A simple clon of hulu using tecnologies wich HTML, CSS and Javascript is Totally Responsive for mobile users
        </Paragrahp>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://dragonvlx.github.io/Hulu-landPage/">
              https://dragonvlx.github.io/Hulu-landPage/ <ExternalLinkIcon />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>tecnologies</Meta>
            <span>HTML, CSS, JAVASCRIPT</span>
          </ListItem>
        </List>
        <WorkImage src="/images/Hulu.png" alt="HuluProyect" />
        <WorkImage src="/images/HuluMobile.png" alt="HuluProyect" />

      </Container>
    </Layout >
  )
}

export default Work