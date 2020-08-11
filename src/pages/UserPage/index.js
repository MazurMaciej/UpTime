import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { fetchUser } from '../../redux/actions';
import { Link } from 'react-router-dom';
import { getSumOfData, daysToFilter, getFilteredData } from '../../helpers/dataProcessing';
import { getLoadingStatus, getUserData, getUserLogo, getUserName, getError } from './../../redux/selectors';

import './UserPage.scss';

import { LineChart } from '../../components/LineChart';
import { Header } from '../../components/Header';
import { SingleTableRow } from '../../components/SingleTableRow';
import { Icon } from '../../components/Icon';
import { Loader } from '../../components/Loader';

export const UserPage = () => {
    const urlData = useParams();
    const dispatch = useDispatch();
    const user = useSelector(getUserData);
    const dataIsLoading = useSelector(getLoadingStatus);
    const error = useSelector(getError);
    const userLogo = useSelector(getUserLogo);
    const userName = useSelector(getUserName);

    const [userData, handleUserData] = useState([])

    useEffect(() => {
        return dispatch(fetchUser(urlData.id));
    }, [dispatch, urlData.id]);

    useEffect(() => {
        return handleUserData(user)
    }, [handleUserData, user])

    return (
        <div className="userPage">
            {dataIsLoading && <Loader />}
            <Header />
            <div className="container">
                <Link
                    className="userPage__backButton"
                    to="/uptime"
                >
                    <Icon name="arrowBack" />
                    go back
                </Link>
                {error ? <p className="error">Data not found...</p> : (
                    <>
                        <div className="userPage__companyBox">
                            <img className="userPage__companyBox-logo" src={userLogo} alt={`Logo company ${userName}`} />
                            <p className="userPage__companyBox-title">{userName}</p>
                        </div>
                        <div className="userPage__scope">
                            <div className="userPage__scope-box">
                                <Icon name='diagram' />
                                <p className="userPage__scope-title">Show:</p>
                                <button className="userPage__scope-button filtered">Cost</button>
                            </div>
                            <div className="userPage__scope-box">
                                <Icon name='calendar' />
                                <p className="userPage__scope-title">Scope:</p>
                                <button
                                    className={["userPage__scope-button", userData?.length === 7 && "filtered"].join(" ")}
                                    onClick={() => getFilteredData(daysToFilter['7'], handleUserData, user)}
                                >
                                    7 days
                        </button>
                                <button
                                    className={["userPage__scope-button", userData?.length === 14 && "filtered"].join(" ")}
                                    onClick={() => getFilteredData(daysToFilter['14'], handleUserData, user)}
                                >
                                    14 days
                        </button>
                                <button
                                    className={["userPage__scope-button", userData?.length === 30 && "filtered"].join(" ")}
                                    onClick={() => getFilteredData(daysToFilter['30'], handleUserData, user)}
                                >
                                    30 days
                        </button>
                            </div>
                        </div>
                        <div className="userPage__chart">
                            <LineChart
                                userData={userData}
                            />
                        </div>
                        <div className="userPage__table">
                            <SingleTableRow highlightedTop />

                            {userData?.map(({ date, impressions, clicks, cost, conversions }, index) =>
                                <SingleTableRow
                                    key={index}
                                    date={date}
                                    impressions={impressions}
                                    clicks={clicks}
                                    cost={cost}
                                    conversions={conversions}
                                />)}

                            <SingleTableRow
                                highlightedBottom
                                date='TOTAL'
                                impressions={getSumOfData(userData, 'impressions')}
                                clicks={getSumOfData(userData, 'clicks')}
                                cost={getSumOfData(userData, 'cost')}
                                conversions={getSumOfData(userData, 'conversions')}
                            />
                        </div>
                    </>
                )}
            </div>
        </div >
    );
};
