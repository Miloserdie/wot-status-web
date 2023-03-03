import './style.scss';
import React, {useState} from 'react';
import {InStock} from "../../types";
import {inStockStatus} from "../../utils/reservesVocabulary";
import moment from "moment";
import ReservesTimer from "../ReservesTimer";
import {activateClanReserveReq} from "../../api/worldOfTanksApi";
import {getLocalStorage} from "../../utils/getLocalStorage";
import {checkUserPermission} from "../../utils/checkUserPermission";

type ClanReservesInStockItemProps = {
    inStockItem: InStock
    reserveType: string
}

const ClanReservesInStockItem = ({inStockItem, reserveType}: ClanReservesInStockItemProps) => {
    const [seconds, setSeconds] = useState<number>(inStockItem.active_till - moment().unix());
    const [reserveStyleStatus, setReserveStyleStatus] = useState<string>(inStockItem.status === 'active' ? inStockItem.status : '');
    const [reserveStatusWord, setReserveStatusWord] = useState<string>(inStockStatus(inStockItem.status));
    const userStorage = getLocalStorage();
    const isButtonDisabled: boolean = inStockItem.status !== 'ready_to_activate';
    const isUserHavePermission = checkUserPermission(userStorage.account_id);

    const handleReserveActivate = async () => {

        if(!isUserHavePermission) {
            return
        }

        await activateClanReserveReq(userStorage.access_token, inStockItem.level, reserveType);

        setReserveStyleStatus('active');

        setReserveStatusWord('Активований');

        setSeconds(inStockItem.action_time);
    }

    return (
        <li className={`in-stock-item ${reserveStyleStatus}`}>
            <ul>
                <li className={'left-list-item'}>Рівень: {inStockItem.level}</li>
                <li className={'left-list-item'}>Бонус {inStockItem.bonus_values[0].value * 100}% {inStockItem.bonus_values[1] ? `/ ${inStockItem.bonus_values[1].value * 100}%` : ''}</li>
                <li className={'left-list-item in-stock-item__status'}>Статус <span>{reserveStatusWord}</span></li>
                <li className={'left-list-item'}>Таймер: <ReservesTimer setSeconds={setSeconds} seconds={seconds}/></li>
                <li className={'left-list-item'}>Загальна кількість {inStockItem.amount}</li>
            </ul>
            <button onClick={handleReserveActivate} className={`in-stock-item__button`} disabled={isButtonDisabled || !isUserHavePermission}>Aктивувати</button>
        </li>
    );
};

export default ClanReservesInStockItem;