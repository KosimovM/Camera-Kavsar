import { Outlet, useLocation, Link, useNavigate } from 'react-router-dom'
import React, { useMemo, useState } from 'react'
import { LayoutDashboard, Building2, Users, Video, Home } from 'lucide-react'
import image from '../assets/image.png'
import { jwtDecode } from 'jwt-decode'
import type { CustomJwtPayload } from './Pages/Strims'
import Burg from './Burg'

interface NavItemProps {
  label: string
  to: string
  icon: React.ReactNode
  active: boolean
}

const NavItem: React.FC<NavItemProps> = ({ label, to, icon, active }) => (
  <Link
    to={to}
    className={`flex items-center gap-4 px-6 py-3 transition-all duration-200 rounded-lg ${
      active
        ? 'bg-white/20 text-white font-semibold'
        : 'text-white/70 hover:bg-white/10 hover:text-white'
    }`}
  >
    <div className="w-10 h-10 flex items-center justify-center">{icon}</div>
    <span className="text-lg">{label}</span>
  </Link>
)

const Layout: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const hideLayout = location.pathname === '/login' || location.pathname === '/'
  const token = localStorage.getItem('token')
  const [BurgOpen, setBurgOpen] = useState(false)

  const info = useMemo(() => {
    if (!token || token === 'undefined' || token === 'null') {
      return null
    }

    try {
      return jwtDecode<CustomJwtPayload>(token)
    } catch (err) {
      console.error('Invalid token:', err)
      localStorage.removeItem('token')
      navigate('/login')
      return null
    }
  }, [token, navigate])

  const role = info?.role?.toLowerCase?.() ?? ''

  if (hideLayout) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Outlet />
      </div>
    )
  }

  const navItems = [
    { label: 'Overview', to: '/dashbord', icon: <LayoutDashboard size={20} /> },
    { label: 'Centers', to: '/center', icon: <Building2 size={20} /> },
    { label: 'Users', to: '/user', icon: <Users size={20} /> },
    {
      label: 'Classrooms',
      to: '/class',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
          />
        </svg>
      ),
    },
    { label: 'Streams', to: '/strims', icon: <Video size={20} /> },
    { label: 'About', to: '/about', icon: <Home size={20} /> },
  ]

  return (
    <>
      <div className="flex min-h-screen bg-gray-50">
        <aside className="hidden md:flex w-64 bg-black text-white flex-col">
          <div className="px-6 py-8 border-b border-white/10 text-center">
            <img src={image} alt="Kavsar Kamera" className="w-24 h-24 mx-auto rounded-full" />
            <h1 className="mt-4 text-2xl font-bold">Kavsar Kamera</h1>
          </div>

          <nav className="flex-1 mt-6 overflow-auto px-2 space-y-2">
            {navItems.map((item) => (
              <div
                key={item.to}
                className={`${
                  role === 'user' &&
                  (item.to === '/center' || item.to === '/class' || item.to === '/dashbord')
                    ? 'hidden'
                    : ''
                }`}
              >
                <NavItem
                  label={item.label}
                  to={item.to}
                  icon={item.icon}
                  active={location.pathname === item.to}
                />
              </div>
            ))}
          </nav>

          <footer className="px-6 py-4 border-t border-white/10 text-center text-xs text-white/60">
            ©  ЧДММ “Каскар Академия”. Ҳамаи ҳуқуқҳо ҳифз шудаанд
          </footer>
        </aside>

        <div className="flex-1 flex flex-col">
          <header className="h-16 bg-white flex items-center justify-between px-6 border-b shadow-sm">
            <div className="text-xl font-semibold text-gray-800">Welcome to Dashboard</div>
            <button
              onClick={() => setBurgOpen(true)}
              className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-medium"
            >
              SA
            </button>
          </header>

          <main className="flex-1 p-6 overflow-auto mb-20 md:mb-0">
            <Outlet />
          </main>
        </div>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-black text-amber-100 border-t shadow-md md:hidden flex justify-around py-2 z-50">
        <Link
          to="/dashbord"
          className={`flex flex-col items-center ${
            location.pathname === '/dashbord' ? 'text-white' : ''
          }`}
        >
          <LayoutDashboard size={20} />
        </Link>
        <Link
          to="/center"
          className={`flex flex-col items-center ${
            location.pathname === '/center' ? 'text-white' : ''
          }`}
        >
          <Building2 size={20} />
        </Link>
        <Link
          to="/class"
          className={`flex flex-col items-center ${
            location.pathname === '/class' ? 'text-white' : ''
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438..." />
          </svg>
        </Link>
        <Link
          to="/user"
          className={`flex flex-col items-center ${
            location.pathname === '/user' ? 'text-white' : ''
          }`}
        >
          <Users size={20} />
        </Link>
        <Link
          to="/strims"
          className={`flex flex-col items-center ${
            location.pathname === '/strims' ? 'text-white' : ''
          }`}
        >
          <Video size={20} />
        </Link>
      </nav>

      <Burg BurgOpen={BurgOpen} setBurgOpen={setBurgOpen} />
    </>
  )
}

export default Layout
