interface VideoProps {
  VOpen: boolean
  setVOpen: (value: boolean) => void
  cameraUrl: string
}

const Video = ({ VOpen, setVOpen, cameraUrl }: VideoProps) => {
  if (!VOpen) return null

  return (
    <div className="fixed inset-0  bg-opacity-60 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-11/12 max-w-3xl overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b bg-gray-50">
          <h2 className="text-lg font-semibold text-gray-800">🎥 Video Stream</h2>
          <button
            onClick={() => setVOpen(false)}
            className="text-gray-500 hover:text-gray-800 text-2xl leading-none"
            aria-label="Close video modal"
          >
            &times;
          </button>
        </div>

        <div className="p-4 bg-black flex justify-center">
          <video
            src={import.meta.env.VITE_API_URL_IMAGE + cameraUrl}
            controls
            className="w-full max-h-[150vh] rounded-md border border-gray-700"
          />
        </div>
      </div>
    </div>
  )
}

export default Video
