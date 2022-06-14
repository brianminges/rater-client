const remoteURL = "http://localhost:8000"

export const getAllGames = () => {
    return fetch(`${remoteURL}/games`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("gr_token")}`
        }
    })
        .then(response => response.json())
}

export const getSingleGame = (gameId) => {
    return fetch(`${remoteURL}/games/${gameId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("gr_token")}`
        }
    })
        .then(response => response.json())
}

export const getAllCategories = () => {
    return fetch(`${remoteURL}/categories`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("gr_token")}`
        }
    })
        .then(response => response.json())
}

// export const createGame = (game) => {
//     return fetch(`${remoteURL}/games`, {
//         method: "POST",
//         headers:{
//             "Authorization": `Token ${localStorage.getItem("gr_token")}`,
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(game)
//     }).then(response => response.json())
// }

export const createGame = (game) => {
    return fetch(`${remoteURL}/games`, { 
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("gr_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(game)
    }).then(response => response.json())
}