import {UserData} from "../types";

export function useStorage(): UserData {
    return JSON.parse(localStorage.getItem('userData') || `{}`);
}