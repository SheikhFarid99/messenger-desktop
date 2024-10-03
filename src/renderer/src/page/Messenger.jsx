import React from 'react'
import Logo from '../assets/logo.png'
import { BsThreeDots } from 'react-icons/bs'
import { AiOutlineLogout } from 'react-icons/ai'
import { IoIosSearch } from 'react-icons/io'

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
                                <div>
                                    <h2 className='pb-3'>Theme</h2>
                                    <div className='flex flex-col gap-y-2'>
                                        <div className='flex justify-between items-center'>
                                            <h2>Light</h2>
                                            <input type="checkbox" className='toggle toggle-success toggle-xs' />
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <h2>Dark</h2>
                                            <input type="checkbox" className='toggle toggle-success toggle-xs' />
                                        </div>
                                        <div className='flex justify-start items-center gap-x-2 mt-4 cursor-pointer hover:text-red-500'>
                                            <span><AiOutlineLogout /></span>
                                            <h2>Dark</h2>

                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </div>

                    </div>
                    <div className='p-3'>
                        <div className={`w-full relative h-[40px] mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#050505]'}`}>
                            <div className='flex absolute right-0 top-0 justify-center items-center h-full w-[40px]'>
                                <IoIosSearch />
                            </div>
                            <input type="text" placeholder='search' name='search' className={`w-full h-full ${theme === 'dark' ? 'bg-[#1D2231]' : 'text-[#050505] bg-[#F2F2F5]'} outline-none pl-4 pr-[30px] rounded-md`} />
                        </div>
                    </div>
                    <div className='w-full h-[calc(100%-126px)]'>
                        <div className='w-full flex flex-col justify-start items-center h-full overflow-y-auto'>
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 1, 1, 1, 1, 1].map((item, i) => <div key={i} className={`flex px-3 py-2 w-full animate-pulse`}>
                                    <div className='w-[48px] h-[48px] rounded-full overflow-hidden flex justify-center items-center bg-gray-300'>
                                        <svg class="w-[20px] h-[20px] text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                                        </svg>
                                    </div>
                                    <div className='flex w-[calc(100%-48px)] justify-center flex-col pl-2 items-center gap-y-2'>
                                        <div className='h-2.5 bg-gray-200 rounded-full w-full'></div>
                                        <div className='h-2 bg-gray-200 rounded-full w-full'></div>
                                    </div>

                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messenger