import './style.scss';
import React, {useState} from 'react';
import {ClanReserves} from "../../types";
import {bonusName, reservesName} from "../../utils/reservesVocabulary";
import ClanReservesInStockItem from "../ClanReservesInStockItem";

type ClanReservesItemProps = {
    reservesItem: ClanReserves
};

const ClanReservesItem = ({reservesItem}: ClanReservesItemProps) => {
    const [isInStockActive, setIsInStockActive] = useState<boolean>(false);

    return (
        <li onClick={() => setIsInStockActive((prevState) => !prevState)} className={'clan-reserves-item'}>
            <div className={'clan-reserves-item__top'}>
                <div className={'clan-reserves-item__left'}>
                    <h3 className={'clan-reserves-item__name'}>{reservesName(reservesItem.type)}</h3>
                    <p className={`clan-reserves-item__bonus-name`}>{bonusName(reservesItem.type)}</p>
                </div>
                <img src="https://img.icons8.com/material-rounded/24/E7E5C3/sort-down.png" alt="sort-down"/>
            </div>
            <ul className={`clan-reserves-item__in-stock ${isInStockActive ? 'active' : ''}`}>
                {reservesItem.in_stock.map((inStockItem, index) => {
                    return <ClanReservesInStockItem key={inStockItem.level + index} inStockItem={inStockItem} reserveType={reservesItem.type}/>
                })}
            </ul>
        </li>
    );
};

export default ClanReservesItem;