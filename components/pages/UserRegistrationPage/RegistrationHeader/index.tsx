import {
  Box,
  Flex,
  Container,
  Heading,
} from '@chakra-ui/react'
import { FC } from 'react'
import { ArrowBackIcon } from '@chakra-ui/icons'

type TRegistrationHeaderProps = {
  step: number
  backStep: ()=>void
}

export const RegistrationHeader: FC<TRegistrationHeaderProps> = (props) => {
  const {step, backStep } = props
  return (
    <Box>
      <Container maxW="container.sm">
        {step == 0 || <ArrowBackIcon w={10} h={7} mt={4} onClick={backStep}/>}
      </Container>
    </Box>
  )
}
