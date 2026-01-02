import { useState } from 'react'

interface VideoModalProps {
  cameraUrl: string
  title?: string
}

const VideoModal = ({ cameraUrl }: VideoModalProps) => {
  const [isOpen, setIsOpen] = useState(true)
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-4 relative">
        <div className="flex justify-between items-center mb-2">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="text-white bg-red-600 px-3 py-1 rounded hover:bg-red-700 transition"
            aria-label="Close video"
          >
            X
          </button>
        </div>
        <video
          controls
          className="w-full h-auto rounded"
          src={VITE_API_URL_IMAGE}
        />
      </div>
    </div>
  )
}

export default VideoModal
