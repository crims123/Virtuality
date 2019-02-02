import React , {Component,Fragment} from "react";
import {Carousel} from "react-bootstrap";
import {Link,BrowserRouter,Route,Switch} from "react-router-dom";
import GamesIndividual from "../GamesIndividual/";

class Games extends Component{
    componentDidMount(){
        const games = [
            {id:0 ,name:"Slighly Heroes", image:"https://res.cloudinary.com/vreamers/image/upload/v1545471806/games/jVQpihPAGNPlxWsNrxz4YSBfkgukP9e2aBFYfIpQ.jpg",
                description:"TRABA PARA ARRIBA: Adéntrate en el papel de tu superhéroe imaginario, a medias, en este juego casual de plataformas cruzadas. ¡Combate solo, en línea o contra amigos en intensos duelos de libre movimiento! Slightly Heroes es el juego más nuevo de los creadores de Merry Snowballs. BATALLA SOLO O VERSUS AMIGOS Experimenta duelos en tiempo real contra jugadores de todo el mundo o invita a tus amigos a unirse a un partido personalizado y lucha contra ellos en una variedad de escenarios. También puedes luchar solo contra oponentes de la IA para entrenar y mejorar tus habilidades. MULTIJUGADOR DE PLATAFORMA CRUZADO Conozca a oponentes de todo el mundo que juegan tanto en PC como en Mobile VR. Únete a la comunidad de Discord para un mejor emparejamiento. POWER-UPS Descubre divertidos power-ups y armas especiales que añaden un toque creativo a tus ataques y que cambian constantemente las reglas de las batallas. COLECTA HÉROES Y ARMAS Desbloquea una gran variedad de encantadores personajes y armas con diferentes atributos y estilos de juego. CONVERTIRSE EN EL JUGADOR ESTRELLA Escala las tablas de clasificación mundiales y semanales para demostrar que eres el mejor héroe imaginario",
                video:"a8Q-BKpwAGY"
            },
            {id:1 ,name:"Front Defense", image:"https://res.cloudinary.com/vreamers/image/upload/v1501846460/games/f6XLQd7OtCoeLAaEAsVg9Wc8MmvszaOxu8dbWq1D.jpg",
                description:"“Front Defense is good arcade fun, raising the action to flat-out frantic with a more active reloading system than most VR shooters. Lobbing grenades, calling in airstrikes, and using the mounted weapons are the real highlights – I just wish my fellow Army members were a bit more present. Here’s to hoping that a little arcade action will spur deeper experiences from HTC’s internal teams.80/100 – Gaming Trend",
                video:"Z-2kAqBZ5SA"
            },
            {id:2 ,name:"Sairent", image:"https://res.cloudinary.com/vreamers/image/upload/v1523191188/games/0PKMFINcweJEONArRbDvXKG0sWLTgrE55w8L6Eu7.jpg" },
            
            {id:3 ,name:"Everst Vr", image:"https://res.cloudinary.com/vreamers/image/upload/v1534922638/games/DmH8fjcWFShhCXiH5oayPP3Pj0OAOEw5FQKL52Md.jpg" }
        ]
        
        this.props.loadGames(games);
    }
    render(){
        
        const {games} =this.props;
        console.log(games)
        return(
           <div className="games">
               <h1 className="games__title">Experiencias de Realidad Virtual</h1>
               <center>
                    <Carousel >
                        <Carousel.Item>
                            <img width={1189} height={452}  alt="1189x452" src="https://scontent.oculuscdn.com/v/t64.5771-25/q92/s2048x2048/11162690_1597657833600851_7686325918767251456_n.jpg?_nc_cat=102&_nc_ht=scontent.oculuscdn.com&oh=da05a14b33e3cf209eeda20fa01d3fd7&oe=5C74418A" />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img width={1189} height={452}  alt="900x500" src="https://scontent.oculuscdn.com/v/t64.5771-25/q92/s2048x2048/12410459_1367847169915669_8090052140216614912_n.jpg?_nc_cat=105&_nc_ht=scontent.oculuscdn.com&oh=34c5dd629e29172713aa23db4dab6c7c&oe=5C755DA5" />              
                        </Carousel.Item>

                        <Carousel.Item>
                            <img  width={1189} height={452} alt="900x500" src="https://scontent.oculuscdn.com/v/t64.5771-25/q92/s2048x2048/12139051_755462674604790_4774738490405421056_n.jpg?_nc_cat=105&_nc_ht=scontent.oculuscdn.com&oh=cce752d418de82339d0e9644b52744fe&oe=5C79F13C" />
                        </Carousel.Item>
                    </Carousel>
               </center>

               <div className="container games__list">
                    <div className="row">
                        {games.map((item,index) => (
                            <Link  className="games__link" to={`/juego/${item.id}`}>
                                <div onClick={()=>this.props.loadId(item)} key={index} className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div className="game__listBox">
                                        <img className="games__image" src={item.image} ></img>
                                        <h3 className="games__name">{item.name}</h3>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    
               </div>
               
           </div>
        );
    }
}

export default Games;