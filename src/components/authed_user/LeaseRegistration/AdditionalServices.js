import React, { useEffect, useRef } from 'react';

import RoundSwitch from "~/components/authed_user/RoundSwitch";

import "~/styles/authed_user/lease_registration/additional/additional_services.scss";
import { CAR_SERVICES_USER_ARRAY } from "~/carServices";

export default function AdditionalServices({ carSelectedServices, onServiceChange }) {
  const userOptions = useRef([]);

  function optionsChecker() {
    let index = 0;
    for (let service in carSelectedServices) {
      const serviceValue = carSelectedServices[service];
      if(serviceValue) {
        userOptions.current.push(CAR_SERVICES_USER_ARRAY[index]);
      }
      index++;
    }
  }

  useEffect(() => {
    optionsChecker();
  }, [])

  function additionalServicesChangeHandler(e, serviceId) {
    onServiceChange(e, serviceId)
  }

  const AdditionalService = (option) => (
      <div key={option.id} className="additional-services_wrapper_service">
        <div className="additional-services_wrapper_service_info">
          <p className="additional-services_wrapper_service_info_title">{option.title}</p>
          <p className="additional-services_wrapper_service_info_desc">{option.text}</p>
        </div>

        <div className="additional-services_wrapper_service_price_div">
          <p className="additional-services_wrapper_service_price_div_price">{option.price} UAH</p>
        </div>

        <div className="additional-services_wrapper_service_switch">
          <RoundSwitch onChange={(e) => additionalServicesChangeHandler(e, option.id)}/>
        </div>

      </div>
  );

  return (
    <div className="additional-services">
      <div className="additional-services_wrapper">
        {userOptions.current.map((option, index) => AdditionalService(option))}
      </div>
    </div>
  )
}
