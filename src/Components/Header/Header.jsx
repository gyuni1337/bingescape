"use client"

import { MdOutlineCast, MdMenu } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";

import { useContext } from "react";
import Image from "next/image";
import pfp from "/public/images/ProfilePic.png";
import Hamburger from "../Hamburger/Hamburger";
import { DataContext } from "../../DataContext/DataContext";

export default function Header() {
  const { navOpen, setNavOpen } = useContext(DataContext);

  return (
    <>
      {navOpen ? <Hamburger setOpen={setNavOpen} /> : null}
      <div className="h-[56px] bg-dark px-5 py-[3px] flex flex-col justify-center content-center sm:hidden">
        <div className="flex justify-between w-[100%]">
          <MdMenu onClick={() => { setNavOpen(!navOpen); }} className="h-[100%] w-6 text-gold" />
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
      <div className="h-[56px] bg-dark px-5 py-[3px] flex flex-col justify-center content-center max-sm:hidden">
        <div className="flex justify-between w-[100%]">
          <div className="flex gap-10">
            <MdMenu onClick={() => { setNavOpen(!navOpen); }} className="h-[100%] w-6 text-gold" />
            <ul className="flex items-center gap-8 text-lightgray">
              <li className="align-middle">Filmer</li>
              <li className="align-middle">Serier</li>
            </ul>
          </div>
          <div className="text-gold place-self-center  text-center">LOGO</div>
          {/* ADD SEARCH BAR COMPONENT */}
          <div className="flex gap-4">
            <IoIosNotificationsOutline  className="h-[100%] w-6" />
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