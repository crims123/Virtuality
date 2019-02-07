import React, { Component} from 'react';
import {Link} from "react-router-dom";
 class Footer extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row footer">
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <p>Bucaramanga-Colombia<br></br>
                    3193659436<br></br>
                    soporte@virtuality.com.co
                    <br></br><br></br>
                    &copy; Virtuality {(new Date()).getFullYear()}<br></br>
                    Desarrollado por Cristian David Pinto
                </p>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <Link className="footer__link" to="/">Inicio</Link>
                    <Link className="footer__link" to="/nosotros">Nosotros</Link>
                    <Link className="footer__link" to="/catalogo">Catalogo de Juegos</Link>
                    <Link className="footer__link" to="/precios">Precios</Link>
                    
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <Link className="footer__link" to="/reservas">Reservas</Link>
                    <Link className="footer__link" to="/descuentos">Descuentos</Link>
                    <Link className="footer__link" to="/giftcards">Gift Cards</Link>
                    <Link className="footer__link" to="/contacto">Contacto</Link>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <p>Síguenos</p>
                    <a href="#"><i className="fab fa-facebook footer__socialNetworks"></i></a>
                    <a href="#"><i className="fab fa-instagram footer__socialNetworks"></i></a>
                    <a href="#"><i className="fab fa-youtube footer__socialNetworks"></i></a>
                </div>
            </div>
        </div>
           
        );
        }
    }
 export default Footer;
