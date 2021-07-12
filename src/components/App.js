import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import validateUser from '~/functions/validateUser';

import About from './about_us_page/About';
import Faq from './faq_page/Faq';
import Singup from './singup_page/Singup';
import Home from './home_page/HomePage.js';
import Loading from './Loading';

////////
import RentCarMain from '~/components/authed_user/RentCarMain';
/////


import '../styles/header.scss';
import '../styles/footer.scss';
import '~/styles/fonts.scss';
import '~/styles/normalize.scss';

const App = (props) => {
  const [validUser, setValidUser] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    setLoading(true);
    const isValidUser = validateUser();
    setValidUser(isValidUser)
    setLoading(false);
  }, [])

  return (
    <div className="App">
      <Loading loading={loading}>
        <Switch>
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
      </Loading>
    </div>
  )
}

export default App;
