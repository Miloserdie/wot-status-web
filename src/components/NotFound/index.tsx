import './style.scss';
import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <section className={'not-found'}>
            <h5 className={'not-found__title'}>404</h5>
            <p className={'not-found__text'}>Щось ти заблукав</p>
            <Link className={'not-found__link'} replace to={'/account'}>Повернутися назад</Link>
        </section>
    );
};

export default NotFound;