// components/LayoutWithNavbar.jsx
import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'

export const LayoutWithNavbar = () => (
  <>
    <Navbar />
    <Outlet />
  </>
)
