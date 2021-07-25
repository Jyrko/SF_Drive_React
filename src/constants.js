export const HOSTNAME = "http://localhost:8000";

//JWT Storage
export const ACCESS_TOKEN_KEY = "accessToken";
export const REFRESH_TOKEN_KEY = "refreshToken";

//Headers
export const POST_HEADERS = {
  "Accept": "application/json",
  "Content-Type": "application/json"
};

export const POST_HEADERS_FORMDATA = {
  "Accept": "application/json",
  "Content-Type": "multipart/form-data"
}

export const POST_HEADERS_AUTHED_FORMDATA = {
  "Accept": "application/json",
  "Authorization": `Bearer ${sessionStorage.getItem(ACCESS_TOKEN_KEY)}`
}

//USER Info
export const USER_FULLNAME_KEY = "userFullname";
export const USER_ID_KEY = "userId";

//MOCK CAR INFO
export const MOCK_CAR = {
    "_id": "60fbfb2bf8b6c9126dee46ad",
    "ownerId": "60f70be433e31925d9a84fe4",
    "specs": {
        "manufacturer": "---",
        "model": "---",
        "yearOfProduction": "---",
        "vehicleRegistrationPlate": "---",
        "vinNumber": "---",
        "color": "---",
        "engineType": "---",
        "engineDisplacement": "---",
        "engineHp": "---",
        "transmissionType": "---",
        "wheelDrive": "---",
        "vehicleType": "---",
        "mileage": "---",
        "vehiclePassportSerial": "---",
        "stsSerial": "---"
    },
    "rentInfo": {
        "regularPrice": "---",
        "threeDayRentPrice": "---",
        "fiveDayPlusRentPrice": "---"
    }
};

//MOCK IMAGES
export const NO_IMAGE_AVAILABLE = `${HOSTNAME}/files/No_Image_Available.jpg`;
