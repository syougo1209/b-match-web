import {FC} from 'react'
import { Box, Heading, Text, VStack, Button, Center, Input} from '@chakra-ui/react'

export const NickNameStep: FC =()=>{
  return (
    <Box p={2}>
      <Heading as='h1' size='lg'>ニックネーム</Heading>
      <VStack spacing={1} align="left" mt={2}>
        <Text>8文字以内で入力してください。</Text>
        <Text>ニックネームは後から変更できます。</Text>
      </VStack>
      <Center mt={4}>
        <Input focusBorderColor='teal.200'/>
      </Center>
      <Button mt={12} w="100%" borderRadius="md" bg="teal.300" color="white">次へ</Button>
    </Box>
  )
}
