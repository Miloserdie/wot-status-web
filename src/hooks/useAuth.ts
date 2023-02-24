import moment from "moment/moment";
import {UserData} from "../types";

export function useAuth(): boolean {
    const userData: UserData = JSON.parse(localStorage.getItem('userData') || `{}`);

    return !(!userData.access_token || moment().diff(+userData.expires_at * 1000, "days") > 13);
}