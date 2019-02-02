import React , {Component} from "react";
import giftCard1 from "../../shared/images/giftCard1.png";
import giftCard2 from "../../shared/images/giftCard2.png";
import giftCard3 from "../../shared/images/giftCard3.png";
import giftCard4 from "../../shared/images/giftCard4.png";
class GiftCards extends Component{
    render(){
        return(
            <div className="container">
                <div className="row prices">
                <h1 className="prices__title">Gift Cards Virtuality</h1>
                <h3 className="prices__paragraph">Dale el mejor regalo a un familiar o amigo comprandole una Gift Card de Virtuality
                    tenemos multiples opciones y medios de pago.
                </h3>

                
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 ">
                    <h3 className="prices__textTime">15 minutos</h3>
                        <div className="prices__box">
                        <img  className="prices__image" src={giftCard1}></img>
                            <p className="prices__textParagraph">
                                1 estación individual exclusiva<br></br>
                                Máximo 2 acompañantes
                            </p>
                            <form method="post" action="https://gateway.payulatam.com/ppp-web-gateway/pb.zul" accept-charset="UTF-8">
                              <input type="image" border="0" alt="" src="http://www.payulatam.com/img-secure-2015/boton_pagar_grande.png" onClick="this.form.urlOrigen.value = window.location.href;"/>
                              <input name="buttonId" type="hidden" value="u8Hpp2tRE6RBSo4IQ0fi1eU3xgebQVQg+wSNY/z9+4I/pSJ5Wj1FCg=="/>
                              <input name="merchantId" type="hidden" value="545714"/>
                              <input name="accountId" type="hidden" value="547913"/>
                              <input name="description" type="hidden" value="Virtuality Gift Card 15 minutos"/>
                              <input name="referenceCode" type="hidden" value="gif01"/>
                              <input name="amount" type="hidden" value="10000.00"/>
                              <input name="tax" type="hidden" value="0.00"/>
                              <input name="taxReturnBase" type="hidden" value="0.00"/>
                              <input name="shipmentValue" value="0.00" type="hidden"/>
                              <input name="currency" type="hidden" value="COP"/>
                              <input name="lng" type="hidden" value="es"/>
                              <input name="sourceUrl" id="urlOrigen" value="" type="hidden"/>
                              <input name="buttonType" value="SIMPLE" type="hidden"/>
                              <input name="signature" value="ba99b703c3063836fa39f6b27b36cf412547fc4e1f26090f4c91da52209a0ddc" type="hidden"/>
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 ">
                    <h3 className="prices__textTime">30 minutos</h3>
                        <div className="prices__box">
                        <img  className="prices__image" src={giftCard2}></img>
                            <p className="prices__textParagraph">
                                1 estación individual exclusiva<br></br>
                                Máximo 2 acompañantes
                            </p>
                            <form method="post" action="https://gateway.payulatam.com/ppp-web-gateway/pb.zul" accept-charset="UTF-8">
                              <input type="image" border="0" alt="" src="http://www.payulatam.com/img-secure-2015/boton_pagar_grande.png" onClick="this.form.urlOrigen.value = window.location.href;"/>
                              <input name="buttonId" type="hidden" value="TIGP+F7O2BZAZBuSCefg2siZEimTOKZwPYY4l6kc83+dlZlI2FoD4g=="/>
                              <input name="merchantId" type="hidden" value="545714"/>
                              <input name="accountId" type="hidden" value="547913"/>
                              <input name="description" type="hidden" value="Virtuality Gift Card 30 minutos"/>
                              <input name="referenceCode" type="hidden" value="gif02"/>
                              <input name="amount" type="hidden" value="18000.00"/>
                              <input name="tax" type="hidden" value="0.00"/>
                              <input name="taxReturnBase" type="hidden" value="0.00"/>
                              <input name="shipmentValue" value="0.00" type="hidden"/>
                              <input name="currency" type="hidden" value="COP"/>
                              <input name="lng" type="hidden" value="es"/>
                              <input name="sourceUrl" id="urlOrigen" value="" type="hidden"/>
                              <input name="buttonType" value="SIMPLE" type="hidden"/>
                              <input name="signature" value="660c983a18f48f1380af6fe9ca33618e5382b8f931a580f51776e775c043bbbe" type="hidden"/>
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 ">
                    <h3 className="prices__textTime">60 minutos</h3>
                        <div className="prices__box">
                        <img  className="prices__image" src={giftCard3}></img>
                            <p className="prices__textParagraph">
                                1 estación individual exclusiva<br></br>
                                Máximo 2 acompañantes
                            </p>
                            <form method="post" action="https://gateway.payulatam.com/ppp-web-gateway/pb.zul" accept-charset="UTF-8">
                              <input type="image" border="0" alt="" src="http://www.payulatam.com/img-secure-2015/boton_pagar_grande.png" onClick="this.form.urlOrigen.value = window.location.href;"/>
                              <input name="buttonId" type="hidden" value="iVECaqPXW0VOxZLDMLCsgYGQE/Hnet0mWzD1tKeJWuSAiov+ovBdPA=="/>
                              <input name="merchantId" type="hidden" value="545714"/>
                              <input name="accountId" type="hidden" value="547913"/>
                              <input name="description" type="hidden" value="Virtuality Gift Card 60 minutos"/>
                              <input name="referenceCode" type="hidden" value="gif03"/>
                              <input name="amount" type="hidden" value="36000.00"/>
                              <input name="tax" type="hidden" value="0.00"/>
                              <input name="taxReturnBase" type="hidden" value="0.00"/>
                              <input name="shipmentValue" value="0.00" type="hidden"/>
                              <input name="currency" type="hidden" value="COP"/>
                              <input name="lng" type="hidden" value="es"/>
                              <input name="sourceUrl" id="urlOrigen" value="" type="hidden"/>
                              <input name="buttonType" value="SIMPLE" type="hidden"/>
                              <input name="signature" value="b1dd3ce4dd692520399696a1de6357cc80df1272ff57abed57a5bafaaedb7bbc" type="hidden"/>
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 ">
                    <h3 className="prices__textTime">120 minutos</h3>
                        <div className="prices__box">
                        <img  className="prices__image" src={giftCard4}></img>
                            <p className="prices__textParagraph">
                                1 estación individual exclusiva<br></br>
                                Máximo 2 acompañantes
                            </p>
                            <form method="post" action="https://gateway.payulatam.com/ppp-web-gateway/pb.zul" accept-charset="UTF-8">
                              <input type="image" border="0" alt="" src="http://www.payulatam.com/img-secure-2015/boton_pagar_grande.png" onClick="this.form.urlOrigen.value = window.location.href;"/>
                              <input name="buttonId" type="hidden" value="1VEMB5/QBL6M4i+l4xsRwD30JtMFMgA4YRFiSnBxcS/CxNkmg5yXWw=="/>
                              <input name="merchantId" type="hidden" value="545714"/>
                              <input name="accountId" type="hidden" value="547913"/>
                              <input name="description" type="hidden" value="Virtuality Gift Card 120 minutos"/>
                              <input name="referenceCode" type="hidden" value="gif04"/>
                              <input name="amount" type="hidden" value="70000.00"/>
                              <input name="tax" type="hidden" value="0.00"/>
                              <input name="taxReturnBase" type="hidden" value="0.00"/>
                              <input name="shipmentValue" value="0.00" type="hidden"/>
                              <input name="currency" type="hidden" value="COP"/>
                              <input name="lng" type="hidden" value="es"/>
                              <input name="sourceUrl" id="urlOrigen" value="" type="hidden"/>
                              <input name="buttonType" value="SIMPLE" type="hidden"/>
                              <input name="signature" value="e6082d7ebb34f93f4d316cb18fa56c9d12c5b1d371bbc46c208ce1baf557f043" type="hidden"/>
                            </form>
                        </div>
                    </div>
                <p className="prices__textTermns">
                <b>Condiciones de las Gift Card Virtuality</b><br></br>
                Solo seran validas una vez se complete el pago Online.<br></br> 
                Pueden ser redimidas solo una vez.<br></br>
                Cualquier usuario puede redimir la Gift Card en cualquier de nuestros almacenes.<br></br>
                En caso de que una estación de Virtuality este ocupada, el usuario debe esperar para poder redemir su Gift Card.<br></br>
               
                </p>
                </div>
            </div>
        );
    }
}

export default GiftCards;