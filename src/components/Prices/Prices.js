import React , {Component} from "react";
import price1 from "../../shared/images/price1.jpg";
import price2 from "../../shared/images/price2.jpg";
import price3 from "../../shared/images/price3.jpg";
import price4 from "../../shared/images/price4.jpg";
import {Link} from "react-router-dom";

class Prices extends Component{
    render(){
        return(
            <div className="container">
                <div className="row prices">
                <h1 className="prices__title">Precios y Tiempos por estación:</h1>
             
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 prices__box ">
                        <img  className="prices__image" src={price1}></img>
                        <Link className="prices__button" to="/reservas">Reserva</Link>
                        
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 prices__box ">
                        <img  className="prices__image" src={price2}></img>
                        <Link className="prices__button prices__button-b" to="/reservas">Reserva</Link>
                        
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 prices__box ">
                        <img  className="prices__image" src={price3}></img>
                        <Link className="prices__button prices__button-c" to="/reservas">Reserva</Link>
                        
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 prices__box ">
                        <img  className="prices__image" src={price4}></img>
                        <Link className="prices__button prices__button-d" to="/reservas">Reserva</Link>
                        
                    </div>
        

                </div>

                <p className="prices__textTermns">
                <b>Una sesión individual de Virtuality incluye lo siguiente:</b><br></br>
                Uso de un las gafas especiales de realidad Virtual, dos controles inalambricos para cado mano y un espacio individual para jugar.<br></br> 
                Tutorial para comenzar tu experiencia.<br></br>
                Acceso completo a nuestro catálogo de experiencias VR .<br></br>
                Acceso multijugador a nuestro catálogo de experiencias VR.<br></br>
                Soporte y asistencia de nuestros representantes calificados de atención al cliente.<br></br>
                Los precios mencionados anteriormente son individuales<br></br>
                </p>
                
            </div>
        );
    }
}

export default Prices;