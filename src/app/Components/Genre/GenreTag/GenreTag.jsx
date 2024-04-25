export default function GenreTag({ genre }) {
  return (
    <div className="w-fit px-2 py-1 border border-solid border-bluegray rounded-full text-xs items-center flex line break-keep">
      {genre}
    </div>
  );
}