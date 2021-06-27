import * as actions from './action_types';

export const addStep1 = (step1) => ({
  type: actions.STEP1_COMPLETED,
  payload: {
    name: step1.name,
    email: step1.email,
    password: step1.password,
    birthday: step1.birthday,
    passport: {
      serial: step1.passport.serial,
      dateOfIssue: step1.passport.dateOfIssue,
      issuingAuthority: step1.passport.issuingAuthority,
    },
    license: {
      serial: step1.license.serial,
      dateOfIssue: step1.license.dateOfIssue,
    }
  }
});

export const addStep2 = (step2) => ({
  type: actions.STEP2_COMPLETED,
  payload: {
    profileImage: step2.profileImage
  }
});

export const addStep3 = (step3) => ({
  type: actions.STEP3_COMPLETED,
  payload: {
    documentPhotos: step3.documentPhotos
  }
});




// {
//   id: Number,
//   name: String,
//    email: String,
//    password: String,
//    birthday: Date,
//    passport: {
//      serial: String,
//      dateOfIssue: Date,
//      issuingAuthority: String
//    },
//    license: {
//      serial: String,
//      dateOfIssue: Date,
//    },
    // profileImage: ArrayBuffer,
    // documentPhotos: <ArrayBuffer>
// }
