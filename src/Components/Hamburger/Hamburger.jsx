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
        <div ref={burgerRef} className={"flex flex-col z-50 absolute h-[100%] w-[234px] bg-nerodark shadow-lg px-[35px] pt-[13px] pb-[76px] text-lightgray"}>
            <IoCloseOutline className="w-8 h-8" onClick={()=>{setOpen(false)}}/>
            <ul className="flex flex-col gap-4 mt-12">
                <li>Hem</li>
                <li>Min Lista</li>
                <li>Populärt just nu</li>
                <li>Nytt hos oss</li>
            </ul>
             <div className="w-[165px] h-[1.5px] bg-gold my-[34px]" />
             <ul className="flex flex-col gap-4 mt-12">
                <li>Kategori</li>
                <li>Kategori</li>
                <li>Kategori</li>
                <li>Kategori</li>
                <li>Kategori</li>
                <li>Kategori</li>
                <li>Kategori</li>
                <li>Kategori</li>
                <li>Kategori</li>
            </ul>
        </div>
    </>
     );
}

export default Hamburger;