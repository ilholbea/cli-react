import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import BasicInstallation from './components/BasicInstallation/BasicInstallation';
import ConfigureNamespace from './components/ConfigureNamespace/ConfigureNamespace';
import UpgradeNamespace from './components/UpgradeNamespace/UpgradeNamespace';

const rootElement = document.getElementById('root');
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/base-installation" element={<BasicInstallation/>}/>
                <Route path="/configure-namespace" element={<ConfigureNamespace/>}/>
                <Route path="/upgrade-namespace" element={<UpgradeNamespace/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    rootElement
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
