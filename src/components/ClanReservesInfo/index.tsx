import './style.scss';
import React, {useEffect, useState} from 'react';
import {ClanData, getClanReservesReq, logOutReq} from "../../api/worldOfTanksApi";
import {getLocalStorage} from "../../utils/getLocalStorage";
import {ClanReserves} from "../../types";
import ClanReservesItem from "../ClanReservesItem";
import {useNavigate} from "react-router-dom";

type UserClanDataProps = {
    userClanData: ClanData
}

const ClanReservesInfo = ({userClanData} : UserClanDataProps) => {
    const userStorage = getLocalStorage();
    const navigate = useNavigate();
    const [clanReserves, setClanReserves] = useState<ClanReserves[]>([]);

    const handleGetClanReserves = async () => {

        if(!userClanData) {
            await logOutReq(userStorage.access_token);

            localStorage.clear();

            return navigate('/si')
        }

        const res = await getClanReservesReq(userStorage.access_token);

        const clanLongReserves = res.filter((reservesItem) => {
            return reservesItem.bonus_type !== 'to Industrial Resource earned';
        })

        setClanReserves(clanLongReserves);
    }

    useEffect(() => {
        void handleGetClanReserves();
    }, [])

    return (
        <div className={'container'}>
            <section className={'clan-reserves-info'}>
                <h3 className={'clan-reserves-info__title'}>Кланові резерви</h3>
                <ul className={'clan-reserves-info__list-long'}>
                    {clanReserves.map(reservesItem => {
                        return <ClanReservesItem key={reservesItem.type} reservesItem={reservesItem} />
                    })}
                </ul>
            </section>
        </div>
    );
};

export default ClanReservesInfo;