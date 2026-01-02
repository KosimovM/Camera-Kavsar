import { useState } from "react"
import { useDispatch } from "react-redux"
import type { AppDispatch } from "../../Store/Store"
import { Create } from "../../Api/Class/Class"

interface AddClassProps {
  open: boolean
  setOpen: (open: boolean) => void
}

interface FormData {
 fullName: string
  childName: string
  phoneNumber: string
  startTime: string
  endTime: string
  centerId: number
  classRoomId: number
}

const AddClass = ({ open, setOpen }: AddClassProps) => {
  const dispatch = useDispatch<AppDispatch>()
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    childName: "",
    phoneNumber: "",
    startTime: "",
    endTime: "",
    centerId: 0,
    classRoomId: 0,
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setLoading(true)
    try {
      await dispatch(
        Create({
          fullName: formData.fullName,
          childName: formData.childName,
          phoneNumber: formData.phoneNumber,
          startTime: formData.startTime,
          endTime: formData.endTime,
          centerId: Number(formData.centerId),
          classRoomId: Number(formData.classRoomId),
        })
      )
      setFormData({
        fullName: "",
        childName: "",
        phoneNumber: "",
        startTime: "",
        endTime: "",
        centerId: 0,
        classRoomId: 0,
      })
      setOpen(false)
    } catch (error) {
      console.error(error)
      alert("Хатогӣ ҳангоми иловаи синф!")
    } finally {
      setLoading(false)
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition"
        >
          ✕
        </button>

        <h3 className="text-xl font-semibold mb-4 text-center">
          Маълумоти нав илова кунед
        </h3>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            name="fullName"
            placeholder="Номи пурра"
            value={formData.fullName}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            name="childName"
            placeholder="Номи кӯдак"
            value={formData.childName}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            name="phoneNumber"
            placeholder="Рақами телефон"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
            required
          />
          <div className="flex gap-2">
            <input
              name="startTime"
              placeholder="Оғоз"
              value={formData.startTime}
              onChange={handleChange}
              className="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              name="endTime"
              placeholder="Анҷом"
              value={formData.endTime}
              onChange={handleChange}
              className="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <input
            name="centerId"
            placeholder="ID марказ"
            value={formData.centerId}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            name="classRoomId"
            placeholder="ID синфхона"
            value={formData.classRoomId}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
            required
          />

          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg transition"
            >
              Бастан
            </button>
            <button
              type="submit"
              disabled={loading}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition disabled:bg-indigo-300"
            >
              {loading ? "Илова мешавад..." : "Илова кардан"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddClass
