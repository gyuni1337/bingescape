"use client"

import { MdOutlineCast, MdMenu } from "react-icons/md";
import { useContext, useState } from "react";
import Image from "next/image";
import pfp from "/public/images/ProfilePic.png";
import Hamburger from "../Hamburger/Hamburger";
import { DataContext } from "../../DataContext/Datacontext";

export default function Header() {
    // fixa detta skitet
    const { navOpen, setNavOpen } = useContext(DataContext);
    


  return (
    <>
    <div>{navOpen ? <Hamburger/> : null}</div>
    <div className="h-[56px] bg-dark px-5 py-[3px] flex flex-col justify-center content-center">
      <div className="flex justify-between w-[100%]">
      <MdMenu onClick={() => { setNavOpen(!navOpen); console.log(navOpen) }} className="h-[100%] w-6 text-gold"/>
        <div className="text-gold place-self-center  text-center">LOGO</div>
        <div className="flex gap-4">
          <MdOutlineCast className="h-[100%] w-6" />
          <Image
            className="rounded-full"
            src={pfp}
            alt="Profile Picture"
            width={38}
          />
        </div>
      </div>
    </div>
    </>
  );
}