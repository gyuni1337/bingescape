import { MdOutlineHome, MdSearch } from "react-icons/md";

export default function Footer() {
    return (
        <div className="flex justify-between w-[100%] px-5 py-[14px] h-[52px] bg-dark top-[100vh] mt-auto">
            <MdOutlineHome className="h-6 w-6"/>
            <MdOutlineHome className="h-6 w-6"/>
            <MdOutlineHome className="h-6 w-6"/>
            <MdSearch className="h-6 w-6"/>
        </div>
    )
}