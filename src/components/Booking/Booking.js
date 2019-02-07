// Import FirebaseAuth and firebase.
import React,{Fragment}  from 'react';
import TimePicker from 'react-bootstrap-time-picker';


class Booking extends React.Component {
  state = {
    price:"",
    players:"",
    date:"",
    hour:"",
    time:"",
    minutes:"",
    apiKey:"4Vj8eK4rloUd272L48hsrarnUA",

  }
  getPrice =(e)=>{
    e.preventDefault();
    const date = document.getElementById("date").value;
    const hour = document.getElementById("hour").value;
    const players = document.getElementById("players").value;
    const minutes = document.getElementById("minutes").value;
    var time = document.getElementById("minutes").value;
    const price = Number(players) * Number(minutes);
    var md5 = require('md5');
    var signature = md5(`ldoQ49JJlD2U2t7bNJD297i9jn~545714~PagoReserva~${price}~COP`);
    switch(time){
      case "10000":
      time = 15;
      break;

      case "18000":
      time = 30;
      break;

      case "36000":
      time = 60;
      break;

      case "52000":
      time = 90;
      break;

      case "70000":
      time = 120;
      break;
    }
    console.log(time)
    console.log(minutes)
    this.setState({
      price:price,
      time:time,
      players:players,
      date:date,
      signature:signature,
      minutes:minutes,
      hour:hour,
    })
  
  }

  render() {
    const {price,signature,date,players,time,hour,minutes} = this.state;
    var todaysDate = new Date();
    function convertDate(date) {
      var yyyy = date.getFullYear().toString();
      var mm = (date.getMonth()+1).toString();
      var dd  = (date.getDate()+1).toString();
      var mmChars = mm.split('');
      var ddChars = dd.split('');
      return yyyy + '-' + (mmChars[1]?mm:"0"+mmChars[0]) + '-' + (ddChars[1]?dd:"0"+ddChars[0]);
    }
    var tomorrow =convertDate(todaysDate);

    return (
      <div className=" container booking">
        <h1>Realiza tu Reserva sin ningún costo Adicional </h1>
        <form onChange={this.getPrice} > 
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
              <h3 className="booking__subtitle">Selecciona la Fecha y Hora:</h3>
              <input className="booking__inputBox" id="date" min={`${tomorrow}`} type="date"></input>
              <select className="booking__inputBox" id="hour" name="players">
                <option  value="">Hora de Reserva</option>
                <option  value="10:00 AM">10:00 AM</option>
                <option  value="10:30 AM">10:30 AM</option>
                <option  value="10:45 AM">11:00 AM</option>
                <option  value="11:00 AM">11:30 AM</option>
                <option  value="12:05 AM">12:00 AM</option>
                <option  value="12:30 AM">12:30 AM</option>
                <option  value="01:00 PM">01:00 PM</option>
                <option  value="01:30 PM">01:30 PM</option>
                <option  value="02:00 PM">02:00 PM</option>
                <option  value="02:30 PM">02:30 PM</option>
                <option  value="03:00 PM">03:00 PM</option>
                <option  value="03:30 PM">03:30 PM</option>
                <option  value="04:00 PM">04:00 PM</option>
                <option  value="04:30 PM">04:30 PM</option>
                <option  value="05:00 PM">05:00 PM</option>
                <option  value="05:30 PM">05:30 PM</option>
                <option  value="06:00 PM">06:00 PM</option>
                <option  value="06:30 PM">06:30 PM</option>
                <option  value="07:00 PM">07:00 PM</option>
                <option  value="07:30 PM">07:30 PM</option>
                <option  value="08:00 PM">08:00 PM</option>  
              </select>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <h3 className="booking__subtitle">Numero de Jugadores:</h3>
              <select className="booking__inputBox" id="players" name="players">
                <option value="">Numero de Jugadores</option>
                <option  value="1">1</option>
                <option  value="2">2</option>
                <option  value="3">3</option>
                <option  value="4">4</option>
                <option  value="5">5</option>
              </select>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <h3 className="booking__subtitle">Tiempo para cada Jugador:</h3>
              <select className="booking__inputBox"   id="minutes" name="minutes">
                <option value="">Tiempo para cada Jugador</option>
                <option  value="10000">15 Minutos</option>
                <option  value="18000">30 Minutos</option>
                <option  value="36000">60 Minutos</option>
                <option  value="52000">90 Minutos</option>
                <option  value="70000">120 Minutos</option>
              </select>
              </div>
            </div>
        </form>

      <center>
        {date !=="" && hour!=="" && minutes !=="" && players !=="" && price !==""  & time !=="" ? 
        <form method="post" action="https://checkout.payulatam.com/ppp-web-gateway-payu/">
            <input name="merchantId"    type="hidden"  value="545714"   />
            <input name="accountId"     type="hidden"  value="547913" />
            <input name="description"   type="hidden"  value={`Reserva el dia ${date} a las ${hour} para ${players} jugadores, tiempo ${time} minutos cada uno.`}   />
            <input name="referenceCode" type="hidden"  value="PagoReserva" />
            <input name="amount"        type="hidden"  value={`${price}`}   />
            <input name="tax"           type="hidden"  value="0"  />
            <input name="taxReturnBase" type="hidden"  value="0" />
            <input name="currency"      type="hidden"  value="COP" />
            <input name="signature"     type="hidden"  value={`${signature}`}  />
            <input name="Submit" className="booking__payButton" type="submit"  value="Pagar Reserva"/>
        </form>:""}
      </center>
      <p className="booking__termns">
                <b>Terminos y condiciònes al realizar una reserva:</b><br></br>
                Solo se realzara la reserva una vez completado el pago por la plataforma.<br></br> 
                Para pagos por efecty o baloto solo se realizara la reserva una vez se procese el pago en las ventanillas (sin costo adicional).<br></br>
                Se debe llegar 5 minutos antes de la hora en la que se realize la reserva .<br></br>
                En caso se no asistir o llegar tarde(10 minutos despues de la hora de la reserva) se cobara una multa del 10% sobre el monto 
                total de la reserva y se reajustara el dìa y la hora de la reserva con la administraciòn.<br></br>
                No se realizan reemsolsos de dinero los reembolsos se remiden por tiempo de juego.<br></br>
                
                </p>
      
        </div>
    );
  }
}

export default Booking;