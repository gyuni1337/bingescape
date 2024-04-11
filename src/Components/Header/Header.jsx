"use client"

import { MdOutlineCast, MdMenu } from "react-icons/md";
import { FiBell } from "react-icons/fi";
import HeaderSearch from "../Inputs/HeaderSearch/HeaderSearch";
import Hamburger from "../Hamburger/Hamburger";

import { useContext } from "react";
import Image from "next/image";
import pfp from "../../../public/images/ProfilePic.png";
import { DataContext } from "../../DataContext/DataContext";

export default function Header() {
  const { navOpen, setNavOpen } = useContext(DataContext);

  return (
    <>
      {navOpen ? <Hamburger setOpen={setNavOpen} /> : null}
      <div className="h-[56px] bg-dark px-5 py-[3px] flex flex-col justify-center content-center sm:hidden">
        <div className="flex justify-between w-[100%]">
          <MdMenu onClick={() => { setNavOpen(!navOpen); }} className="h-[100%] w-6 text-gold cursor-pointer" />
          <div className="text-gold place-self-center text-5xl text-center left-[50%] absolute">LOGO</div>
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
      <div className="h-[56px] bg-dark px-5 py-[3px] flex flex-col justify-center content-center max-sm:hidden">
        <div className="flex justify-between w-[100%]">
          <div className="flex gap-10">
            <MdMenu onClick={() => { setNavOpen(!navOpen); }} className="h-[100%] w-6 cursor-pointer text-gold" />
            <ul className="flex items-center gap-8 text-lightgray">
              <li className="align-middle cursor-pointer">Filmer</li>
              <li className="align-middle cursor-pointer">Serier</li>
            </ul>
          </div>
          <div className="text-gold place-self-center text-center left-[50%] absolute">LOGO</div>
          <div className="flex gap-4">
            <HeaderSearch />
            <FiBell className="h-[100%] w-6 cursor-pointer" />
            <Image
              className="rounded-full cursor-pointer"
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