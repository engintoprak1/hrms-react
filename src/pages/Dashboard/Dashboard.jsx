import React from 'react'
import { Route } from 'react-router'
import AddJobAdvertisement from '../../components/AddJobAdvertisement/AddJobAdvertisement'
import JobAdvertisementDetail from '../JobAdvertisementDetail'
import Cvs from '../../components/Cvs/CvList'
import CvDetail from '../CvDetail'
import HomePage from '../Homepage/HomePage'
import Register from '../Register/Register'
import Login from '../Login/Login'




export default function Dashboard() {

    return (
        <div>

            <Route exact path="/" component={HomePage} />
            <Route exact path="/homePage" component={HomePage} />
            <Route path="/jobAdvertisements/:id" component={JobAdvertisementDetail} />
            <Route exact path="/cvs" component={Cvs} />
            <Route path="/cvs/:id" component={CvDetail} />
            <Route path="/addJobAdvertisement" component={AddJobAdvertisement} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />

        </div>
    )
}
