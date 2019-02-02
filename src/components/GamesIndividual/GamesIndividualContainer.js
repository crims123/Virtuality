import {connect} from "react-redux";
import GamesIndividual from "./GamesIndividual";

const mapStateToProps = state =>{
    return {
        games: state.games,
        gamesSelected: state.gamesSelected
    }
}

export default connect(mapStateToProps, null)(GamesIndividual)