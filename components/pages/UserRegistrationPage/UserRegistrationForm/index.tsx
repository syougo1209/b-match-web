import {FC} from 'react'
import { Box, Heading, Text, VStack, Button} from '@chakra-ui/react'

export const UserRegistrationForm: FC =()=>{
  return (
    <Box p={2}>
      <Heading as='h1' size='lg'>性別</Heading>
      <Text mt={2}>性別は登録後に変更できません。</Text>
      <VStack spacing={4}>
      </VStack>
      <Button w="100%" borderRadius="md">次へ</Button>
    </Box>
  )
}
