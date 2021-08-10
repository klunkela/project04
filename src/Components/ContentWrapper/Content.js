import React from 'react';
import {Route} from "react-router-dom";
import Header from "./Header";
import Users from "./Users/Users";

function Content(props) {
    return (
        <div>
            <Route
                path="/profile/:userId?"
                render={() => <Header/>}
            />

            <Route
                path="/dialogs"
                render={() => <Header/>}
            />

            <Route
                path="/users"
                render={() => <Users/>}
            />
        </div>
    );
}

export default Content;