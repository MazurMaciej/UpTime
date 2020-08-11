import React from 'react';
import { Link } from 'react-router-dom';

import './CompanyCard.scss';

import { Icon } from '../Icon';

export const CompanyCard = ({ id, name, logo }) => (
    <div key={id} className='companyCard'>
        <div className="companyCard__box">
            <img src={logo} alt={`Logo company: ${name}`} className='companyCard__logo' />
            <p className='companyCard__name'>{name}</p>
        </div>
        <Link to={`/uptime/${id}`} className='companyCard__button'>
            <Icon name='arrow' />
        </Link>
    </div>
);

