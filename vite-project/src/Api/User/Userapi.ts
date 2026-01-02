import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const GetClass = createAsyncThunk('centrs/GetClass', async () => {
  try {
    const token = localStorage.getItem('token')

    const response = await axios.get(`${API_URL}/ClassRooms`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
      },
    })
    return response.data.data
  } catch (error) {
    console.log(error)
  }
})

export const CreateClass = createAsyncThunk(
  'centrs/CreateClass',
  async (classData: { name: string; centerId: number; cameraUrl: string }) => {
    try {
      const token = localStorage.getItem('token')
      const response = await axios.post(`${API_URL}/ClassRooms`, classData, {
        headers: {
          Authorization: token ? `Bearer ${token}` : '',
          'Content-Type': 'application/json',
        },
      })
      return response.data.data
    } catch (error) {
      console.log(error)
    }
  },
)

export const getUserById = createAsyncThunk('users/getUserById', async (id: string) => {
  try {

    const token = localStorage.getItem('token')
    const response = await axios.get(`${API_URL}/Users/${id}`, {
      headers: {
        Authorization: token  ? `Bearer ${'token'}`: '',
      },
    })
    return response.data.data
  } catch (error) {
    console.log(error)
  }
})

export const DeleteClass = createAsyncThunk('centrs/DeleteClass', async (id: number) => {
  try {
    const token = localStorage.getItem('token')
    await axios.delete(`${API_URL}/ClassRooms/${id}`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
        'Content-Type': 'application/json',
      },
    })
    return id
  } catch (error) {
    console.log(error)
  }
})

export const UpdateClass = createAsyncThunk(
  'centrs/UpdateClass',
  async (classData: { id: number; name: string; centerId: number; cameraUrl: string }) => {
    try {
      const token = localStorage.getItem('token')
      const response = await axios.put(
        `${API_URL}/ClassRooms/${classData.id}`,
        {
          name: classData.name,
          centerId: classData.centerId,
          cameraUrl: classData.cameraUrl,
        },
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : '',
            'Content-Type': 'application/json',
          },
        },
      )
      return response.data.data
    } catch (error) {
      console.log(error)
    }
  },
)
