"use client"

import { useEffect, useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";

function Hamburger({setOpen}) {
    const burgerRef = useRef();

    useEffect(() => {
        burgerRef.current.animate(
            [
                { transform: 'translateX(-100%)' },
                { transform: 'translateX(0%)' }
            ], {
                duration: 300,
                easing: 'ease-in-out',
                fill: 'forwards'
            }
        )
    }, []);

    return (
    <>
        <div ref={burgerRef} className={"flex flex-col z-50 absolute h-[100%] w-[234px] lg:w-[285px] bg-nerodark shadow-lg px-[35px] lg:px-[60px] pt-[13px] lg:pt-[28px] text-lightgray"}>
            <IoCloseOutline className="w-8 min-h-8 lg:ml-[-12px] cursor-pointer" onClick={()=>{setOpen(false)}}/>
            <ul className="flex flex-col gap-4 mt-12 lg:mt-8">
                <li className="cursor-pointer">Hem</li>
                <li className="cursor-pointer">Min Lista</li>
                <li className="cursor-pointer">Populärt just nu</li>
                <li className="cursor-pointer">Nytt hos oss</li>
            </ul>
             <div className="w-[165px] h-[1.5px] bg-gold my-[34px]" />
             <ul className="flex flex-col gap-4 mt-12">
                <li className="cursor-pointer">Kategori</li>
                <li className="cursor-pointer">Kategori</li>
                <li className="cursor-pointer">Kategori</li>
                <li className="cursor-pointer">Kategori</li>
                <li className="cursor-pointer">Kategori</li>
                <li className="cursor-pointer">Kategori</li>
                <li className="cursor-pointer">Kategori</li>
                <li className="cursor-pointer">Kategori</li>
                <li className="cursor-pointer">Kategori</li>
            </ul>
        </div>
    </>
     );
}

export default Hamburger;