// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Components
import App from './components/App';
import Home from './components/Home/Home';
import Error404 from './components/Error404/Error404';
import About from './components/About/About';
import Games from './components/Games/';
import GamesIndividual from './components/GamesIndividual/';
import Prices from './components/Prices/Prices';
import Booking from './components/Booking/Booking';
import Discounts from './components/Discounts/Discounts';
import GiftCards from './components/GiftCards/GiftCards';
import Contact from "./components/Contact/Contact";

const AppRoutes = () => (
    <App>
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/nosotros" component={About} exact />
            <Route path="/catalogo" component={Games} exact />
            <Route path="/juego/:id" component={GamesIndividual} exact />
            <Route path="/precios" component={Prices} exact />
            <Route path="/reservas" component={Booking} exact />
            <Route path="/descuentos" component={Discounts} exact />
            <Route path="/giftcards" component={GiftCards} exact />
            <Route path="/contacto" component={Contact} exact />
            <Route component={Error404} />
        </Switch>
    </App>
);
export default AppRoutes;