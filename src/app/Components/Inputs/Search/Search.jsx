import { IoSearch } from "react-icons/io5";

export default function Search() {
  return (
    <div className="bg-dark flex mt-10 py-4 px-4 rounded-xl mx-auto border-solid border border-darker gap-2">
      <IoSearch className="h-6 w-6 text-lightgray" />
      <input
        placeholder="sök på namn, kategori, skådespelare, genre, mm."
        className="bg-dark border-none px-5 focus-visible:outline-none w-[750px] text-middlegray"
        type="text"
      />
    </div>
  );
}
