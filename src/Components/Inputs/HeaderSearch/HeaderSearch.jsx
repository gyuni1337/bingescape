import { IoSearch } from "react-icons/io5";
import { useEffect, useState, useRef } from 'react';

export default function HeaderSearch() {
  const [search, setSearch] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    if (search) {
      inputRef.current.style.display = "block";
    } else {
      inputRef.current.style.display = "";
    }
  }, [search]);

  return (
    <div className="h-10 px-4 rounded-[10px] flex items-center bg-midnightdark border-solid border-gold border gap-2 group">
      <IoSearch className="h-6 w-6 text-lightgray" />
      <input className="w-[222px] bg-inherit border-none focus-visible:outline-none text-middlegray group-hover:block focus-within:block hidden" ref={inputRef} onChange={(e) => setSearch(e.target.value)} type="text" />
    </div>
  )
}