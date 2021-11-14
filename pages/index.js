import {
  Container,
  Button,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Icon
} from "@chakra-ui/react"
import { GridItem } from "../componets/layouts/grid"
import NextLink from "next/link"
import SectionAnimation from "../componets/layouts/sectionAnimation"
import Layout from "../componets/layouts/article"
import Paragrahp from "../componets/layouts/paragrahp"
import { ArrowRightIcon } from "@chakra-ui/icons"
import { BiograpySection, BiograpyYear } from "../componets/layouts/Biograpy"
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5"

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box borderRadius="lg"
          mt={3}
          mb={6}
          bg={useColorModeValue("teal.200", "teal.600")}
          p={3} align="center">
          Hi, I&apos;m a Front-End developer
        </Box>

        <Box display={{ md: "flex" }} >
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Johan Velandia
            </Heading>
            <p>Junior Developer (Analyst / Developer / Technician)</p>
          </Box>
          <Box flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center">
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/me.jpg"
              alt="profile-img" />
          </Box>
        </Box>

        <SectionAnimation delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragrahp>
            Hello my name is Johan, I am a software engineering student in Colombia, in my free time I study software development and front-end development with different technologies. I also have knowledge giving informatics solutions as technical support or information analyst creating software models and guiding projects until its production stage, if you think my skills are appropriate for your team do not hesitate to contact me (づ｡◕‿‿◕｡)づ. <Link
              color={useColorModeValue("#06564c", "teal.300")}
              href="https://www.linkedin.com/in/johan-velandia-388827204/" >
              Linkendin
            </Link>
          </Paragrahp>

          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button
                rightIcon={<ArrowRightIcon />}
                colorScheme="teal">
                My Works
              </Button>
            </NextLink>
          </Box>
        </SectionAnimation >

        <SectionAnimation delay={0.2}>
          <Heading as="h3" variant="section-title">
            Biography
          </Heading>
          <BiograpySection>
            <BiograpyYear>2000</BiograpyYear>
            Born in Bogota, Colombia
          </BiograpySection>
          <BiograpySection>
            <BiograpyYear>2019</BiograpyYear>
            Finished my technological studies at SENA in Colombia as an information systems analyst and designer.
          </BiograpySection>

          <BiograpySection>
            <BiograpyYear>2020</BiograpyYear>
            Worked as technical support in indra company, developing different strategies and small process improvements.
          </BiograpySection>
          <BiograpySection>
            <BiograpyYear>2021</BiograpyYear>
            study and work independently in front-end programming, I entered the university and got a temporary scholarship for good performance :D
          </BiograpySection>
          <BiograpySection>
            <BiograpyYear>2021</BiograpyYear>
            I joined as a systems analysis and development leader in the company Integra.
          </BiograpySection>
        </SectionAnimation>

        <SectionAnimation delay={0.3}>
          <Heading as="h3" variant="section-title">
            I'm Intersed in
          </Heading>
          <Paragrahp>
            Videogames, Tecnology and Become a better developer
          </Paragrahp>
        </SectionAnimation>
        <SectionAnimation delay={0.3}>
          <Heading as="h3" variant="section-title">
            Contact
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/DragonVlx" target="_blank">
                <Button variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} w={8} h={8} />}>@DragonVlx</Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.linkedin.com/in/johan-velandia-388827204/" target="_blank">
                <Button variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} w={8} h={8} />}>@Johan Velandia</Button>
              </Link>
            </ListItem>
          </List>
        </SectionAnimation>
      </Container >
    </Layout>
  )
}

export default Page
