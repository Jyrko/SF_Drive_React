import React from 'react';

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
