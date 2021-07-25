import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import Loading from '~/components/Loading';
import Header from '~/components/nav/Header';
import Footer from '~/components/Footer';
import CarSearch from '~/components/authed_user/CarSearch';

import validateUser from "~/functions/validateUser";

export default function CarSearchResults() {
  const [isLogined, setIsLogined] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    setLoading(true);
    const isValid = await validateUser();
    setIsLogined(isValid);
    setLoading(false)
  }, [])

  return (
    <Loading loading={loading}>
      { isLogined ?
        <>
          <Header />
          <CarSearch />
          <Footer />
        </>
        : <Redirect to="/" />
      }
    </Loading>
  )
}
