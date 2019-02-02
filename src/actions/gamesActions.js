const mountGames = (games)=>{
    return({
        type:"MOUNT_GAMES",
        payload: games
    })
}

const idGames = (id)=>{
    return({
        type:"GAMES_ID",
        payload: id
    })
}


export {mountGames,idGames}