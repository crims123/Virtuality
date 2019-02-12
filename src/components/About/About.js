import React, {Component,Fragment} from "react";
import {Carousel} from "react-bootstrap";
import aboutOclus from "../../shared/images/aboutOclus.jpeg";
import aboutSlider1 from "../../shared/images/about1.jpg";
import aboutSlider2 from "../../shared/images/about2.jpg";
import aboutSlider3 from "../../shared/images/about3.jpg";
class About extends Component{
    render(){
        return(
            <Fragment>
                <div className="container">
                    <div className="row about">
                        <h1 className="about__title" >Quienes somos</h1>
                        <p className="about__paragraph">No somos solo un equipo de diseñadores y curadores de realidad virtual, también somos 
                            entusiastas cuyo amor por la realidad virtual y su experiencia para el usuario final 
                            se encuentra en la Núcleo de todo lo que hacemos.
                        </p>
                        <div className="about__carousel">
                            <Carousel >
                                <Carousel.Item>
                                    <img  alt="900x500" src={aboutSlider1} />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img alt="900x500" src={aboutSlider2} />
                                
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img alt="900x500" src={aboutSlider3} />
                
                                </Carousel.Item>
                            </Carousel>;
                        </div>
                        
                        <h1 className="about__title">Nuestra Misión</h1>
                        <p className="about__paragraph">Dar a conocer la Realidad Virtual a todo el mundo, 
                        hacerla accesible para todos. Todo lo que se diga sobre la RV no es capaz de describir 
                        lo realmente inmersiva de la experiencia. Los requisitos de espacio y el alto coste del
                        equipamiento hacen de Virtuality el lugar ideal donde experimentarlo.
                        </p>
                        
                        
                    </div>
                    
                </div>
                    <center>
                        <img className="img-responsive" src={aboutOclus} ></img>
                    </center>
            </Fragment>
        )
    }
}

export default About;