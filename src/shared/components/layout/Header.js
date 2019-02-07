import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

 class Header extends Component {
    state ={
        menuClick: false
    }
    static propTypes = {
        title: PropTypes.string.isRequired,
        url: PropTypes.string
        };

        changeMenu = ()=>{
            const menuState = this.state.menuClick;
            switch(menuState){
                case false:
                this.setState({menuClick:true})
                break;

                case true:
                this.setState({menuClick:false})
                break;          
            }
        }

        hiddenMenu = ()=>{
            const menuState = this.state.menuClick;
            switch(menuState){
                case false:
                this.setState({menuClick:false})
                break;

                case true:
                this.setState({menuClick:false})
                break;          
            }
        }
       
     render(){
         const {menuClick} = this.state;
         return(
             <div className="header">
             <center>
             <i onClick={this.changeMenu}   class="fas fa-bars header__icon"></i>
             <Link onClick={this.hiddenMenu} className={`${menuClick ? 'header__link header__link-b' : 'header__link'}`}  to="/">Inicio</Link>
               <Link onClick={this.hiddenMenu} className={`${menuClick ? 'header__link header__link-b' : 'header__link'}`} to="/nosotros">Nosotros</Link>
               <Link onClick={this.hiddenMenu} className={`${menuClick ? 'header__link header__link-b' : 'header__link'}`} to="/catalogo">Catalogo de Juegos</Link>
               <Link onClick={this.hiddenMenu} className={`${menuClick ? 'header__link header__link-b' : 'header__link'}`} to="/precios">Precios</Link>
               <Link onClick={this.hiddenMenu} className={`${menuClick ? 'header__link header__link-b' : 'header__link'}`} to="/reservas">Reservas</Link>
               <Link onClick={this.hiddenMenu} className={`${menuClick ? 'header__link header__link-b' : 'header__link'}`} to="/descuentos">Descuentos</Link>
               <Link onClick={this.hiddenMenu} className={`${menuClick ? 'header__link header__link-b' : 'header__link'}`} to="/giftcards">Gift Cards</Link>
               <Link onClick={this.hiddenMenu} className={`${menuClick ? 'header__link header__link-b' : 'header__link'}`} to="/contacto">Contacto</Link>
             </center>
               
               
             </div>
             
         )
     }
 }
 export default Header;