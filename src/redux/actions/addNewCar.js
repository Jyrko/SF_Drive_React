import * as actions from "./action_types";

export const addCarStep1 = (step1) => ({
  type: actions.STEP1_CAR_COMPLETED,
  payload: {
    specs: {
      manufacturer: step1.specs.manufacturer,
      model: step1.specs.model,
      yearOfProduction: step1.specs.yearOfProduction,
      vehicleRegistrationPlate: step1.specs.vehicleRegistrationPlate,
      vinNumber: step1.specs.vinNumber,
      color: step1.specs.color,
      engineType: step1.specs.engineType,
      engineDisplacement: step1.specs.engineDisplacement,
      engineHp: step1.specs.engineHp,
      transmissionType: step1.specs.transmissionType,
      wheelDrive: step1.specs.wheelDrive,
      vehicleType: step1.specs.vehicleType,
      mileage: step1.specs.mileage,
      vehiclePassportSerial: step1.specs.vehiclePassportSerial,
      stsSerial: step1.specs.stsSerial
    },
    rentInfo: {
      regularPrice: step1.rentInfo.regularPrice,
      threeDayRentPrice: step1.rentInfo.threeDayRentPrice,
      fiveDayPlusRentPrice: step1.rentInfo.fiveDayPlusRentPrice
    },
    insurance: {
      osagoSerial: step1.insurance.osagoSerial,
      kaskoSerial: step1.insurance.kaskoSerial
    }
  }
});

export const addCarStep2 = (step2) => ({
  type: actions.STEP2_CAR_COMPLETED,
  payload: {
    options: {
      airConditioner: step2.options.airConditioner,
      airBags: step2.options.airBags,
      bluetooth: step2.options.bluetooth,
      cruiseControl: step2.options.cruiseControl,
      multimedia: step2.options.multimedia,
      navigationSys: step2.options.navigationSys,
      IsofixFastening: step2.options.IsofixFastening,
      heater: step2.options.heater,
      seatHeater: step2.options.seatHeater,
      seatVent: step2.options.seatVent,
      rearCam: step2.options.rearCam,
      roofRack: step2.options.roofRack,
      parktronic: step2.options.parktronic
    },
    services: {
      babySeat: step2.services.babySeat,
      carDelivery: step2.services.carDelivery,
      endInAnyPlace: step2.services.endInAnyPlace,
      fullTank: step2.services.fullTank
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
