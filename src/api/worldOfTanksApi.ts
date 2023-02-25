import axios from "axios";
import {IndividualPlayer} from "../types";

export const getNewUserTokenReq = async (currentToken: string) => {
    try {
        const wotNewTokenUrl = `https://api.worldoftanks.eu/wot/auth/prolongate/?application_id=347cc9362aafc608559e5892b8e8b98f`;

        const {data} = await axios.post(wotNewTokenUrl, {
            access_token: currentToken,
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        })

        return data;
    } catch (error) {
        return Promise.reject(error);
    }
}

type PlayersResSuccess = {
    status: string,
    meta: {
        count: number,
    },
    data: [IndividualPlayer],
}


export const getGlobalPlayersReq = async (nickname: string): Promise<PlayersResSuccess> => {
    try {
        const playersSearchUrl = `https://api.worldoftanks.eu/wot/account/list/?application_id=347cc9362aafc608559e5892b8e8b98f`

        const {data} = await axios.get(playersSearchUrl, {
            params: {
                search: nickname,
                limit: '10'
            }
        });

        return data;
    } catch (error) {
        return Promise.reject(error);
    }
}