import { FC, ReactNode} from 'react'
import { Box, Heading, Text, VStack, Button, useRadioGroup, useRadio,  RadioProps, Flex} from '@chakra-ui/react'
import { sexTypes } from 'types/SexType'

export const SexTypeForm: FC =()=>{
  const { getRootProps, getRadioProps } = useRadioGroup()
  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box p={2}>
      <Heading as='h1' size='lg'>性別</Heading>
      <Text mt={2}>性別は登録後に変更できません。</Text>
      <VStack spacing={4}>
        <Flex>
          {sexTypes.map((value) => {
            const radio = getRadioProps({value})
            return (

            )
          })}
        </Flex>
      </VStack>
    </Box>
  )
}

type TSexTypeRadio = {
  children: ReactNode
} & RadioProps

const SexTypeRadio: FC<TSexTypeRadio> = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as='label'>
      <input {...input} />
      <Box
        {...checkbox}
        cursor='pointer'
        borderWidth='1px'
        borderRadius='md'
        boxShadow='md'
        _checked={{
          bg: 'teal.600',
          color: 'white',
          borderColor: 'teal.600',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  )
}
