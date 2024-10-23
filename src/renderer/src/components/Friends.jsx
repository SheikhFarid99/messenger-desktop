import React from 'react'
import { Link, useLocation } from 'react-router-dom'
const Friends = ({ item, active_friends }) => {
    const { pathname } = useLocation()
    const theme = 'white'
    const userInfo = {
        id: 5,
    }
    return (
        <Link to={'#'} className={`flex px-3 py-2 w-full cursor-pointer ${pathname === '/message/' + item.id ? theme === 'dark' ? 'bg-[#272E48]' : 'bg-[#F5F5F5F5]' : ""}`} >
            <div className='relative w-[48px] h-[48px]'>
                <img src={item.image} alt="image" />
                {
                    active_friends.some(f => f.id === item.id) && <div className='w-[10px] absolute h-[10px] rounded-full right-[1px] bottom-[1px] bg-[#2BE42B]'></div>
                }

            </div>
            <div className='flex w-[calc(100%-48px)] justify-between pl-2 items-center'>
                <div className={`flex flex-col leading-5 ${theme === 'dark' ? 'text-white' : 'text-[#050505]'}`}>
                    <h4>{item.fndInfo?.userName}</h4>
                    <div>
                        {
                            item?.msgInfo && item?.msgInfo.senderId === userInfo.id ? <span className='text-xs font-[300]'>You </span> : <span className={item.msgInfo?.senderId !== userInfo.id && item.msgInfo?.status !== undefined && item.msgInfo?.status !== 'seen' ? 'text-xs font-[700]' : "text-xs font-[400]"}>{item.fndInfo?.userName + " "}</span>
                        }
                        {
                            item.msgInfo && item.msgInfo?.message?.text ? <span className={item.msgInfo?.senderId !== userInfo.id && item?.msgInfo?.status !== undefined && item.msgInfo?.status !== 'seen' ? 'text-xs font-[700]' : 'text-xs font-[400]'}>{item.msgInfo?.message?.text?.slice(0,10)}...</span> : item?.msgInfo && item.msgInfo?.message?.image ? <span className='text-xs'>send a image</span> : <span className='text-xs font-[400]'>connect you</span>
                        }
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Friends