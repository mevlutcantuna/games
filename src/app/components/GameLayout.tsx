import React, { useEffect, useState } from "react"
import { gamesWithComponent } from "../utils/gameDataWithComponent"
import { useParams } from "react-router-dom"

const GameLayout = () => {
    const { id } = useParams()
    const [game, setGame] = useState<{
        id: string
        component: React.ReactElement
    }>()

    // to get component of the game
    useEffect(() => {
        for (const item of gamesWithComponent) {
            if (item.id === id && item.component) {
                setGame(item)
            }
        }
    }, [id])

    if (game?.component) {
        return game.component
    }

    return <>can tuna</>
}

export default GameLayout
