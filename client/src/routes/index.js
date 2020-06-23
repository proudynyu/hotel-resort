import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../layout/Home';
import Rooms from '../components/Rooms';
import SingleRoom from '../layout/SingleRoom';
import Error from '../components/Error';
import { RoomProvider } from '../context';

const Router = () => {
    return (
        <RoomProvider>
            <Switch>
                <Route name="Home" path="/" exact component={Home} />
                <Route name="Room" path="/rooms" exact component={Rooms} />
                <Route name="SingleRoom" path="/rooms/:slug" component={SingleRoom} />
                <Route name="Error" path="*" component={Error} />
            </Switch>
        </RoomProvider>
    );
}

export default Router;
