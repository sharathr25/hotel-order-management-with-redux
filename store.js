import { configureStore } from "@reduxjs/toolkit";
import tableReducer from './reducers/tablesSlice';

const store = configureStore({
    reducer: {
        tables: tableReducer
    }
});

export default store;

