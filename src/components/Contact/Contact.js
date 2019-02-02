import React , {Component} from "react";

class Contact extends Component {
    render(){
        return(
            <div className="container contact">
                <h1 className="contact__title">Información de Contacto</h1>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <center>
                        <h3>Virtuality</h3>
                        <a href="#"><i className="fab fa-facebook contact__icons "></i></a>
                    </center>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <center>
                        <h3>@Virtuality</h3>
                        <a href="#"><i className="fab fa-instagram contact__icons contact__icons-instagram "></i></a>
                    </center>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <center>
                        <h3>3193659436</h3>
                        <a href="#"><i className="fab fa-whatsapp contact__icons contact__icons-whatsapp "></i></a>
                    </center>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <center>
                        <h3>Virtuality</h3>
                        <a href="#"><i className="fab fa-youtube contact__icons contact__icons-youtube "></i></a>
                    </center>
                    </div>
                </div>


            </div>
            
        );
    }
}

export default Contact;