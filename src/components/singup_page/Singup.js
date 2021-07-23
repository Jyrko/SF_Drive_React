import React, {useState} from 'react';
import {Switch} from 'react-router-dom';

import Header from '../nav/Header';

import Step1 from '~/redux/containers/singup/Step1';
import Step2 from '~/redux/containers/singup/Step2';
import Step3 from '~/redux/containers/singup/Step3';
import Confirmation from '~/redux/containers/singup/Confirmation';

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
        return <div/>
    }
  }

  return (
    <div>
      { (step < 3)
        ? <>
        <Header />
        <p className="step_p">Шаг {step+1} из 3</p>
        </>
        : <Confirmation />
      }
      { (step === 0)
        ? <Step1 parentCallback={callbackFunction}/>
        : currentStep(step)
      }
    </div>
  )
}

export default Singup;
