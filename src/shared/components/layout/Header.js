import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

 class Header extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        url: PropTypes.string
        };
       
     render(){
         return(
             <div className="header">
               <Link className="header__link" to="/">Inicio</Link>
               <Link className="header__link" to="/nosotros">Nosotros</Link>
               <Link className="header__link" to="/catalogo">Catalogo de Juegos</Link>
               <Link className="header__link" to="/precios">Precios</Link>
               <Link className="header__link" to="/reservas">Reservas</Link>
               <Link className="header__link" to="/descuentos">Descuentos</Link>
               <Link className="header__link" to="/giftcards">Gift Cards</Link>
               <Link className="header__link" className="header__link" to="/contacto">Contacto</Link>
               <i   class="fas fa-bars header__icon"></i>
             </div>
             
         )
     }
 }
 export default Header;