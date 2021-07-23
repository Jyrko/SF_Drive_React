import * as actions from '../actions/action_types';

let lastId = 0;
export const registrationReducer = (state = [], action) => {
  switch (action.type) {
    case actions.STEP1_COMPLETED:
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
    case actions.STEP2_COMPLETED:
      return state.map(user => user.id === lastId ? {...user, profileImage: action.payload.profileImage} : user);

    case actions.STEP3_COMPLETED:
      return state.map(user => user.id === lastId ? {...user, documentPhotos: action.payload.documentPhotos} : user);
    default: return state;
  }
};
