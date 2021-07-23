import * as actions from "./action_types";

export const addCarStep1 = (step1) => ({
  type: actions.STEP1_CAR_COMPLETED,
  payload: {
    specs: {
      manufacturer: step1.manufacturer,
      model: step1.model,
      yearOfProduction: step1.yearOfProduction,
      vehicleRegistrationPlate: step1.vehicleRegistrationPlate,
      vinNumber: step1.vinNumber,
      color: step1.color,
      engineType: step1.engineType,
      engineDisplacement: step1.engineDisplacement,
      engineHp: step1.engineHp,
      transmissionType: step1.transmissionType,
      wheelDrive: step1.wheelDrive,
      vehicleType: step1.vehicleType,
      mileage: step1.mileage,
      vehiclePassportSerial: step1.vehiclePassportSerial,
      stsSerial: step1.stsSerial
    },
    rentInfo: {
      regularPrice: step1.regularPrice,
      threeDayRentPrice: step1.threeDayRentPrice,
      fiveDayPlusRentPrice: step1.fiveDayPlusRentPrice
    },
    insurance: {
      osagoSerial: step1.osagoSerial,
      kaskoSerial: step1.kaskoSerial
    }
  }
});

export const addCarStep2 = (step2) => ({
  type: actions.STEP2_CAR_COMPLETED,
  payload: {
    options: {
      airConditioner: step1.airConditioner,
      airBags: step1.airBags,
      bluetooth: step1.bluetooth,
      cruiseControl: step1.cruiseControl,
      multimedia: step1.multimedia,
      navigationSys: step1.navigationSys,
      IsofixFastening: step1.IsofixFastening,
      heater: step1.heater,
      seatHeater: step1.seatHeater,
      seatVent: step1.seatVent,
      rearCam: step1.rearCam,
      roofRack: step1.roofRack,
      parktronic: step1.parktronic
    },
    services: {
      babySeat: step1.babySeat,
      carDelivery: step1.carDelivery,
      endInAnyPlace: step1.endInAnyPlace,
      fullTank: step1.fullTank
    }
  }
});

export const addCarStep3 = (step3) => ({
  type: actions.STEP3_CAR_COMPLETED,
  payload: {
    carPhotos: step3.carPhotos
  }
})

export const addCarStep4 = (step4) => ({
  type: actions.STEP4_CAR_COMPLETED,
  payload: {
    documentPhotos: step4.documentPhotos
  }
});
