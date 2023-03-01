import './style.scss';import './style.scss';
import React, {useEffect} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import moment from "moment";
import {getLocalStorage} from "../../utils/getLocalStorage";
import {getNewUserDataReq} from "../../api/worldOfTanksApi";
import {UserData} from "../../types";
import ClanReservesInfo from "../ClanReservesInfo";
import Header from "../Header";
import Footer from "../Footer";

const Account = () => {
    const userStorage = getLocalStorage();

    const handleNewUserData = async () => {
        const data = await getNewUserDataReq(userStorage.access_token);

        const newUserData: UserData = {
            access_token: data.access_token,
            account_id: data.account_id,
            expires_at: data.expires_at,
            nickname: userStorage.nickname,
            clan_id: userStorage.clan_id,
            clan_tag: userStorage.clan_tag,
            clan_emblem: userStorage.clan_emblem,
            clan_name: userStorage.clan_name
        }

        localStorage.setItem('userData', JSON.stringify(newUserData));
    }

    useEffect(() => {
        const userTokenTime = moment().diff(userStorage.expires_at * 1000, "days");

        if (userTokenTime > 7 && userTokenTime < 13) {
            void handleNewUserData();
        }
    }, [])
    return (
        <>
            <Header />
            <main className={'main'}>
                <Routes>
                    <Route path={''} element={<Navigate replace to={'clanReservesInfo'} />}/>
                    <Route path={'clanReservesInfo'} element={<ClanReservesInfo />}/>
                </Routes>
            </main>
            <Footer />
        </>
    );
};

export default Account;