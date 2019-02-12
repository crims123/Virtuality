import React,{Component} from "react";
import discounts1 from "../../shared/images/discounts1.jpg";
import discounts2 from "../../shared/images/discounts2.jpg";
class Discounts extends Component {
    render(){
        return(
            <div  className="container discounts">
                <h1 className="discounts__title">Obten Descuentos especiales en Virtuality por tus Amigos</h1>
                <img className="discounts__image img-responsive" src={discounts1}></img>
                <p className="discounts__paragraph">Por cada amigo que traigas a Virtuality y este consuma alguno de nuestros servicios , obtendras 10% del 
                    tiempo que tu amigo consuma de por vida.
                </p>
                <h1 className="discounts__title">Tiempo adicional Gratis</h1>
                <img className="discounts__image img-responsive" src={discounts2}></img>
                <p className="discounts__paragraph">Por cada 10 horas que consumas obendras una hora adicional totalmente Gratis.
                </p>
            </div>

        )
    }
}

export default Discounts;