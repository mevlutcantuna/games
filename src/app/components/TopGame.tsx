import { Link } from "react-router-dom"

const TopGame = () => {
    return (
        <div className="w-full h-80 p-4 flex items-end bg-top-game bg-no-repeat rounded-xl bg-top-game-size">
            <Link
                className="bg-amber-400	 text-lg px-16 py-3 rounded-xl text-white"
                to="/game/slot-machine-game"
            >
                Play
            </Link>
        </div>
    )
}

export default TopGame
