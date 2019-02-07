import React , {Component,Fragment} from "react";
import {Carousel} from "react-bootstrap";
import {Link} from "react-router-dom";


class Games extends Component{
    componentDidMount(){
        const games = [
            {id:0 ,name:"Beat Saber", image:"https://steamcdn-a.akamaihd.net/steam/apps/620980/header.jpg?t=1543281439",
                description:"Beat Saber nació convertido, con todo merecimiento, en un auténtico fenómeno. En este videojuego de realidad virtual tenemos como meta machacar notas musicales que se acercan a nosotros al ritmo de la música que suena para que, al golpearlas, compongamos espectaculares canciones. Una idea tremendamente original para un videojuego que levanta pasiones y que es una de las más originales reinvenciones del concepto VR.",
                video:"55t9c1P7oyE"
            },
            {id:1 ,name:"Robo Recall", image:"https://roadtovrlive-5ea0.kxcdn.com/wp-content/uploads/2017/03/robo-recall-featured.jpg",
                description:"“Robo Recall es un videojuego de acción en primera persona desarrollado por los creadores de Gears of War y Unreal Tournament. Ambientado en un mundo futurista dominado por robots, en este título de disparos tenemos que masacrar hordas y hordas de enemigos mecánicos, a los que podemos eliminar usando una amplia variedad de armas de fuego o, también, nuestros propios puños. El videojuego hace uso del sistema de control por movimientos , que dota a la acción de mayor sensación de realismo, al mostrar en pantalla con todo lujo de detalles los movimientos que realicemos con nuestras manos.",
                video:"p5__YsQyXVk"
            },
            {id:2 ,name:"Zero Caliber", image:"https://steamcdn-a.akamaihd.net/steam/apps/877200/capsule_616x353.jpg?t=1541797698",
                description:"“Zero Caliber es un FPS militar desarrollado exclusivamente para VR. Personaliza tus armas sobre la marcha, lucha con tus amigos en Co-op (¡PvP próximamente!) Y usa tus habilidades tácticas para cumplir la misión: ¡salvar a la humanidad! ¡Historia atractiva, manejo de armas y física realistas en un entorno inmersivo!.",
                video:"7D-vqrvRUSo"
            },
            
            {id:3 ,name:"Superhot", image:"https://hb.imgix.net/5dd3bd1bde6530906162b1ad77d2c72a4f535058.jpg?auto=compress,format&fit=crop&h=353&w=616&s=a5b31f1354fd01f23452a6a9ac140750",
                description:"“SUPERHOT es el juego de disparos en primera persona donde el tiempo se mueve solo cuando te mueves. No regenerar las barras de salud. No hay gotas de munición convenientemente colocadas. Solo eres tú, superado en número y con armas de fuego, que agarras las armas de los enemigos caídos para disparar, cortar y maniobrar a través de un huracán de balas de cámara lenta.",
                video:"410K4RzYhJY"
            },
            
            {id:4 ,name:"Epic Roller Coasters", image:"https://steamcdn-a.akamaihd.net/steam/apps/787790/header.jpg?t=1548711762",
                description:"En Epic Roller Coaster tendrás el mismo sentimiento de una montaña rusa real con altos niveles gráficos, simulación basada en física y experiencia multiplayer. Ahora vos también podes sacar fotos de sus aventuras y compartir en su timeline! O, más que esto, entrar en una competición en lo Leaderboard en modo carrera!",
                video:"sU-3_eldBkg"
            },
            {id:5 ,name:"Blade and Sorcery", image:"http://igg-games.com/wp-content/uploads/2018/12/Blade-and-Sorcery-Free-Download.jpg",
                description:"“Blade & Sorcery es un arenero de fantasía medieval construido para la realidad virtual con combate cuerpo a cuerpo, a distancia y mágico impulsado por la física. Conviértete en un poderoso guerrero, guardabosques o hechicero y destruye a tus enemigos.",
                video:"68gSMdNBdZQ"
            },
            {id:5 ,name:"Home", image:"https://ichef.bbci.co.uk/images/ic/1920x1080/p05pkwcg.jpg",
                description:"Home te coloca en el centro de la historia, te lleva a un viaje emocional y personal a la vez que ofrece momentos hermosos, conmovedores y memorables.",
                video:"NCNgjvCBCPY"
            },
            {id:5 ,name:"Face Your Fears", image:"https://ifgn.com/wp-content/uploads/2018/07/Face-Your-Fears.jpg",
                description:"Face Your Fears es una experiencia que te expone a escenas terroríficas basadas en miedos y fobias comunes. En Skyscraper, un jugador se para en la cornisa de un rascacielos en medio de una gran ciudad. Cuando mira hacia abajo, un robot gigante está subiendo hacia el jugador. En Haunting, los jugadores experimentan el miedo y la emoción de ser un niño pequeño en la cama en una habitación donde las cosas no son lo que parecen. Lo que comienza con una casa chirriante y un trueno distante, se convierte en crescendos en momentos espantosos que se acumulan en función del lugar donde el jugador mira (o no mira).",
                video:"hLtgGmjRQwQ"
            },
            {id:6 ,name:"Lucky's Tale", image:"https://assets2.ignimgs.com/2015/12/30/screenshot2015-12-30at105919am00png-19bd82.png",
                description:"Un encantador juego de plataformas para todas las edades que sigue a Lucky, el héroe siempre optimista, enérgico y amable, en su búsqueda para encontrar su fuerza interior y ayudar a su hermana a rescatar el Libro de las edades de Jinx. Jinx es el villano intrigante y misterioso que intenta remodelar el mundo, pero ¿por qué motivo?",
                video:"XQlsi8xA5JM"
            },
            {id:7 ,name:"Guns’n’Stories:", image:"http://igg-games.com/wp-content/uploads/2017/09/GunsnStories-Bulletproof-VR-Free-Download.jpg",
                description:"Un encantador juego de plataformas para todas las edades que sigue a Lucky, el héroe siempre optimista, enérgico y amable, en su búsqueda para encontrar su fuerza interior y ayudar a su hermana a rescatar el Libro de las edades de Jinx. Jinx es el villano intrigante y misterioso que intenta remodelar el mundo, pero ¿por qué motivo?",
                video:"49XHqM2oFYU"
            },
            {id:8 ,name:"Dead and Buried", image:"https://www.realmentevirtual.com/wp-content/uploads/2016/11/Dead-and-Buried-990x556.jpg",
            description:"En Epic Roller Coaster tendrás el mismo sentimiento de una montaña rusa real con altos niveles gráficos, simulación basada en física y experiencia multiplayer. Ahora vos también podes sacar fotos de sus aventuras y compartir en su timeline! O, más que esto, entrar en una competición en lo Leaderboard en modo carrera!",
            video:"4Q3t3MCpi_U"
            },
            {id:9 ,name:"Gray", image:"https://i.ytimg.com/vi/_lupCNQWzM8/maxresdefault.jpg",
            description:"¿Puedes escapar de este miedo? En este juego se prueba tu valentía. ¡Enfrentemos el miedo ahora!",
            video:"UC8KnrpEG0c"
            },
            
           
           
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