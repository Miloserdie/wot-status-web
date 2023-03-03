import axios from "axios";
import {ClanReserves} from "../types";

type NewUserData = {
    expires_at: number,
    account_id: number,
    access_token: string
};

export const getNewUserDataReq = async (currentToken: string): Promise<NewUserData> => {
    try {
        const wotNewTokenUrl = `https://api.worldoftanks.eu/wot/auth/prolongate/?application_id=347cc9362aafc608559e5892b8e8b98f`;

        const {data} = await axios.post(wotNewTokenUrl, {
            access_token: currentToken,
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        });

        return data.data;
    } catch (error) {
        return Promise.reject(error);
    }
};

export const getClanReservesReq = async (accessToken: string): Promise<ClanReserves[]> => {
    try {
        const clanReservesUrl = `https://api.worldoftanks.eu/wot/stronghold/clanreserves/?application_id=347cc9362aafc608559e5892b8e8b98f`;

        const {data} = await axios.get(clanReservesUrl, {
            params: {
                access_token: accessToken,
            }
        });

        return data.data;
    } catch (error) {
        return Promise.reject(error);
    }
};

export const logOutReq = async (accessToken: string) => {
        try {
            const logOutUrl = 'https://api.worldoftanks.eu/wot/auth/logout/?application_id=347cc9362aafc608559e5892b8e8b98f';

            await axios.post(logOutUrl, {
                access_token: accessToken
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            });
        } catch (error) {
            return Promise.reject(error);
        }
};

export const activateClanReserveReq = async (accessToken: string, reserveLevel: number, reserveType: string) => {
    try {
        const activateReserveUrl = 'https://api.worldoftanks.eu/wot/stronghold/activateclanreserve/?application_id=347cc9362aafc608559e5892b8e8b98f';

        await axios.post(activateReserveUrl, {
            access_token: accessToken,
            reserve_level: reserveLevel,
            reserve_type: reserveType
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        });
    } catch (error) {
        return Promise.reject(error);
    }
};


export type ClanData = {
    role: string,
    clan: {
        name: string,
        tag: string,
        clan_id: number,
        emblems: {
            x64: {
                portal: string
            }
        }
    }
}

export const getUserClanInfoReq = async (accountId: number): Promise<ClanData> => {
    try {
        const userRoleUrl = 'https://api.worldoftanks.eu/wot/clans/accountinfo/?application_id=347cc9362aafc608559e5892b8e8b98f'

        const {data} = await axios.get(userRoleUrl, {
            params: {
                account_id: accountId,
            }
        });

        return data.data[accountId];
    } catch (error) {
        return Promise.reject(error);
    }
};