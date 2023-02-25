import React from 'react';
import {IndividualPlayer} from "../../types";
import PlayerItem from "../PlayerItem";

type PlayersListProps = {
    playersList: IndividualPlayer[],
}

const PlayersList  = ({playersList}: PlayersListProps) => {
    return (
        <ul>
            {playersList?.map((player) => {
                return (
                    <PlayerItem key={player.account_id} player={player} />
                )
            })}
        </ul>
    );
};

export default PlayersList;