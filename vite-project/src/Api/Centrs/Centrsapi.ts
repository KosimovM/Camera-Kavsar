import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const GetCentr = createAsyncThunk('centrs/getCentr', async () => {
  try {
    const token = localStorage.getItem('token')
    const response = await axios.get(`${API_URL}/Centers`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
        'Content-Type': 'application/json',
      },
    })
    return response.data.data
  } catch (error) {
    console.error(error)
    console.log(error)
  }
})

export const CreateCentr = createAsyncThunk(
  'centrs/createCentr',
  async (centerData: { name: string; address: string }) => {
    try {
      const token = localStorage.getItem('token')
      const response = await axios.post(`${API_URL}/Centers`, centerData, {
        headers: {
          Authorization: token ? `Bearer ${token}` : '',
          'Content-Type': 'application/json',
        },
      })
      return response.data.data
    } catch (error) {
      console.error(error)
      console.log(error)
    }
  },
)

export const UpdateCentr = createAsyncThunk(
  'centrs/updateCentr',
  async (centerData: { id: number; name: string; address: string }, ) => {
    try {
      const token = localStorage.getItem('token')
      const response = await axios.put(
        `${API_URL}/Centers/${centerData.id}`,
        { name: centerData.name, address: centerData.address },
        {headers: {
            Authorization: token ? `Bearer ${token}` : '',
            'Content-Type': 'application/json',
          },
        },
      )
      return response.data.data
    }
    catch (error) {
      console.error(error)
    }
  },
)


export const DeleteCentr = createAsyncThunk(
  'centrs/deleteCentr',
  async (id: number,) => {
    try {
      const token = localStorage.getItem('token')
      const response = await axios.delete(`${API_URL}/Centers/${id}`, {
        headers: {
          Authorization: token ? `Bearer ${token}` : '',
          'Content-Type': 'application/json',
        },
      })
      return response.data.data
    } catch (error) {
      console.error(error)
    }
  },)
