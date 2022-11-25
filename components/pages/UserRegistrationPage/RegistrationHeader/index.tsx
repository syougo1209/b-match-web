import {
  Box,
  Flex,
  Container,
  Heading,
} from '@chakra-ui/react'
import { FC } from 'react'
import { ArrowBackIcon } from '@chakra-ui/icons'

export const RegistrationHeader: FC = () => {
  return (
    <Box>
      <Container maxW="container.sm">
        <ArrowBackIcon w={10} h={7} mt={4}/>
      </Container>
    </Box>
  )
}
