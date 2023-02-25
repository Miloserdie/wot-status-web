import './style.scss'
import React, {useState} from 'react';
import {getGlobalPlayersReq} from "../../api/worldOfTanksApi";
import PlayersList from "../PlayersList";
import {IndividualPlayer} from "../../types";

const SearchPlayers: React.FC = () => {
    const [searchValue, setSearchValue] = useState('');
    const [playersFound, setPlayersFound] = useState<IndividualPlayer[]>([]);
    const [isPlayersNotFound, setIsPlayersNotFound] = useState('');
    const [isSearching, setIsSearching] = useState(false);

    const handleSearchPlayer = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSearching(true);

        const res = await getGlobalPlayersReq(searchValue);

        if(res.status === 'error' || !res.meta.count) {
            setPlayersFound([]);
            setIsSearching(false);
            return setIsPlayersNotFound('active')
        }

        setPlayersFound(res.data);

        setIsPlayersNotFound('');

        setIsSearching(false);

        setSearchValue('');
    }

    return (
        <section className={'search-player'}>
            <form className={'search-player__form'}>
                <input disabled={isSearching} value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder={'Пошук гравців'} className={'search-player__input'} type={'text'} />
                <button disabled={isSearching} className={'search-player__button'} onClick={(e) => {void handleSearchPlayer(e)}}>
                    <img src="https://img.icons8.com/ios-filled/50/9B9B9B/search--v1.png" alt="search-btn"/>
                </button>
            </form>
            <p className={`search-player__error ${isPlayersNotFound}`}>Гравців не знайдено</p>
            <p className={'search-player__results'}>Результати пошуку:</p>
            <PlayersList playersList={playersFound} />
        </section>
    );
};

export default SearchPlayers;