import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const GetClassT = createAsyncThunk('centrs/GetClass', async () => {
  try {
    const token = localStorage.getItem('token')
    const response = await axios.get(`${API_URL}/Users`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
      },
    })
    return response.data.data
  } catch (error) {
    console.log(error)
  }
})

export const Create = createAsyncThunk(
  'class/Create',
  async (classData: {
    fullName: string
    childName: string
    phoneNumber: string
    startTime: string
    endTime: string
    centerId: number
    classRoomId: number
  }) => {
    try {
      const token = localStorage.getItem('token')
      const response = await axios.post(`${API_URL}/Users`, classData, {
        headers: {
          Authorization: token ? `Bearer ${token}` : '',
        },
      })
      return response.data.data
    } catch (error) {
      console.log(error)
    }
  },
)

export const Update = createAsyncThunk(
  'class/Update',
  async (classData: {
    id: number
    fullName: string
    childName: string
    phoneNumber: string
    startTime: string
    endTime: string
    centerId: number
    classRoomId: number
  }) => {
    try {
      const token = localStorage.getItem('token')
      const response = await axios.put(`${API_URL}/Users/${classData.id}`, classData, {
        headers: {
          Authorization: token ? `Bearer ${token}` : '',
        },
      })
      return response.data.data
    } catch (error) {
      console.log(error)
    }
  },
)

export const Delete = createAsyncThunk('class/Delete', async (id: string) => {
  try {
    const token = localStorage.getItem('token')
    const response = await axios.delete(`${API_URL}/Users/${id}`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
      },
    })
    return response.data.data
  } catch (error) {
    console.log(error)
  }
})
