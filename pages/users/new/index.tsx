import type { NextPage } from 'next'
import { CustomHead } from 'components/layouts/CustomHead'
import { Container } from '@chakra-ui/react'
import { UserRegistrationForm } from 'components/pages/UserRegistrationPage/UserRegistrationForm'
import { NickNameStep } from 'components/pages/UserRegistrationPage/NickNameStep'
import { RegistrationHeader } from 'components/pages/UserRegistrationPage/RegistrationHeader'
const UserRegistrationPage: NextPage = () => {
  return (
    <div>
      <CustomHead />
      <RegistrationHeader />
      <Container maxW='container.sm' mt={20}>
        <NickNameStep />
      </Container>
    </div>
  )
}

export default UserRegistrationPage
