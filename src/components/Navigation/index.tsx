import './style.scss';
import React from 'react';
import {NavLink} from "react-router-dom";

const Navigation: React.FC = () => {
    return (
        <nav className={'navigation'}>
            <ul className={'navigation__list'}>
                <li className={'navigation__item'}>
                    <NavLink className={'navigation__link'} to={'/account/clanInfo'}>
                        <img className={'navigation__img'} src="https://na.wargaming.net/clans/static/1.24.0-1.48.0/clansassets/images/menu-top/menu-top_logo.png" alt=""/>
                        <span>Клан</span>
                    </NavLink>
                </li>
                <li className={'navigation__item'}>
                    <NavLink className={'navigation__link'} to={'/account/playerInfo'}>
                        <img className={'navigation__img'} src='https://img.icons8.com/ios-filled/50/ffffff/user.png' alt=""/>
                        <span>Гравець</span>
                    </NavLink>
                </li>
                <li className={'navigation__item'}>
                    <NavLink className={'navigation__link'} to={'/account/searchPlayers'}>
                        <img className={'navigation__img'} src="https://img.icons8.com/ios-filled/50/ffffff/search--v1.png" alt=""/>
                        <span>Пошук</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;