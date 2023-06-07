import React from 'react'
import Link from 'next/link'

const NavbarLeft = () => {
    return (<div className={`flex justify-center items-center`}>
        <Link href="/">
            <h1 className={`font-mono text-xl sm:text-2xl font-bold text-blue-600 cursor-pointer`}>Srijcon POC</h1>
        </Link>
    </div>)
}

export default NavbarLeft