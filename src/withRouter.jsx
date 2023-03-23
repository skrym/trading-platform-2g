import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import App from './App';

const WithRouter = () => {
  const location = useLocation()
  const navigation = useNavigate()
  return <App
    location={location}
    navigation={navigation}
  />;
}

export default WithRouter;
