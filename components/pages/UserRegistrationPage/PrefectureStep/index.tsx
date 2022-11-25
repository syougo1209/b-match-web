import {FC} from 'react'
import { Box, Heading, Text, VStack, Button} from '@chakra-ui/react'

export const PrefectureStep: FC =()=>{
  return (
    <Box p={2}>
      <Heading as='h1' size='lg'>お住まい</Heading>
      <VStack spacing={1} align="left" mt={2}>
        <Text>お住みの都道府県を選択してください。</Text>
      </VStack>
      <VStack spacing={4}>
      </VStack>
    </Box>
  )
}
