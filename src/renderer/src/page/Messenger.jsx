import React from 'react'
import Logo from '../assets/logo.png'
import { BsThreeDots } from 'react-icons/bs'

const Messenger = () => {

    const theme = 'white'

    return (
        <div className='w-full h-full'>
            <div className={`w-full h-full flex ${theme === 'dark' ? 'bg-[#222837]' : 'bg-white'} !min-w-[800px]`}>
                <div className={`min-w-[320px] h-full border-r ${theme === 'dark' ? 'border-[#272E48]' : 'border-[#E5E5E5]'} `}>
                    <div className={` h-[50px] w-full flex justify-between items-center p-3 ${theme === 'dark' ? 'text-white' : 'text-[#050505]'}`}>
                        <div className='flex justify-center items-center gap-x-2'>
                            <img className='w-[35px] h-[35px] rounded-full' src={Logo} alt="" />
                            <h2>Sheikh Farid</h2>
                        </div>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className={`w-[35px] cursor-pointer h-[35px] rounded-full flex justify-center items-center text-xl relative  ${theme === 'dark' ? 'hover:bg-[#272E48] text-white' : 'hover:bg-[#F3F3F5] text-[#050505]'}`}>
                                <span><BsThreeDots /></span>
                            </div>
                            <ul tabIndex={0} className={`dropdown-content menu border rounded-box z-[1] w-52 p-3 ${theme === 'dark' ? 'bg-[#222837] text-white border-slate-500' : 'bg-[#F3F3F5] text-[#050505]'}`}>
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messenger