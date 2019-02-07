import React , {Fragment} from 'react';
import {Link} from "react-router-dom";
import homePrincipal from "../../shared/images/homePrincipal.jpeg";
import homeLents from "../../shared/images/homeLents.jpg";
import homeGames from "../../shared/images/homeGames.jpg";
const Home = () => (
<Fragment>
   <div className="homeSlider">
      <img className="homeSlider__image img-responsive" src={homePrincipal} ></img>
   </div>

   <div className="container">
      <div className="homeInformation row">
         <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <h1 className="homeInformation__title">¿Que es Virtuality?</h1>
           
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/aOZ-YCNfVBA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
            <p className="homeInformation__paragraph">Virtuality es un centro de Realidad Virtual ubicado en la ciudad de Bucaramanga donde puedes vivir  la mejor experiencia de realidad virtual inmersiva e interactiva.
           
            </p>
         </div>
         <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
         <img className="homeInformation__image" src={homeLents}></img>
         </div>
      </div>
   </div>

   <div className="homeGame">
      <h1 className="homeGame__title">Conoce los juegos y experiencias que tenemos para ti.</h1>
      <img className="homeGame__image img-responsive" src={homeGames} ></img>
      <Link  className="homeGame__button" to="/catalogo">Ver Catalogo de Juegos</Link>
   </div>
</Fragment>

);
export default Home;