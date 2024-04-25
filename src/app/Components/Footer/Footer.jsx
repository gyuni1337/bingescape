import { MdOutlineHome, MdSearch } from "react-icons/md";
import { MdCopyright } from "react-icons/md";
import { AiFillQuestionCircle } from "react-icons/ai";

export default function Footer() {
    return (
    <>
        <div className="flex justify-between w-[100%] px-5 py-[14px] h-[52px] bg-dark top-[100vh] mt-auto sm:hidden">
            <MdOutlineHome className="h-6 w-6"/>
            <MdOutlineHome className="h-6 w-6"/>
            <MdOutlineHome className="h-6 w-6"/>
            <MdSearch className="h-6 w-6"/>
        </div>
        <div className="h-[350px] max-sm:hidden bg-dark mt-auto">
            <div className="flex justify-center max-mdsm:gap-[3.5vw] gap-16 mt-12">
                <ul className="flex flex-col gap-1 text-lightgray">
                    <li className="font-bold text-base text-white cursor-pointer">CategoryLink</li>
                    <li className="cursor-pointer">CategoryLink</li>
                    <li className="cursor-pointer">CategoryLink</li>
                    <li className="cursor-pointer">CategoryLink</li>
                    <li className="cursor-pointer">CategoryLink</li>
                </ul>
                <ul className="flex flex-col gap-1 text-lightgray">
                    <li className="font-bold text-base text-white cursor-pointer">CategoryLink</li>
                    <li className="cursor-pointer">CategoryLink</li>
                    <li className="cursor-pointer">CategoryLink</li>
                    <li className="cursor-pointer">CategoryLink</li>
                    <li className="cursor-pointer">CategoryLink</li>
                </ul>
                <ul className="flex flex-col gap-1 text-lightgray">
                    <li className="font-bold text-base text-white cursor-pointer">CategoryLink</li>
                    <li className="cursor-pointer">CategoryLink</li>
                    <li className="cursor-pointer">CategoryLink</li>
                    <li className="cursor-pointer">CategoryLink</li>
                    <li className="cursor-pointer">CategoryLink</li>
                </ul>
                <ul className="flex flex-col gap-1 text-lightgray">
                    <li className="font-bold text-base text-white cursor-pointer">CategoryLink</li>
                    <li className="cursor-pointer">CategoryLink</li>
                    <li className="cursor-pointer">CategoryLink</li>
                    <li className="cursor-pointer">CategoryLink</li>
                    <li className="cursor-pointer">CategoryLink</li>
                </ul>
                <ul className="flex flex-col gap-1 text-lightgray">
                    <li className="font-bold text-base text-white cursor-pointer">CategoryLink</li>
                    <li className="cursor-pointer">CategoryLink</li>
                    <li className="cursor-pointer">CategoryLink</li>
                    <li className="cursor-pointer">CategoryLink</li>
                    <li className="cursor-pointer">CategoryLink</li>
                </ul>
            </div>
            <div className="py-2 mt-4 mx-auto w-[80vw] border-solid border-y border-gold items-center flex flex-col">
                <div>Följ oss på sociala medier</div>
                <div className="flex gap-2">
                    <AiFillQuestionCircle className="w-16 h-16 cursor-pointer"/>
                    <AiFillQuestionCircle className="w-16 h-16 cursor-pointer"/>
                    <AiFillQuestionCircle className="w-16 h-16 cursor-pointer"/>
                </div>
            </div>
            <span className="flex items-center gap-2 justify-center mt-3"><MdCopyright /> Copyright streamingtjänst 2024</span>
        </div>
    </>
    )
}