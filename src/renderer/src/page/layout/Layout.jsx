import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='w-screen h-screen'>
            <Header />
            <div className='w-[100vw] h-[calc(100vh-40px)]'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout