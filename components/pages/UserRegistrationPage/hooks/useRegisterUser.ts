import { useForm } from 'react-hook-form'

type TUserRegisterForm = {
  nickname: string
  prefectureId: number
  sexType: '男性' | '女性'
  birthDate: string
}

export const useRegisterUser =()=>{
  const methods = useForm<TUserRegisterForm>()
}
