import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';

import Header from '~/components/nav/Header';

import validateUser from '~/functions/validateUser';
import Loading from '~/components/Loading';


import Step1 from '~/redux/containers/addNewCar/Step1';
import Step2 from '~/redux/containers/addNewCar/Step2';
import Step3 from '~/redux/containers/addNewCar/Step3';
import Step4 from '~/redux/containers/addNewCar/Step4';

import Confirmation from './Confirmation';

import '~/styles/singup_page/base.scss';
import "~/styles/authed_user/add_new_car/add_new_car.scss"

const AddNewCar = (props) => {

  const [step, setStep] = useState(0);

  const [isLogined, setIsLogined] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    setLoading(true);
    const isValid = await validateUser();
    setIsLogined(isValid);
    setLoading(false)
  }, [])

  function callbackFunction(isValidStep, numOfStep) {
    setStep(numOfStep+1)
    console.log(`Yo, this step is ${numOfStep} and it is ${isValidStep}, pal!`);
  }

  function currentStepH2(numOfStep) {
    switch (numOfStep) {
      case 0:
        return <h2>Новый автомобиль</h2>
      case 1:
        return <h2>Дополнительно</h2>
      case 2:
        return <h2>Фото автомобиля</h2>
      case 3:
        return <h2>Фото документов</h2>
      default:
        return <div/>
    }
  }

  function currentStep(numOfStep) {
    switch (numOfStep) {
      case 0:
        return <Step1 parentCallback={callbackFunction}/>
      case 1:
        return <Step2 parentCallback={callbackFunction}/>
      case 2:
        return <Step3 parentCallback={callbackFunction}/>
      case 3:
        return <Step4 parentCallback={callbackFunction}/>
      default:
        return <div/>
    }
  }

  return (
    <div>
      <Loading loading={loading}>
        { isLogined ?
            (step < 4)
            ? <>
            <Header />
            <p className="step_p">Шаг {step+1} из 4</p>
            {currentStepH2(step)}
            </>
            : <Confirmation />
          : <Redirect to="/" />
        }
        { (step === 0)
          ? <Step1 parentCallback={callbackFunction}/>
          : currentStep(step)
        }
      </Loading>
    </div>
  )
}

export default AddNewCar;
