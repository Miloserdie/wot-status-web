import './style.scss';
import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {checkAuth} from "../../utils/checkAuth";
import {getUserClanInfoReq} from "../../api/worldOfTanksApi";
import wotIcon from '../../assets/images/signIn/world-of-tanks.png'

type userDataObj = {
    access_token: string | null,
    nickname: string | null,
    account_id: number | null,
    expires_at: number | null,
}

const SignIn = () => {
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();
    const isUserAuth = checkAuth();

    const handleUserInfo = async () => {
        const userSearchParams = new URLSearchParams(document.URL);

        if (userSearchParams.get('status') !== 'ok') {
            return
        }

        const clanData = await getUserClanInfoReq(Number(userSearchParams.get('account_id')));

        if(!clanData) {
            return setError('У вас немає клану');
        }

        const userData: userDataObj = {
            access_token: userSearchParams.get('access_token'),
            account_id: Number(userSearchParams.get('account_id')),
            expires_at: Number(userSearchParams.get('expires_at')),
            nickname: userSearchParams.get('nickname'),
        }

        localStorage.setItem('userData', JSON.stringify(userData));

        setError('');

        navigate('/account');
    }

    useEffect(() => {
        if(isUserAuth) {
           return navigate('/account');
        }

        void handleUserInfo()

    }, [document.URL])


    return (
        <div className={'sign-in-wrapper'}>
            <main className={`sign-in-main`}>
                <section className={'sign-in'}>
                    <p className={`sign-in__error ${error ? 'active' : ''}`}>{error}</p>
                    <div className={'sign-in__auth'}>
                        <img className={'sign-in__icon'} src={wotIcon} alt="wot-icon"/>
                        <h1 className={'sign-in__title'}>World of Tanks<br />  Stronghold</h1>
                        <p className={'sign-in__description'}>Застосунок для моніторингу та активації резервів клану</p>
                        <p className={'sign-in__description'}>Все що треба для початку роботи це</p>
                        <a className={'sign-in__link'} href={'https://api.worldoftanks.eu/wot/auth/login/?application_id=347cc9362aafc608559e5892b8e8b98f&redirect_uri=https://wot-clan-stronghold.vercel.app/signIn'}>Авторизуватися</a>
                    </div>
                </section>
                <section className={'sign-in__info'}>
                    <p>Для автентифікації в обліковому записі він повинен мати принаймні один бій та буди у клані у World of Tanks. Якщо вам не вдається авторизуватися, це погано.</p>
                </section>
            </main>
        </div>
    );
};

export default SignIn;