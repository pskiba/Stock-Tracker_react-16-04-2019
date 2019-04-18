import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './reset.scss';
import './root.scss';

import Header from '../../components/header/header';
import Companies from '../companies/companies';
import TrackCompany from '../trackCompany/trackCompany';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Route exact path="/" component={Companies} />
                <Route path="/track-new-company" component={TrackCompany} />
            </div>
        </BrowserRouter>
    )
};

export default App;
