import { useEffect, useMemo, useState } from 'react'
import { GetClass } from '../../Api/User/Userapi'
import UCard from '../ModalClass/UCard'
import type { AppDispatch, RootState } from '../../Store/Store'
import { useDispatch, useSelector } from 'react-redux'
import { GetStrim, GetStrims } from '../../Api/Strims/Strims'
import Video from '../ModalClass/Video'
import { jwtDecode } from 'jwt-decode'

export interface CustomJwtPayload {
  role?: string
}

const Strims = () => {
  const data = useSelector((state: RootState) => state.uth?.data ?? [])
  const api = useSelector((state: RootState) => state.zod?.api ?? null)
  const dispatch: AppDispatch = useDispatch()
  const [VOpen, setVOpen] = useState(false)
  const [classRoomId, setClassRoomId] = useState(1)

  const token = localStorage.getItem('token')
  const info = useMemo(() => (token ? (jwtDecode(token) as CustomJwtPayload) : null), [token])

  useEffect(() => {
    dispatch(GetClass())

    const role = info?.role?.toLowerCase?.() ?? ''

    if (role === 'admin' || role === 'superadmin') {
      dispatch(GetStrim(classRoomId))
      return
    }

    if (role === 'user') {
      dispatch(GetStrims())
    }
  }, [dispatch, info, classRoomId])

  return (
    <>
      <Video VOpen={VOpen} setVOpen={setVOpen} cameraUrl={api?.data} />
      <section>
        <div onClick={() => setVOpen(true)} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.isArray(data) &&
            data.map((el) => (
              <UCard
                key={el.id}
                setClassRoomId={setClassRoomId}
                classRoomId={classRoomId}
                id={el.id}
                name={el.name}
                centerId={el.centerId}
                cameraUrl={el.cameraUrl}
              />
            ))}
        </div>
      </section>
    </>
  )
}
export default Strims
