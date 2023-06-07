"use client"

import React from 'react'
import Link from 'next/link'
import {Button} from "@mui/material";

const NavbarRight = () => {
    return (<div className={`flex`}>
        <Link href="/register">
            <button
                className="mr-3 flex-shrink-0 rounded border border-blue-600 px-4 py-2 text-blue-600 transition duration-300 ease-in-out text-md hover:bg-blue-700 hover:text-white focus:outline-none sm:mt-0 sm:px-8">
                Register
            </button>
        </Link>
        <Link href="/sign-in">
            <button
                className="flex-shrink-0 rounded border-0 bg-blue-600 px-4 py-2 text-white transition duration-300 ease-in-out text-md hover:bg-blue-700 focus:outline-none sm:mt-0 sm:px-8">
                Sign In
            </button>
        </Link>
    </div>)
}

export default NavbarRight