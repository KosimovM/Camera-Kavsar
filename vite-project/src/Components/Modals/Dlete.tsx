interface DeleteProps {
  deleteOpen: boolean
  setDeleteOpen: (open: boolean) => void
  id: string 
}

import { useDispatch } from 'react-redux'
import { Delete } from '../../Api/Class/Class'
import type { AppDispatch } from '../../Store/Store'

const DeleteModal = ({ deleteOpen, setDeleteOpen, id }: DeleteProps) => {
  const dispatch: AppDispatch = useDispatch()

  const handleDelete = () => {
    dispatch(Delete(id))
    setDeleteOpen(false)
  }

  return (
    <>
      {deleteOpen && (
        <div
          onClick={() => setDeleteOpen(false)}
          className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50"
        >
          <div
            onClick={e => e.stopPropagation()}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center gap-4"
          >
            <h1 className="text-lg font-semibold">Do you want to delete?</h1>
            <div className="flex gap-4">
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Yes
              </button>
              <button
                onClick={() => setDeleteOpen(false)}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default DeleteModal
