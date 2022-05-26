import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { Provider } from 'react-redux';
import { WorkerSelector , Waiter, Cook, Manager, PlaceOrder } from './Routes';
import store from '../store';

const NO_TABLES_IN_HOTEL = 10;

const App = () => {
    return(
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <WorkerSelector />
                    </Route>
                    <Route path="/cook">
                        <Cook noOfTables={NO_TABLES_IN_HOTEL} />
                    </Route>
                    <Route path="/waiter">
                        <Waiter noOfTables={NO_TABLES_IN_HOTEL} />
                    </Route>
                    <Route path="/manager">
                        <Manager noOfTables={NO_TABLES_IN_HOTEL} />
                    </Route>
                    <Route path="/place_order/:tableId">
                        <PlaceOrder />
                    </Route>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;