import React,{Component} from "react";

class GamesIndividual extends Component{
    render(){
        const {gamesSelected} = this.props;
        return(
            <div className="gamesIndividual">
                <center>
                    <iframe className="gamesIndividual__video" src={`https://www.youtube.com/embed/${gamesSelected.video}`}
                    frameBorder="0" allow="accelerometer; autoplay=1;
                    encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                    </iframe>
                </center> 

                <div className="gamesIndividual__box container">
                    <h1>{gamesSelected.name} </h1>
                    <h3>ACERCA DE ESTE JUEGO</h3>
                    <p className="gamesIndividual__paragraph">
                    {gamesSelected.description}
                    </p>
                </div>
            </div>
            
        )
    }
}

export default GamesIndividual;