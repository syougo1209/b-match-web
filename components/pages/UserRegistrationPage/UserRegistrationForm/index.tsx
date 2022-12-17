import { FC, useState, ReactNode } from 'react'
import { Container} from '@chakra-ui/react'
import { RegistrationHeader } from '../RegistrationHeader'
import { NickNameStep } from '../NickNameStep'
import { SexTypeForm } from '../SexTypeForm'
import { PrefectureStep } from '../PrefectureStep'
import {BirthDateStep} from '../BirthDateStep'
import { Button} from '@chakra-ui/react'

type step = {
  component: ReactNode
}

const steps: step[] = [
  {
    component: <NickNameStep />
  },
  {
    component: <SexTypeForm />
  },
  {
    component: <PrefectureStep />
  },
  {
    component: <BirthDateStep />
  }
]

export const UserRegistrationForm: FC =()=>{
  const [step, setStep]= useState<number>(0)

  return (
    <>
      <RegistrationHeader step={step} backStep={()=>setStep(step-1)}/>
      <Container maxW='container.sm' mt={20}>
        {steps[step].component}
        <Button w="100%" mt={10} borderRadius="md" bg='teal.300' color="white" onClick={()=>setStep(step+1)}>次へ</Button>
      </Container>
    </>
  )
}
