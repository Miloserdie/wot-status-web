import './style.scss';
import React, {useEffect, useState} from 'react';
import {getClanIdReq, getClanReservesReq} from "../../api/worldOfTanksApi";
import {getLocalStorage} from "../../utils/getLocalStorage";
import {ClanReserves} from "../../types";
import ClanReservesItem from "../ClanReservesItem";

const ClanReservesInfo = () => {
    const userStorage = getLocalStorage();
    const [clanReserves, setClanReserves] = useState<ClanReserves[]>([]);

    const getClanReserves = async () => {
        if(!userStorage.clan_id) {
            return
        }

        const res = await getClanReservesReq(userStorage.access_token);

        const clanLongReserves = res.filter((reservesItem) => {
            return reservesItem.bonus_type !== 'to Industrial Resource earned';
        })

        setClanReserves(clanLongReserves);

        console.log('clanLongReserves', clanLongReserves)
    }

    useEffect(() => {
        void getClanReserves();
    }, [])

    return userStorage.clan_id ? (
        <section className={'clan-reserves-info'}>
            <h3 className={'clan-reserves-info__title'}>Кланові резерви</h3>
            <ul className={'clan-reserves-info__list-long'}>
                {clanReserves.map(reservesItem => {
                    return <ClanReservesItem key={reservesItem.type} reservesItem={reservesItem} />
                })}
            </ul>
        </section>
    ) : (
        <section className={'clan-not-found'}>
            <h2 className={'clan-not-found__title'}>Ви не перебуваєте у жодному клані(</h2>
        </section>
    );
};

export default ClanReservesInfo;