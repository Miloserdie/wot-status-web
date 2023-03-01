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
        })

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

export const getClanIdReq = async (accountId: string): Promise<number> => {
    try {
        const clanReservesUrl = `https://api.worldoftanks.eu/wot/account/info/?application_id=347cc9362aafc608559e5892b8e8b98f`;

        const {data} = await axios.get(clanReservesUrl, {
            params: {
                account_id: accountId,
            }
        });

        const clanId: number = data.data[accountId]?.clan_id;

        if (clanId) {
            return clanId;
        }

        return 0;
    } catch (error) {
        console.log(123)
        return Promise.reject(error);
    }
};

type ClanData = {
    leader_id: number,
    tag: string,
    creator_id: number,
    name: string
    emblems: ClanEmblem
    members : MemberData[]

};

type MemberData = {
    role: string,
    account_id: number
};

type ClanEmblem = {
    x32: {
        portal: string
    }
};


export const getClanInfoReq = async (clanId: number, accountId: number): Promise<ClanData> => {
    try {
        const clanInfoUrl = `https://api.worldoftanks.eu/wot/clans/info/?application_id=347cc9362aafc608559e5892b8e8b98f&=4545656465`;

        const {data} = await axios.get(clanInfoUrl, {
            params: {
                clan_id:  clanId
            }
        });

        return data.data[accountId];
    } catch (error) {
        return Promise.reject(error);
    }
};

export const logOutReq = async (accessToken: string) => {
        try {
            const logOutUrl = 'https://api.worldoftanks.eu/wot/auth/logout/?application_id=347cc9362aafc608559e5892b8e8b98f';

            await axios.post(logOutUrl, {
                access_token: accessToken
            });
        } catch (error) {
            return Promise.reject(error);
        }
};

export const activateClanReserveReq = async (accessToken: string, reserveLevel: number, reserveType: string) => {
    try {
        const activateReserveUrl = 'https://api.worldoftanks.eu/wot/stronghold/activateclanreserve/?application_id=347cc9362aafc608559e5892b8e8b98f&access_token=12321&reserve_level=3123&reserve_type=1233';

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
}