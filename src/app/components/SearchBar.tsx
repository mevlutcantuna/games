import { useAppDispatch, useAppSelector } from "../hooks"
import {
    selectSearchValue,
    setSearchValue,
} from "../../features/games/GamesSlice"

const SearchBar = () => {
    const dispatch = useAppDispatch()
    const searchVal = useAppSelector(selectSearchValue)

    return (
        <>
            <input
                className="mt-10 mb-10 border h-12 text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                value={searchVal}
                onChange={(e) => dispatch(setSearchValue(e.target.value))}
                placeholder="Search a game..."
            />
        </>
    )
}

export default SearchBar
