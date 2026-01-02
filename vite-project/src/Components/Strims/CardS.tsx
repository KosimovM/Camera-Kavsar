import { useState } from 'react'
import { MapPin } from 'lucide-react'
import Video from '../ModalClass/Video'

interface CardSProps {
  id: number
  name: string
  address: string
}

const CardS = ({ id, name, address }: CardSProps) => {
  const [hovered, setHovered] = useState(false)
  const [VOpen, setVOpen] = useState(false)
  const cameraUrl = address

  return (
    <>

      <Video VOpen={VOpen} setVOpen={setVOpen} cameraUrl={cameraUrl} />
      <div
        onClick={() => setVOpen(true)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`bg-white border border-gray-200 rounded-2xl shadow-sm p-5 transition-all duration-200 ${
          hovered ? 'shadow-lg scale-[1.02]' : ''
        }`}
      >
        <div className="flex justify-between items-start mb-3">
          <h1>{id}</h1>
          <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <MapPin size={16} className="text-blue-500" />
          <p className="text-sm">{address}</p>
        </div>
      </div>
    </>
  )
}

export default CardS
