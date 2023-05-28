import { useAppSelector } from "../hooks"
import { selectSearchValue } from "../../features/games/GamesSlice"
import { useMemo } from "react"
import gamesData from "../utils/game-data.json"

const GameList = () => {
    const searchVal = useAppSelector(selectSearchValue)

    const gameList = useMemo(() => {
        if (searchVal.trim() === "") {
            return gamesData.games.slice(1)
        }
        const filteredGameList = gamesData.games
            .slice(1)
            .filter((item) =>
                item.title.toLowerCase().includes(searchVal.toLowerCase()),
            )
        return filteredGameList
    }, [searchVal])

    return (
        <div className="flex flex-wrap gap-10 justify-between">
            {gameList.map((item) => (
                <div key={item.id} className="text-white relative">
                    <img
                        className="w-60 rounded-md"
                        src={item.thumb.url}
                        alt={item.slug}
                    />
                    <span className="absolute bottom-0 opacity-80 flex items-center justify-center w-full rounded-b-md h-12 bg-neutral-800">
                        Unavailable
                    </span>
                </div>
            ))}
        </div>
    )
}

export default GameList
