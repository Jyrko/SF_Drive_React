import React from 'react';

import airConditioner from "~/assets/svg/authed/car_options/air_cond.svg";
import airBags from "~/assets/svg/authed/car_options/airbags.svg";
import aux from "~/assets/svg/authed/car_options/aux.svg";
import bluetooth from "~/assets/svg/authed/car_options/bluetooth.svg";
import cruiseControl from "~/assets/svg/authed/car_options/cruise_control.svg";
import heater from "~/assets/svg/authed/car_options/heater.svg";
import IsofixFastening from "~/assets/svg/authed/car_options/losfix_fastening.svg";
import multimedia from "~/assets/svg/authed/car_options/multimedia.svg";
import navigationSys from "~/assets/svg/authed/car_options/navigation_sys.svg";
import parktronic from "~/assets/svg/authed/car_options/parktronic.svg";
import rearCam from "~/assets/svg/authed/car_options/rear_cam.svg";
import roofRack from "~/assets/svg/authed/car_options/roof_rack.svg";
import seatHeater from "~/assets/svg/authed/car_options/seat_heater.svg";
import seatVent from "~/assets/svg/authed/car_options/seat_vent.svg";

import "~/styles/authed_user/car_card/car_options.scss";

export default function CarOptions({ options }) {

  function optionCreator(svg, optionText, index) {
    return (
      <div key={index} className="car_options_container_option">
        <img className="car_options_container_option_image" src={svg} alt="car option" />
        <p className="car_options_container_option_desc">{optionText}</p>
      </div>
    )
  }

  return (
    <div className="car_options">
      <div className="car_options_container">
        {options.map((option, index) => {
              switch(option) {
                case "airConditioner":
                  return optionCreator(airConditioner, "Кондиционер", index);
                case "airBags":
                  return optionCreator(airBags, "Подушки безопасности", index);
                case "aux":
                  return optionCreator(aux, "AUX-кабель", index);
                case "bluetooth":
                  return optionCreator(bluetooth, "Поддержка Bluetooth", index);
                case "cruiseControl":
                  return optionCreator(cruiseControl, "Круиз-контроль", index);
                case "multimedia":
                  return optionCreator(multimedia, "Мультимедия", index);
                case "navigationSys":
                  return optionCreator(navigationSys, "Навигация", index);
                case "losfixFastening":
                  return optionCreator(IsofixFastening, "Крепления Isofix", index);
                case "heater":
                  return optionCreator(heater, "Автономный подогреватель", index);
                case "seatHeater":
                  return optionCreator(seatHeater, "Подогрев сидений", index);
                case "seatVent":
                  return optionCreator(seatVent, "Вентиляция сидений", index);
                case "rearCam":
                  return optionCreator(rearCam, "Камера заднего вида", index);
                case "roofRack":
                  return optionCreator(roofRack, "Багажник на крыше", index);
                case "parktronic":
                  return optionCreator(parktronic, "Парктроники", index);
                default:
                  return <></>
              }

            }
          )
        }
      </div>
    </div>
  )
}
