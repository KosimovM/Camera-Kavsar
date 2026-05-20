import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API_URL_IMAGE = import.meta.env.VITE_API_URL_IMAGE
const API_URL = import.meta.env.VITE_API_URL
export const GetStrims = createAsyncThunk('strims/getAll', async () => {
  try {
    const token = localStorage.getItem('token')
    const response = await axios.get(`${API_URL}/Streams/playlist.m3u8`, {
      headers: { Authorization: token ? `Bearer ${token}` : '' },
    })
    return response.data
  } catch (error) {
    console.error(error)
  }
})

export const GetStrim = createAsyncThunk('strims/getOne', async (ClassRoomId: number) => {
  try {
    const token = localStorage.getItem('token')
    const response = await axios.get(`${API_URL_IMAGE}/api/Streams/${ClassRoomId}/playlist.m3u8`, {
      headers: { Authorization: token ? `Bearer ${token}` : '' },
    })
    return response.data
  } catch (error) {
    console.error(error)
  }
})
