import React from 'react';

import "~/styles/authed_user/lease_registration/additional/trip_info.scss";

export default function TripInfo({car}) {
  return (
    <div className="trip-info">
      <div className="trip-info_container">
        <div className="trip-info_container_period_from_p_div">
          <p>Период аренды (от)</p>
        </div>
        <div className="trip-info_container_period_from_input_div">
          <input type="date" />
        </div>

        <div className="trip-info_container_period_to_p_div">
          <p>Период аренды (до)</p>
        </div>
        <div className="trip-info_container_period_to_input_div">
          <input type="date" />
        </div>

        <div className="trip-info_container_plans_p_div">
          <p>Планы на поездку</p>
        </div>
        <div className="trip-info_container_plans_input_div">
          <textarea placeholder="Опишите свои планы на поездку для вледельца автомобиля"></textarea>
        </div>
      </div>
    </div>
  )
}
