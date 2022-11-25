import {FC} from 'react'
import { Box, Heading, Text, VStack, Button} from '@chakra-ui/react'

export const BirthDateStep: FC =()=>{
  return (
    <Box p={2}>
      <Heading as='h1' size='lg'>生年月日</Heading>
      <VStack spacing={1} align="left" mt={2}>
        <Text>生年月日を入力してください。</Text>
        <Text>生年月日は登録後変更できません。</Text>
      </VStack>
      <VStack spacing={4}>
      </VStack>
    </Box>
  )
}
