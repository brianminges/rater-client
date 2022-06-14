import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllCategories, createGame } from "./GameManager";
import "./GameForm.css"

export const GameForm = () => {
    const history = useNavigate()
    const [ categories, setCategories ] = useState([])
    const [ game, setGame ] = useState({
        title: "",
        description: "",
        designer: "",
        released: "",
        numOfPlayers: 1,
        ageRecommended: 1,
        categoryId: 0
    })

    const loadCategories = () => {
        return getAllCategories().then(data => {
            setCategories(data)
        })
    }

    useEffect(() => {
        loadCategories()
    }, [])

    const changeGameState = (domEvent) => {
        const newGame = {...game}
        let selectedVal = domEvent.target.value
        newGame[domEvent.target.name] = selectedVal
        setGame(newGame)
    }

    return (
        <>
        <form className="gameForm">
            <h2> Create a new game</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Name: </label>
                    <input
                        type="text"
                        name="title"
                        required
                        className="form-control"
                        value={game.title}
                        onChange={changeGameState}
                        id="title" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input
                        type="text"
                        name="description"
                        required
                        className="form-control"
                        value={game.description}
                        onChange={changeGameState}
                        id="description" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="designer">Designer: </label>
                    <input
                        type="text"
                        name="designer"
                        required
                        className="form-control"
                        value={game.designer}
                        onChange={changeGameState}
                        id="designer" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="released">Released: </label>
                    <input
                        type="text"
                        name="released"
                        required
                        className="form-control"
                        value={game.released}
                        onChange={changeGameState}
                        id="released"
                        placeholder="YYYY-MM-DD" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="numOfPlayers">Number of Players: </label>
                    <input
                        type="number"
                        name="numOfPlayers"
                        required
                        className="form-control"
                        value={game.numOfPlayers}
                        onChange={changeGameState}
                        id="numOfPlayers" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="ageRecommended">Age recommended: </label>
                    <input
                        type="number"
                        name="ageRecommended"
                        required
                        className="form-control"
                        value={game.ageRecommended}
                        onChange={changeGameState}
                        id="ageRecommended" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="categoryId">Category: </label>
                    <select 
                        className="form-control"
                        name="categoryId" 
                        id="categoryId"
                        required 
                        value={game.categoryId}
                        onChange={changeGameState} >
                        <option value="0"></option>
                            {categories.map(
                                category => (<option key={category.id} value={category.id}>{category.name}</option>)
                            )}
                    </select>
                </div>
            </fieldset>

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    // Changing to snake case to match back end
                    const newGame = {
                        title: game.title,
                        description: game.description,
                        designer: game.designer,
                        released: game.released,
                        num_of_players: parseInt(game.numOfPlayers),
                        age_recommended: parseInt(game.ageRecommended),
                        category: parseInt(game.categoryId)
                    }

                    // Send POST request to your API
                    createGame(newGame)
                        .then(() => history("/games"))
                }}
                className="btn btn-primary" 
                id="createBtn">Create</button>
        </form>
        </>
    )
}