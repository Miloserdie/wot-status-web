import React, {useEffect} from 'react';
import Navigation from "../Navigation";
import {Navigate, Route, Routes} from "react-router-dom";
import SearchPlayers from "../SearchPlayers";

const Account = () => {

    useEffect(() => {

    })
    return (
        <section className={'account'}>
            <Routes>
                <Route path={''} element={<Navigate replace to={'playerInfo'} />}/>
                <Route path={'playerInfo'} element={<div>playerInfo</div>}/>
                <Route path={'clanInfo'} element={<div>clanInfo</div>}/>
                <Route path={'searchPlayers'} element={<SearchPlayers />}/>
            </Routes>
            <Navigation />
        </section>
    );
};

export default Account;