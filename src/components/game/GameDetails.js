import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getSingleGame } from "./GameManager";

export const GameDetails = () => {
    const {gamesId} = useParams();
    const [game, setGame] = useState([])

    const loadGame = () => {
        getSingleGame(gamesId)
            .then(data => {
                setGame(data)})
    }

    useEffect(() => {
        loadGame()
    }, []);
  
    useEffect(() => {
        console.log(game)
        
    }, [game])

  
    return (
        <>
        <h2>{game.title}</h2>
        <p>Designer: {game.designer}</p>
        <p>Date released: {game.released}</p>
        <p>Number of players: {game.num_of_players}</p>
        <p>Recommended age: {game.age_recommended}</p>
        <p>Categories: </p>
        <ul>
            {game.categories?.map((category) => (
            <li>{category.name}</li>
            ))}
        </ul>
        </>
    )        
}