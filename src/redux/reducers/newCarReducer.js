import * as actions from '../actions/action_types';

let lastId = 0;
export const newCarReducer = (state = [], action) => {
  switch (action.type) {
    case actions.STEP1_CAR_COMPLETED:
      return [
        ...state,
        {
          id: ++lastId,
          specs: {
            manufacturer: action.payload.specs.manufacturer,
            model: action.payload.specs.model,
            yearOfProduction: action.payload.specs.yearOfProduction,
            vehicleRegistrationPlate: action.payload.specs.vehicleRegistrationPlate,
            vinNumber: action.payload.specs.vinNumber,
            color: action.payload.specs.color,
            engineType: action.payload.specs.engineType,
            engineDisplacement: action.payload.specs.engineDisplacement,
            engineHp: action.payload.specs.engineHp,
            transmissionType: action.payload.specs.transmissionType,
            wheelDrive: action.payload.specs.wheelDrive,
            vehicleType: action.payload.specs.vehicleType,
            mileage: action.payload.specs.mileage,
            vehiclePassportSerial: action.payload.specs.vehiclePassportSerial,
            stsSerial: action.payload.specs.stsSerial
          },
          rentInfo: {
            regularPrice: action.payload.rentInfo.regularPrice,
            threeDayRentPrice: action.payload.rentInfo.threeDayRentPrice,
            fiveDayPlusRentPrice: action.payload.rentInfo.fiveDayPlusRentPrice
          },
          insurance: {
            osagoSerial: action.payload.insurance.osagoSerial,
            kaskoSerial: action.payload.insurance.kaskoSerial
          }
        }
      ]

    case actions.STEP2_CAR_COMPLETED:
      return state.map(car => car.id === lastId ? {
        ...car,
        options: {
          airConditioner: action.payload.options.airConditioner,
          airBags: action.payload.options.airBags,
          bluetooth: action.payload.options.bluetooth,
          cruiseControl: action.payload.options.cruiseControl,
          multimedia: action.payload.options.multimedia,
          navigationSys: action.payload.options.navigationSys,
          IsofixFastening: action.payload.options.IsofixFastening,
          heater: action.payload.options.heater,
          seatHeater: action.payload.options.seatHeater,
          seatVent: action.payload.options.seatVent,
          rearCam: action.payload.options.rearCam,
          roofRack: action.payload.options.roofRack,
          parktronic: action.payload.options.parktronic
        },
        services: {
          babySeat: action.payload.services.babySeat,
          carDelivery: action.payload.services.carDelivery,
          endInAnyPlace: action.payload.services.endInAnyPlace,
          fullTank: action.payload.services.fullTank
        }
      }
      : car);
    case actions.STEP3_CAR_COMPLETED:
      return state.map(car => car.id === lastId ? {...car, carPhotos: action.payload.carPhotos} : car);

    case actions.STEP4_CAR_COMPLETED:
      return state.map(car => car.id === lastId ? {...car, documentPhotos: action.payload.documentPhotos} : car);

    default: return state;
  }
};
