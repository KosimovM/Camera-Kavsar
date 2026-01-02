import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../../Store/Store'
import Card from '../Modals/Card'
import { useEffect, useState } from 'react'
import { GetCentr } from '../../Api/Centrs/Centrsapi'
import { Add } from '../Modals/Add'

interface Center {
  id: number
  name: string
  address: string
}

const Centers = () => {
  const dispatch: AppDispatch = useDispatch()
  const [openAdd, setOpenAdd] = useState(false)
  const { data } = useSelector((state: RootState) => state.auth)

  useEffect(() => {
    dispatch(GetCentr())
  }, [dispatch])

  return (
    <>
      <div className="min-h-screen bg-gray-50 px-6 py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-0">Manage Centers</h1>
          <button
            onClick={() => setOpenAdd(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            + Add Center
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((el: Center) => (
            <Card key={el.id} id={el.id} name={el.name} address={el.address} />
          ))}
        </div>
      </div>

      <Add open={openAdd} setOpen={setOpenAdd} />
    </>
  )
}

export default Centers
