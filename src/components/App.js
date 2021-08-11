import React, { useEffect, useState } from 'react';
import { Route, Switch} from 'react-router-dom';

import About from './about_us_page/About';
import Faq from './faq_page/Faq';
import Singup from './singup_page/Singup';
import Home from './home_page/HomePage.js';

////////Authed User
import RentCarMain from '~/components/authed_user/RentCarMain';
import MyCars from "~/components/authed_user/MyCars";
import AddNewCar from "~/components/authed_user/add_new_car/AddNewCar";
import Messages from "~/components/authed_user/messages_page/Messages";
import CarSearchResults from '~/components/authed_user/CarSearchResults';
import LandLordProfile from "~/components/authed_user/profile/LandLordProfile"
/////


import '../styles/header.scss';
import '../styles/footer.scss';
import '~/styles/fonts.scss';
import '~/styles/normalize.scss';

const App = (props) => {

  return (
    <div className="App">
      <Switch>
        <Route path="/authed/my-cars/add-new">
          <AddNewCar />
        </Route>
        <Route path="/authed/car-search-results">
          <CarSearchResults />
        </Route>
        <Route path="/authed/land-lord-profile">
          <LandLordProfile />
        </Route>
        <Route path="/authed/messages">
          <Messages />
        </Route>
        <Route path="/authed/my-cars">
          <MyCars />
        </Route>
        <Route path="/authed">
          <RentCarMain />
        </Route>
        <Route path="/singup">
          <Singup />
        </Route>
        <Route path="/faq">
          <Faq />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <About />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
