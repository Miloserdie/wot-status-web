import './style.scss'
import React from 'react';
import {IndividualPlayer} from "../../types";

type PlayerProps = {
    player: IndividualPlayer
}

const PlayerItem = ({player}: PlayerProps) => {
    return (
        <li className={'player-item'}>
            <div className={'player-item__top'}>
                <p className={'player-item__nickname'}>{player.nickname}</p>
                <img className={`player-item__arrow`} src="https://img.icons8.com/material-rounded/24/B9B9B9/sort-down.png" alt="btn-down"/>
            </div>
        </li>
    );
};

export default PlayerItem;