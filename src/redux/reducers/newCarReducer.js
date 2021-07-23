import * as actions from '../actions/action_types';

let lastId = 0;
export const newCarReducer = (state = [], action) => {
  switch (action.type) {
    case actions.STEP1_CAR_COMPLETED:
      return [
        ...state,
        {
          id: ++lastId,
          name: action.payload.name,
          email: action.payload.email,
          password: action.payload.password,
          birthday: action.payload.birthday,
          passport: {
            serial: action.payload.passport.serial,
            dateOfIssue: action.payload.passport.dateOfIssue,
            issuingAuthority: action.payload.passport.issuingAuthority,
          },
          license: {
            serial: action.payload.license.serial,
            dateOfIssue: action.payload.license.dateOfIssue,
          }
        }
      ]

    case actions.STEP2_CAR_COMPLETED:
      return state.map(car => car.id === lastId ? {
        ...car,
        options: {
          airConditioner: action.payload.airConditioner,
          airBags: action.payload.airBags,
          bluetooth: action.payload.bluetooth,
          cruiseControl: action.payload.cruiseControl,
          multimedia: action.payload.multimedia,
          navigationSys: action.payload.navigationSys,
          IsofixFastening: action.payload.IsofixFastening,
          heater: action.payload.heater,
          seatHeater: action.payload.seatHeater,
          seatVent: action.payload.seatVent,
          rearCam: action.payload.rearCam,
          roofRack: action.payload.roofRack,
          parktronic: action.payload.parktronic
        },
        services: {
          babySeat: action.payload.babySeat,
          carDelivery: action.payload.carDelivery,
          endInAnyPlace: action.payload.endInAnyPlace,
          fullTank: action.payload.fullTank
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
