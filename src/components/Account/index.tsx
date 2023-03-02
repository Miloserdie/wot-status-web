import './style.scss';
import React, {useEffect, useState} from 'react';
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import moment from "moment";
import {getLocalStorage} from "../../utils/getLocalStorage";
import {ClanData, getNewUserDataReq, getUserClanInfoReq} from "../../api/worldOfTanksApi";
import {UserData} from "../../types";
import ClanReservesInfo from "../ClanReservesInfo";
import Header from "../Header";
import Footer from "../Footer";
import Loading from "../Loading";

const Account = () => {
    const [userClanData, setUserClanData] = useState({} as ClanData);
    const userStorage = getLocalStorage();
    const navigate = useNavigate();

    const getUserClanData = async () => {
        const clanData = await getUserClanInfoReq(userStorage.account_id);

        setUserClanData(clanData);
    };

    const handleNewUserData = async () => {
        const data = await getNewUserDataReq(userStorage.access_token);

        const newUserData: UserData = {
            access_token: data.access_token,
            account_id: data.account_id,
            expires_at: data.expires_at,
            nickname: userStorage.nickname,
        }

        localStorage.setItem('userData', JSON.stringify(newUserData));
    };

    useEffect(() => {
        const userTokenTime = moment().diff(userStorage.expires_at * 1000, "days");

        void getUserClanData();

        if(userTokenTime > 13) {
            localStorage.clear();
            return navigate('./signIn');
        }

        if (userTokenTime > 7) {
            void handleNewUserData();
        }
    }, [])

    return userClanData.clan ? (
        <div className={'wrapper'}>
            <Header userClanData={userClanData} />
            <main className={'account-main'}>
                <Routes>
                    <Route path={''} element={<Navigate replace to={'clanReservesInfo'} />}/>
                    <Route path={'clanReservesInfo'} element={<ClanReservesInfo userClanData={userClanData} />}/>
                    <Route path={'*'} element={<Navigate replace to={'clanReservesInfo'}/>}/>
                </Routes>
            </main>
            <Footer userClanData={userClanData} />
        </div>
    ) : (
        <Loading />
    )
};

export default Account;