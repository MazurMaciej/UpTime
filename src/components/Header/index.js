import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

import { Icon } from '../Icon';



export const Header = () => (
    <header className="header">
        <div className="container">
            <div className="header__logo">
                <Link to='/uptime'>
                    <Icon name='logo' />
                </Link>
            </div>
        </div>
    </header>
);
