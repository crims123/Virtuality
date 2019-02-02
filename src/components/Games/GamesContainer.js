import {connect} from "react-redux";
import Games from "./Games";
import {mountGames,idGames} from "../../actions/gamesActions";

const mapStateToProps = state =>{
    return{
        games: state.games
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        loadGames(games){
            dispatch(mountGames(games))
        },
        loadId(id){
            dispatch(idGames(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(Games)