import React from 'react';

import Header from '../Header';
import Step1 from './Step1';

import '~/styles/singup_page/base.scss';

const Singup = (props) => {
  let step = 1;

  return (
    <>
      <Header />
      <section className="singup_section">
        <p className="singup_section_step">Шаг {step} из 3</p>
        <h2>Расскажите о себе</h2>
        <Step1 />
      </section>
    </>
  );
}

export default Singup;
