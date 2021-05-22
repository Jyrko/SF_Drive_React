import React, {useState} from 'react';
import {Switch} from 'react-router-dom';

import Header from '../Header';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

import '~/styles/singup_page/base.scss';
import '~/styles/singup_page/step1.scss';
import '~/styles/singup_page/step2.scss';
import '~/styles/singup_page/step3.scss';

const Singup = (props) => {
  const [step, setStep] = useState(0)

  function callbackFunction(isValidStep, numOfStep) {
    setStep(numOfStep+1)
    console.log(`Yo, this step is ${numOfStep} and it is ${isValidStep}, pal!`);
  }

  function currentStep(numOfStep) {
    switch (numOfStep) {
      case 0:
        return <Step1 parentCallback={callbackFunction}/>
      case 1:
        return <Step2 parentCallback={callbackFunction}/>
      case 2:
        return <Step3 parentCallback={callbackFunction}/>
      default:
        return <Step1 parentCallback={callbackFunction}/>
    }
  }

  return (
    <div>
      <Header />
      <p className="step_p">Шаг {step+1} из 3</p>
      { (step === 0)
        ? <Step2 parentCallback={callbackFunction}/>
        : currentStep(step)
      }
    </div>
  )
}

export default Singup;