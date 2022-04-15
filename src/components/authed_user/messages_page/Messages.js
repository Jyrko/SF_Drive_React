import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import Loading from '~/components/Loading';
import Header from '~/components/nav/Header';

import validateUser from "~/functions/validateUser";

export default function Messages() {
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
        <section className="messages_section">
          <h2>Messages</h2>
          <h4>In development...</h4>
        </section>
        </>
        : <Redirect to="/" />
      }
    </Loading>
  )
}
