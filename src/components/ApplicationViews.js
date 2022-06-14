import React from "react"
import { Route } from "react-router-dom"
import { GameList } from "./game/GameList"
import { GameDetails } from "./game/GameDetails"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
        {/* <Route exact path="/games" element={<GameList />} />
        <Route exact path="/games/:gamesId" element={<GameDetails />} /> */}

        </main>
    </>
}