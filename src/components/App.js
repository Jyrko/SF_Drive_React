import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from './about_us_page/About';
import Faq from './faq_page/Faq';
import Singup from './singup_page/Singup';
import Home from './home_page/HomePage.js';
//https://stackoverflow.com/questions/61767538/devtools-failed-to-load-sourcemap-for-webpack-node-modules-js-map-http-e

////////
import RentCarMain from '~/components/authed_user/rent_car_search_page/RentCarMain';
/////


import '../styles/header.scss';
import '../styles/footer.scss';
import '~/styles/fonts.scss';
import '~/styles/normalize.scss';

const App = (props) => {
  return (
    <div className="App">
      <Switch>
        <Route path="/authed/main">
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
        <Route path="/">
          <About />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
