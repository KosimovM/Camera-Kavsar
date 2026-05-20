import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const verifyOtpApi = createAsyncThunk(
  'Account/verify-otp',
  async (data: { phoneNumber: string; otpCode: string }) => {
    try {
      const response = await axios.post(`${API_URL}/Account/verify-otp`, data)
      localStorage.setItem('token', response.data.data)
      return response.data
    } catch (error) {
      console.log(error)
    }
  },
)

export const sendOtpApi = createAsyncThunk(
  'Account/send-otp',
  async (data: { phoneNumber: string }) => {
    try {
      const response = await axios.post(`${API_URL}/Account/send-otp`, data)
      localStorage.setItem('phoneNumber', data.phoneNumber)
      return response.data
    } catch (error) {
      console.log(error)
    }
  },
)


export const resetPasswordApi = createAsyncThunk(
  'Account/reset-password',
  async (data: {
    phoneOrUserName: string
    token: string
    newPassword: string
    confirmNewPassword: string
  }) => {
    try {
      const response = await axios.post(`${API_URL}/Account/reset-password`, data)
      return response.data
    } catch (error) {
      console.log(error)
    }
  },
)
