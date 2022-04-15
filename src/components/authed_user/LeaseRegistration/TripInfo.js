import React from 'react';

import "~/styles/authed_user/lease_registration/additional/trip_info.scss";

export default function TripInfo({onChange, tripInfo, minPeriodFrom, minPeriodTo}) {

  function handeOnChange(e) {
    console.log(minPeriodTo);
    onChange(e);
  }

  return (
    <div className="trip-info">
      <div className="trip-info_container">
        <div className="trip-info_container_period_from_p_div">
          <p>Rental period (from)</p>
        </div>
        <div className="trip-info_container_period_from_input_div">
          <input id="period_from" type="date" value={tripInfo.period_from} min={minPeriodFrom} max={tripInfo.period_to} onChange={handeOnChange} />
        </div>

        <div className="trip-info_container_period_to_p_div">
          <p>Rental period (to)</p>
        </div>
        <div className="trip-info_container_period_to_input_div">
          <input id="period_to" type="date" value={tripInfo.period_to} min={minPeriodTo} onChange={handeOnChange} />
        </div>

        <div className="trip-info_container_plans_p_div">
          <p>Travel plans</p>
        </div>
        <div className="trip-info_container_plans_input_div">
          <textarea id="textarea" value={tripInfo.textarea} placeholder="Describe your travel plans to the car owner (minimum 15 characters)" onChange={handeOnChange} ></textarea>
        </div>
      </div>
    </div>
  )
}
