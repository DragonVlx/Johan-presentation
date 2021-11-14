import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react"
import SectionAnimation from "../componets/layouts/sectionAnimation"
import { WorkGridItem } from "../componets/layouts/grid"
import thumbHulu from "../public/images/Hulu.png"
import fastFly from "../public/images/FastFly.png"
import Client from "../public/images/client.png"
import Layout from "../componets/layouts/article"

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <SectionAnimation>
            <WorkGridItem
              id="huluClon"
              title="huluClon"
              thumbnail={thumbHulu}>
              A simple clon for Hulu website using tecnoligies with HTML CSS and JavaScript
            </WorkGridItem>
          </SectionAnimation>
          <SectionAnimation>
            <WorkGridItem
              id="fastFly"
              title="fastFly"
              thumbnail={fastFly}>
              Page created with materialize framework
            </WorkGridItem>
          </SectionAnimation>
          <SectionAnimation>
            <WorkGridItem
              id="client"
              title="page-client"
              thumbnail={Client}>
              A page created for a client, in collaboration with a graphic designer
            </WorkGridItem>
          </SectionAnimation>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works