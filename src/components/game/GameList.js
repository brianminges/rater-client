import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { getAllGames } from "./GameManager"


export const GameList = () => {
    const [games, setGames] = useState([])

    const loadGames = () => {
        getAllGames().then(data => setGames(data))
    }

    useEffect(() => {
        loadGames()
    }, []);

    return (
        <article>
            
            <h2>Games</h2>
            <Link to={`/games/create`}>Create a new game</Link>
                {
                    games.map(game => {
                        return <section key={game.id}>
                            <div className="game__title"><Link to={`/games/${game.id}`}>{game.title}</Link></div>
                        </section>
                    })
                }
        </article>
    ) 
}
 