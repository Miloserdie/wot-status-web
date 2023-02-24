import './style.scss';
import React, {useEffect} from 'react';
import {Navigate, useNavigate} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth";

type userDataObj = {
    access_token: string | null,
    nickname: string | null,
    account_id:string | null,
    expires_at: string | null
}

const SignIn = () => {
    const navigate = useNavigate();
    const isUserAuth = useAuth();


    const handleUserInfo = () => {
        const userSearchParams = new URLSearchParams(document.URL);

        if (userSearchParams.get('status') !== 'ok') {
            return
        }

        const userData: userDataObj = {
            access_token: userSearchParams.get('access_token'),
            account_id: userSearchParams.get('account_id'),
            expires_at: userSearchParams.get('expires_at'),
            nickname: userSearchParams.get('nickname')
        }

        localStorage.setItem('userData', JSON.stringify(userData));

        navigate('/account');
    }

    useEffect(() => {
        if(isUserAuth) {
           return navigate('/account');
        }

        handleUserInfo()

    }, [document.URL])


    return (
        <section className={'signIn'}>
            <header className={'signIn__header'}>
                <img className={'signIn__icon'} src="https://img.icons8.com/fluency/240/null/world-of-tanks.png" alt=""/>
                <h1 className={'signIn__title'}>World of Tanks Stats</h1>
                <p className={'signIn__description'}>Застосунок для моніторингу статистики у WoT</p>
                <p className={'signIn__description'}>Все що треба для початку роботи це</p>
                <a className={'signIn__link'} href={'https://api.worldoftanks.eu/wot/auth/login/?application_id=347cc9362aafc608559e5892b8e8b98f&expires_at=1678396374&redirect_uri=http://localhost:3000/signIn'}>Авторизуватися</a>
            </header>
            <footer className={'signIn__footer'}>
                <p>Для автентифікації в обліковому записі він повинен мати принаймні один бій у World of Tanks. Якщо вам не вдається авторизуватися, це погано.</p>
            </footer>
        </section>
    );
};

export default SignIn;