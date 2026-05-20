import { useState } from 'react'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../../Store/Store'
import { CreateClass } from '../../Api/User/Userapi'
import { PlusCircle, X } from 'lucide-react'

interface AddClassModalProps {
  open: boolean
  setOpen: (open: boolean) => void
}

const AddClassModal = ({ open, setOpen }: AddClassModalProps) => {
  const dispatch: AppDispatch = useDispatch()
  const [formData, setFormData] = useState({
    name: '',
    centerId: '',
    cameraUrl: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.centerId || !formData.cameraUrl) {
      alert('Please fill in all fields')
      return
    }
    setLoading(true)
    try {
      await dispatch(
        CreateClass({
          name: formData.name,
          centerId: Number(formData.centerId),
          cameraUrl: formData.cameraUrl,
        })
      )
      setOpen(false)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0  bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 relative animate-fadeIn">
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition"
        >
          <X size={22} />
        </button>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <PlusCircle className="text-blue-600" />
          Add New Class
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-sm text-gray-600 font-medium">Class Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="e.g. Mathematics 101"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600 font-medium">Center ID</label>
            <input
              type="number"
              name="centerId"
              value={formData.centerId}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="Enter center ID"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600 font-medium">Camera URL</label>
            <input
              type="text"
              name="cameraUrl"
              value={formData.cameraUrl}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="https://..."
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`mt-4 w-full py-2 rounded-lg text-white font-medium transition-all ${
              loading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {loading ? 'Creating...' : 'Create Class'}
          </button>
        </form>
      </div>
    </div>
  )
}
export default AddClassModal
