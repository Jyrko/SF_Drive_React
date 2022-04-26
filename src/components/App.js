import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

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
      <Routes>
        <Route path="/authed/my-cars/add-new" element={<AddNewCar />} />
        <Route path="/authed/car-search-results" element={<CarSearchResults />} />
        <Route path="/authed/land-lord-profile" element={<LandLordProfile />} />
        <Route path="/authed/messages" element={<Messages/>} />
        <Route path="/authed/my-cars" element={<MyCars />} />
        <Route path="/authed" element={<RentCarMain />} />
        <Route path="/singup" element={<Singup />} />

        <Route path="/faq" element={<Faq />} />
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<About />} />
      </Routes>
    </div>
  )
}

export default App;
