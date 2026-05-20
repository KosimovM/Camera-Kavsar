import { z } from "zod"

export interface ISendOtpForm {
  phone: string
}

export interface IVerifyOtpForm {
  otpCode: string
}

export const sendOtpSchema = z.object({
  phone: z.string().min(1,"Номер телефона обязателен"),
})

export const verifyOtpSchema = z.object({
  otpCode: z.string().length(4, "Код должен состоять из 4 символов"),
})

export type SendOtpInput = z.infer<typeof sendOtpSchema>
export type VerifyOtpInput = z.infer<typeof verifyOtpSchema>
