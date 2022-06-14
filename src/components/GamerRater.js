import React from "react"
import {Route, Routes, Navigate, Switch } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { GameList } from "./game/GameList"
import { GameDetails } from "./game/GameDetails"
import { GameForm } from "./game/GameForm"

export const GamerRater = () => {    
    console.log(localStorage.getItem("gr_token"))
    
    return <>
        <Routes>
            <Route render={() => {
                if (localStorage.getItem("gr_token") !== null) {
                    console.log("made it to routes")
                    return <>
                        <Route>
                            <NavBar />
                            <ApplicationViews />
                        </Route>
                    </>
                } else {
                    return <Navigate to="/login" />
                }
            }} />

            <Route path={("/login", "/")} element={<Login />} />

            <Route path="/register" element={<Register />} />



            <Route exact path="/games" element={<GameList />} />
            <Route exact path="/games/:gamesId" element={<GameDetails />} />  
            <Route exact path="/games/create" element={<GameForm />} />
        </Routes>

    </>
}
