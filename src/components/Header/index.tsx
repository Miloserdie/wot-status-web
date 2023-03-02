import './style.scss';
import React from 'react';
import {getLocalStorage} from "../../utils/getLocalStorage";
import headerLogOutIcon from '../../assets/images/header/header-log-out-icon.png';
import {ClanData, logOutReq} from "../../api/worldOfTanksApi";
import {useNavigate} from "react-router-dom";

type UserClanDataProps = {
    userClanData: ClanData
}

const Header = ({userClanData}: UserClanDataProps) => {
    const userLocalStorage = getLocalStorage();
    const navigate = useNavigate();

    const handleLogOut  = async () => {
        await logOutReq(userLocalStorage.access_token);

        localStorage.clear();

        navigate('/signIn');
    }

    return (
        <header className={'header'}>
            <div className={'header__left'}>
                <h4 className={`header__nickname`}>{userLocalStorage.nickname}</h4>
                <p className={`header__clan-tag`}>[{userClanData?.clan?.tag}]</p>
            </div>
            <button onClick={handleLogOut} className={`header__log-out-button`}>
                <img src={headerLogOutIcon} alt="log-out-icon"/>
            </button>
        </header>
    );
};

export default Header;