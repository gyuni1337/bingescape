import { IoSearch } from "react-icons/io5";

export default function Search() {
  return (
    <div className="bg-midnightdark flex mt-5 py-4 px-4 rounded-xl mx-auto border-solid border border-darker gap-1">
      <IoSearch className="h-6 w-6 text-lightgray" />
      <input
        placeholder="sök på namn, kategori, skådespelare, genre, mm."
        className="bg-midnightdark border-none focus-visible:outline-none w-[550px] text-middlegray"
        type="text"
      />
    </div>
  );
}
