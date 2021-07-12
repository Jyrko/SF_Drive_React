import React, { useEffect, useState } from 'react';

import validateUser from '~/functions/validateUser';

export default function Loading(props) {
  const { loading, children } = props;
  return (
    <>
      { loading ?
        <>

        </>
        :
        <>
          { children }
        </>
      }

    </>
  )
}
