import React from 'react'
import NavbarLeft from '@/app/components/navbar/NavbarLeft/NavbarLeft'
import NavbarRight from '@/app/components/navbar/NavbarRight/NavbarRight'

const Navbar = () => {
    return (
        <nav
            className={`flex justify-between w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between sticky top-0 z-10 `}>
            <NavbarLeft/>
            <NavbarRight/>
        </nav>)
}

export default Navbar