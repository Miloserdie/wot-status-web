import moment from "moment/moment";
import {getLocalStorage} from "./getLocalStorage";

export function checkAuth(): boolean {
    const userStorage = getLocalStorage();

    return !(!userStorage.access_token || moment().diff(userStorage.expires_at * 1000, "days") > 13);
}