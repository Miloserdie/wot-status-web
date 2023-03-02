import './style.scss';
import React from 'react';

const Loading = () => {
    return (
        <main className={'loading-main'}>
            <section className={'loading'}>
                <div className="lds-spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </section>
        </main>
    );
};

export default Loading;