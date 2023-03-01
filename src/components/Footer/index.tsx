import './style.scss';
import React from 'react';
import {getLocalStorage} from "../../utils/getLocalStorage";

const Footer = () => {
    const userLocalStorage = getLocalStorage();

    return (
        <footer className={'footer'}>
            <h5>{userLocalStorage.clan_name}</h5>
            <img className={`footer__clan-emblem`} src={userLocalStorage.clan_emblem} alt="clan-emblem"/>
        </footer>
    );
};

export default Footer;