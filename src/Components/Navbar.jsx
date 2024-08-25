import React, { useState } from 'react'
import { FaLeaf } from 'react-icons/fa'
import { PiShoppingCart } from 'react-icons/pi'
import { MdOutlineMenu } from 'react-icons/md'
import ResponsiveMenu from './ResponsiveMenu'
const Navbar = () => {
  const [open, setOpen] = useState(false)

  const navlinks = [
    {
      id: 1,
      title: 'Home',
      link: '/'
    },
    {
      id: 2,
      title: 'About',
      link: '/'
    },
    {
      id: 3,
      title: 'Service',
      link: '/'
    },
    {
      id: 4,
      title: 'Contact',
      link: '/'
    },
  ]
  return (

    <nav>
      <div className="container py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl flex gap-2 uppercase font-bold md:mt-4">
          <p className='text-gray-300'>Msn</p>
         
        </div>
        {/* Links */}
        <div className='hidden md:block'>
          <ul className=' flex gap-4'>
            {
              navlinks.map((link) => (

                <li className='flex  hover:text-orange-500 hover:shadow-orange-500 text-xl '>{link.title}</li>
              ))}
         

          </ul>
        </div>
        {/* hamburger menu */}
        <div className='md:hidden'>
          <MdOutlineMenu onClick={() => setOpen(!open)} className='text-3xl' />
        </div>


      </div>
      <ResponsiveMenu open={open} />
    </nav>

  )
}

export default Navbar

