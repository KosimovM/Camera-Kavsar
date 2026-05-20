import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetClassT } from '../../Api/Class/Class'
import type { AppDispatch, RootState } from '../../Store/Store'
import CardT from '../ModalUser/CardT'
import AddClass from '../ModalUser/AddUser'

const User = () => {
  const dispatch: AppDispatch = useDispatch()
  const { data } = useSelector((state: RootState) => state.class)
  const [openAdd, setOpenAdd] = useState(false)

  useEffect(() => {
    dispatch(GetClassT())
  }, [dispatch])

  return (
    <>
      <section className="p-4 sm:p-6 lg:p-8">

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
          <h1 className="text-2xl sm:text-3xl text-gray-800 font-bold">
            Hello Users
          </h1>

          <button
            onClick={() => setOpenAdd(true)}
            className="border border-blue-700 bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition shadow"
          >
            ➕ Add
          </button>
        </div>

        <div className="overflow-x-auto rounded-lg shadow-md">
          <table className="min-w-full divide">
            <thead className="bg-gray-100 ">
              <tr>
                <th className="px-4 py-2 text-left">FullName</th>
                <th className="px-4 py-2 text-left">ChildName</th>
                <th className="px-4 py-2 text-left">PhoneNumber</th>
                <th className="px-4 py-2 text-left">StartTime</th>
                <th className="px-4 py-2 text-left">EndTime</th>
                <th className="px-4 py-2 text-left">CenterId</th>
                <th className="px-4 py-2 text-left">ClassRoomId</th>
                <th className="px-4 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {data?.map((el) => (
                <CardT
                  id={Number(el.id)}
                  key={el.id}
                  fullName={el.fullName}
                  childName={el.childName}
                  phoneNumber={el.phoneNumber}
                  startTime={el.startTime}
                  endTime={el.endTime}
                  centerId={el.centerId}
                  classRoomId={el.classRoomId}
                />
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {openAdd && <AddClass open={openAdd} setOpen={setOpenAdd} />}
    </>
  )
}

export default User
