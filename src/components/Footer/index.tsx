import './style.scss';
import React from 'react';
import {ClanData} from "../../api/worldOfTanksApi";

type UserClanDataProps = {
    userClanData: ClanData
}

const Footer = ({userClanData}: UserClanDataProps) => {
    return (
        <footer className={'footer'}>
            <h5>{userClanData?.clan?.name}</h5>
            <img className={`footer__clan-emblem`} src={userClanData?.clan?.emblems?.x64?.portal} alt="clan-emblem"/>
        </footer>
    );
};

export default Footer;