import React from 'react'
import icon from '../../assets/logo.png'
import { FaMinus } from 'react-icons/fa'
import { BiSquare } from 'react-icons/bi'
import { IoMdClose } from 'react-icons/io'
const Header = () => {

    const close = () => {
        if (window.electron.ipcRenderer) {
            window.electron.ipcRenderer.send('close')
        }
    }

    const minimize = ()=>{
        if (window.electron.ipcRenderer) {
            window.electron.ipcRenderer.send('minimize')
        }
    }
    const maximize = ()=>{
        if (window.electron.ipcRenderer) {
            window.electron.ipcRenderer.send('maximize')
        }
    }

    return (
        <div id='app-header' className='min-w-[800px] h-[40px] bg-[#624c88]'>
            <div className='w-full flex justify-between items-center h-full'>
                <div className='flex justify-center items-center gap-x-2 h-full pl-3'>
                    <img src={icon} className='w-[25px] h-[25px]' alt="icon" />
                    <h2 className='text-white font-semibold text-sm'>Messenger</h2>
                </div>
                <div id='setting' className='flex h-full'>
                    <div onClick={minimize} className='w-[40px] h-full hover:bg-slate-700 cursor-pointer text-white transition-all flex justify-center items-center'>
                        <span> <FaMinus /></span>
                    </div>
                    <div  onClick={maximize} className='w-[40px] h-full hover:bg-slate-700 cursor-pointer text-white transition-all flex justify-center items-center'>
                        <span> <BiSquare /></span>
                    </div>
                    <div onClick={close} className='w-[40px] h-full hover:bg-red-700 cursor-pointer text-white transition-all flex justify-center items-center text-xl'>
                        <span> <IoMdClose /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header