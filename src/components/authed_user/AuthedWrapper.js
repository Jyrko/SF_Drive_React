import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import validateUser from '~/functions/validateUser';

export default function AuthedWrapper(props) {
  const [isValidUser, setIsValidUser] = useState(false);

  useEffect(async () => {
    let cleanupFunction = false;
    if (!cleanupFunction) {
      const isValid = await validateUser();
      setIsValidUser(isValid);
    }

    return () => cleanupFunction = true;
  }, []);
  return (
    <>
      { isValidUser
        ? props.children
        : <Route path="*" element={<Navigate replace to="/" />} />}
    </>
  )
}
