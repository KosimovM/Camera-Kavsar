import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../../Store/Store'
import UCard from '../ModalClass/UCard'
import { useEffect, useState } from 'react'
import { GetClass } from '../../Api/User/Userapi'
import AddClassModal from '../ModalClass/Add'

const Class = () => {
  const { data } = useSelector((state: RootState) => state.uth)
  const dispatch: AppDispatch = useDispatch()
  const [openAdd, setOpenAdd] = useState(false)

  useEffect(() => {
    dispatch(GetClass())
  }, [dispatch])

  return (
    <>
      <AddClassModal open={openAdd} setOpen={setOpenAdd} />

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-2">
        <h1 className="text-2xl font-bold text-gray-800">Manage Classrooms</h1>
        <button
          onClick={() => setOpenAdd(true)}
          className="w-full sm:w-auto px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition"
        >
          + Add Center
        </button>
      </div>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((el) => (
            <UCard
              key={el.id}
              id={el.id}
              name={el.name}
              centerId={el.centerId}
              cameraUrl={el.cameraUrl}
              setClassRoomId={() => {}}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default Class
