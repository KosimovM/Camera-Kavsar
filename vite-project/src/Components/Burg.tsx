import { LogOut, User, Globe } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../Store/Store'
import { LogoutUser } from '../Api/Loginapi'
import { Link, useNavigate } from 'react-router'

interface BurgProps {
  BurgOpen: boolean
  setBurgOpen: (open: boolean) => void
}

const Burg = ({ BurgOpen, setBurgOpen }: BurgProps) => {
  const [language, setLanguage] = useState('English')
  const menuRef = useRef<HTMLDivElement | null>(null)
  const dispatch: AppDispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setBurgOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [setBurgOpen])

  if (!BurgOpen) return null

  const handleLogout = () => {
    dispatch(LogoutUser())
    navigate('/')
    setBurgOpen(false)
  }

  return (
    <div
      ref={menuRef}
      className="absolute right-6 top-16 w-72 bg-white rounded-2xl shadow-lg border p-4 z-50 animate-fade-in"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white text-lg">
          U
        </div>
        <div>
          <p className="font-semibold text-gray-800 text-sm">Your Profile</p>
          <p className="text-gray-500 text-xs">View and Edit</p>
        </div>
      </div>

      <hr className="mb-3" />

      <div className="flex items-center justify-between border rounded-lg px-2 py-1 mb-3">
        <div className="flex items-center gap-2 text-gray-700">
          <Globe size={16} />
          <span className="text-sm">{language}</span>
        </div>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="text-sm outline-none bg-transparent"
        >
          <option>English</option>
          <option>Tajik</option>
          <option>Russian</option>
        </select>
      </div>

      <div className="flex flex-col space-y-2">
        <Link to={''} className="flex items-center gap-2 px-2 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition">
          <User size={18} />
          <span>Profile</span>
        </Link>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-2 py-2 text-red-600 hover:bg-gray-100 rounded-lg transition"
        >
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  )
}

export default Burg
