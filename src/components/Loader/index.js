import React from 'react';

import './Loader.scss';

import loader from './../../images/preloader.gif'

export const Loader = () => (
    <div className="loader">
        <img className="loader__gif" src={loader} alt="Uptime preloader" />
    </div>
);
