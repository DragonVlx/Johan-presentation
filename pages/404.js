import NextLink from "next/link"
import {
  Box,
  Heading,
  Container,
  Divider,
  Button,
  Text
} from "@chakra-ui/react"

const PageError = () => {
  return (
    <Container>
      <Heading as="h1">Not Found</Heading>
      <Text>Propably i lost this page, sorry back to main page</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Back to home
          </Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default PageError