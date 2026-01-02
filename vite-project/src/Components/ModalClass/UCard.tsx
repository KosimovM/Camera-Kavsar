import React, { useState } from 'react'
import EditClassModal from './Edit'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../../Store/Store'
import { DeleteClass } from '../../Api/User/Userapi'

interface UCardProps {
  id: number
  name: string
  centerId: number
  cameraUrl: string
  classRoomId?: number
  setClassRoomId: React.Dispatch<React.SetStateAction<number>>
}

const UCard = ({ id, name, centerId, cameraUrl, setClassRoomId }: UCardProps) => {
  const [openEdit, setOpenEdit] = useState(false)
    const dispatch: AppDispatch = useDispatch()

  return (
    <>
      <EditClassModal
        open={openEdit}
        setOpen={setOpenEdit}
        classData={{ id, name, centerId, cameraUrl }}
      />

      <section className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4 flex flex-col gap-3 border border-gray-100">
        <div
          onClick={() => setClassRoomId(id)}
          className="cursor-pointer flex flex-col items-center"
        >
          <img
            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi-RIn_Kr-_SWVc_UIGEtsA7nPsbAm43i35A&s"}
            className="w-full h-40 object-cover rounded-xl mb-2"
          />
          <h2 className="text-lg font-semibold text-gray-800 text-center">Name{name}</h2>
          <p className="text-sm text-gray-500 text-center">Center ID: {centerId}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 mt-3">
          <button
            onClick={() => setOpenEdit(true)}
            className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Edit
          </button>
          <button onClick={()=>(dispatch(DeleteClass(id)))} className="w-full sm:w-auto px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
            Delete
          </button>
        </div>
      </section>
    </>
  )
}

export default UCard
