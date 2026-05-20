import { Edit2 } from 'lucide-react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Delete } from '../../Api/Class/Class'
import type { AppDispatch } from '../../Store/Store'
import EditUser from './EditUser'

interface CardProps {
  id: number
  fullName: string
  childName: string
  phoneNumber: string
  startTime: string
  endTime: string
  centerId: number
  classRoomId: number
}

const CardT = ({
  id,
  fullName,
  childName,
  phoneNumber,
  startTime,
  endTime,
  centerId,
  classRoomId,
}: CardProps) => {
  const dispatch = useDispatch<AppDispatch>()
  const [editModalOpen, setEditModalOpen] = useState(false)

  return (
    <>
      <EditUser
        open={editModalOpen}
        setOpen={setEditModalOpen}
        user={{ id, fullName, childName, phoneNumber, startTime, endTime, centerId, classRoomId }}
      />
      <tr className="hidden md:table-row">
        <td className="px-4 py-2">{fullName}</td>
        <td className="px-4 py-2">{childName}</td>
        <td className="px-4 py-2">{phoneNumber}</td>
        <td className="px-4 py-2">{startTime}</td>
        <td className="px-4 py-2">{endTime}</td>
        <td className="px-4 py-2">{centerId}</td>
        <td className="px-4 py-2">{classRoomId}</td>
        <td className="px-4 py-2">
          <div className="flex gap-2 justify-center">
            <button
              className="bg-green-700 text-white px-3 py-1 rounded-lg flex items-center gap-1  transition shadow"
              onClick={() => setEditModalOpen(true)}
            >
              <Edit2 className="w-4 h-4" /> Edit
            </button>
            <button
              onClick={() => {
                dispatch(Delete(String(id)))
              }}
              className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition shadow"
            >
              Delete
            </button>
          </div>
        </td>
      </tr>

      <div className="md:hidden bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-4 text-gray-800 dark:text-gray-100">
        <div className="flex justify-between items-start mb-2">
          <h2 className="font-semibold">{fullName}</h2>
          <div className="flex gap-2">
            <button
              className="bg-yellow-500 text-white px-3 py-1 rounded-lg flex items-center gap-1 hover:bg-yellow-600 transition shadow text-sm"
              onClick={() => setEditModalOpen(true)}
            >
              <Edit2 className="w-4 h-4" /> Edit
            </button>
            <button
              onClick={() => {
                dispatch(Delete(String(id)))
              }}
              className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition shadow text-sm"
            >
              Delete
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <strong>ChildName:</strong> {childName}
          </div>
          <div>
            <strong>Phone:</strong> {phoneNumber}
          </div>
          <div>
            <strong>Start:</strong> {startTime}
          </div>
          <div>
            <strong>End:</strong> {endTime}
          </div>
          <div>
            <strong>CenterId:</strong> {centerId}
          </div>
          <div>
            <strong>ClassRoomId:</strong> {classRoomId}
          </div>
        </div>
      </div>
    </>
  )
}

export default CardT
