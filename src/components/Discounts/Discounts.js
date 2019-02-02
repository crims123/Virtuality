import React,{Component} from "react";

class Discounts extends Component {
    render(){
        return(
            <div  className="container discounts">
                <h1 className="discounts__title">Obten Descuentos especiales en Virtuality por tus Amigos</h1>
                <img className="discounts__image img-responsive" src="https://media.buzzle.com/media/images-en/gallery/relationships/friends/1200-473428732-group-of-friends-at-sunset.jpg"></img>
                <p className="discounts__paragraph">Por cada amigo que traigas a Virtuality y este consuma alguno de nuestros servicios , obtendras 10% del 
                    tiempo que tu amigo consuma de por vida.
                </p>
                <h1 className="discounts__title">Tiempo adicional Gratis</h1>
                <img className="discounts__image img-responsive" src="https://i11b.3djuegos.com/juegos/9896/oculus_rift/fotos/maestras/oculus_rift-3676998.jpg"></img>
                <p className="discounts__paragraph">Por cada 10 horas que consumas obendras una hora adicional totalmente Gratis.
                </p>
            </div>

        )
    }
}

export default Discounts;