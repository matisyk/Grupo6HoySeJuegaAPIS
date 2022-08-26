import React from 'react';
import ReactDOM from 'react-dom/client';
import UserPlayerCount from './components/UserPlayerCount';
import UserPlayerList from './components/UserPlayerList';
import UserOwnerList from './components/UserOwnerList';
import UserOwnerCount from './components/UserOwnerCount';
import reportWebVitals from './reportWebVitals';
import Ubicacion from './components/Ubicacion';
import Canchas from './components/Canchas';
import Escuelitas from './components/Escuelitas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserPlayerCount />
    <UserPlayerList />
    <UserOwnerCount/>
    <UserOwnerList />
    <Canchas/>
    <Escuelitas/>
    <Ubicacion/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
