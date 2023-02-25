import React, {useEffect} from 'react';
import Navigation from "../Navigation";
import {Navigate, Route, Routes} from "react-router-dom";
import SearchPlayers from "../SearchPlayers";
import moment from "moment";
import {getLocalStorage} from "../../utils/getLocalStorage";
import {getNewUserTokenReq} from "../../api/worldOfTanksApi";
import {UserData} from "../../types";

const Account = () => {
    const userStorage = getLocalStorage();

    const handleNewUserToken = async () => {
        const {data} = await getNewUserTokenReq(userStorage.access_token);

        const newUserData: UserData = {
            access_token: data.access_token,
            account_id: data.account_id,
            expires_at: data.expires_at,
            nickname: userStorage.nickname
        }

        localStorage.setItem('userData', JSON.stringify(newUserData));
    }

    useEffect(() => {
        const userTokenTime = moment().diff(userStorage.expires_at * 1000, "days");

        if (userTokenTime > 7 && userTokenTime < 13) {
            void handleNewUserToken();
        }
    }, [])
    return (
        <>
            <main className={'account'}>
                <Routes>
                    <Route path={''} element={<Navigate replace to={'playerInfo'} />}/>
                    <Route path={'playerInfo'} element={<div>playerInfo</div>}/>
                    <Route path={'clanInfo'} element={<div>clanInfo</div>}/>
                    <Route path={'searchPlayers'} element={<SearchPlayers />}/>
                </Routes>
            </main>
            <Navigation />
        </>
    );
};

export default Account;