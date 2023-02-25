import {UserData} from "../types";

export function getLocalStorage(): UserData {
    return JSON.parse(localStorage.getItem('userData') || `{}`);
}