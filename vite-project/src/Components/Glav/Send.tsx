import { zodResolver } from '@hookform/resolvers/zod'
import { User } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../../Store/Store'
import { sendOtpSchema, type SendOtpInput } from '../../Ent/Send'
import FormInput from './FormInput'
import { sendOtpApi } from '../../Api/Verify'

interface ISendOtpModalProps {
  sendOtpModal: boolean
  setSendOtpModal: React.Dispatch<React.SetStateAction<boolean>>
  onOpenVerify: () => void
}

const SendOtpModal = ({ sendOtpModal, setSendOtpModal, onOpenVerify }: ISendOtpModalProps) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SendOtpInput>({
    resolver: zodResolver(sendOtpSchema),
    defaultValues: {
      phone: '',
    },
  })

  const dispatch: AppDispatch = useDispatch()

  if (!sendOtpModal) return null

  const onSubmit = (data: SendOtpInput) => {
    localStorage.setItem('phoneNumber', data.phone)
    dispatch(sendOtpApi({ phoneNumber: data.phone }))
    reset()
    setSendOtpModal(false)
    onOpenVerify()
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50 p-4">
      <div className="bg-white dark:bg-gray-800 w-full max-w-md rounded-xl shadow-xl p-6 sm:p-8 flex flex-col items-center animate-fadeIn mx-2 sm:mx-0">

        <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
          Введите номер телефона, чтобы получить OTP.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-5">
          <FormInput
            name="phone"
            placeholder="+992(___"
            type="text"
            control={control}
            icon={User}
            error={errors.phone}
          />

          <div className="flex justify-between mt-2">
            <button
              type="button"
              onClick={() => setSendOtpModal(false)}
              className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 font-medium transition"
            >
              Отмена
            </button>
            <button
              type="submit"
              className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-lg hover:bg-gray-900 dark:hover:bg-white/90 font-medium transition"
            >
              Отправить код
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SendOtpModal
