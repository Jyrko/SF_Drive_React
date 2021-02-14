import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from './about_us_page/About'
import Faq from './faq_page/Faq'

const App = (props) => {
  return (
    <div className="App">
      <Switch>
        <Route path="/faq">
          <Faq />
        </Route>
        <Route path="/">
          <About />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
