import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import type { IChangePassword } from '../Ent/Pass';
const API_URL = import.meta.env.VITE_API_URL

export const LoginUser = createAsyncThunk(
  'auth/loginUser',
  async (data: { phoneOrUserName: string; password: string }) => {
    try {
      const response = await axios.post(`${API_URL}/Account/login`, data)
      const token = response.data.data
      localStorage.setItem('token', token)
     
      return response.data
    } catch (error) {
      console.log(error)
    }
  },
)



export const changePassword = createAsyncThunk(
  'users/changePassword',
  async (data: IChangePassword,) => {
    try {

    const token = localStorage.getItem('token')
      await axios.post(`${API_URL}/Account/change-password`, data, {
        headers: {
          Authorization:token ? `Bearer ${'token'}`: '',
        },
      })
    } catch (error) {
      console.error('Ошибка при изменении пароля:', error)
    }
  },
)



export const LogoutUser = createAsyncThunk('auth/logoutUser', async () => {
  try {
    localStorage.removeItem('token')
  }
  catch (error) {
    console.log(error)
  }
})
