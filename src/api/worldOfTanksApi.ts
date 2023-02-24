import axios from "axios";

const wotAuthUrl = 'https://api.worldoftanks.eu/wot/auth/login/?application_id=347cc9362aafc608559e5892b8e8b98f&display=popup';

export interface UserReqOk {
    status: string,
    access_token: string,
    nickname: string,
    account_id: string,
    expires_at: string
}

export interface UserReqError {
    status: string,
    message: string,
    code: string
}

const getWotAuthInfoReq = async (): Promise<UserReqOk | UserReqError> => {
    const {data} = await axios.get(wotAuthUrl);

    console.log(data)
    return data;
}

export default getWotAuthInfoReq;