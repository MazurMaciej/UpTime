import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../../redux/actions'
import { getLoadingStatus, getError, getUsers } from './../../redux/selectors';

import './HomePage.scss';

import { Header } from '../../components/Header';
import { CompanyCard } from '../../components/CompanyCard';
import { Loader } from '../../components/Loader';



export const HomePage = () => {
  const dataIsLoading = useSelector(getLoadingStatus);
  const error = useSelector(getError);
  const users = useSelector(getUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch]);

  return (
    <div className="homePage">
      {dataIsLoading && <Loader />}
      <Header />
      <div className="container">
        <h2 className="homePage__title">
          List of your clients
        </h2>
        {error && <p className="error">Data not found...</p>}
        <div className="homePage__wrapper">
          {users?.map((company, index) =>
            <CompanyCard
              key={index}
              id={company.id}
              name={company.name}
              logo={company.logo}
            />
          )}

        </div>
      </div>
    </div>
  );
};
