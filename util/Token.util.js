import * as SecureStorage from "expo-secure-store";
import jwtDecode from "jwt-decode";


const USER_KEY = "evidyadaan-user"

export function decodeJWT(jwt) {
  return jwtDecode(jwt);
}

export function setToStore(jwt) {
  return  SecureStorage.setItemAsync(USER_KEY, jwt)
}

export function getFromStore(jwt) {
    return SecureStorage.getItemAsync(USER_KEY)
}

export function deleteFromStore() {
  return SecureStorage.deleteItemAsync(USER_KEY)
}