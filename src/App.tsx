import { useEffect } from "react"
import Games from "./features/games/Games"

function App() {
    useEffect(() => {
        !sessionStorage.getItem("coins") &&
            sessionStorage.setItem("coins", JSON.stringify(20))
    }, [])

    return (
        <>
            <Games />
        </>
    )
}

export default App
