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
