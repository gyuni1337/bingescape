import GenreTag from "../GenreTag/GenreTag"

export default function GenreFeed() {
    return(
        <div className="w-[603px] my-2 mx-auto flex gap-1 overflow-clip">
            <GenreTag genre="Action"/>
            <GenreTag genre="Adventure"/>
            <GenreTag genre="Comedy"/>
            <GenreTag genre="Drama"/>
            <GenreTag genre="Fantasy"/>
            <GenreTag genre="Horror"/>
            <GenreTag genre="Mystery"/>
            <GenreTag genre="Romance"/>
            <GenreTag genre="Sci-Fi"/>
            <GenreTag genre="Thriller"/>
            <GenreTag genre="Western"/>
            <GenreTag genre="Animation"/>
        </div>
    )
}