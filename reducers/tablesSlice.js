import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'tables',
    initialState: {
        tables: {
            // 'table1': {
            //     orders: [
            //         {
            //             name: "idly",
            //             quantity: {
            //                 ordered: 2,
            //                 preparing: 0,
            //                 prepared: 0,
            //                 served: 0,
            //                 cancelled: 0
            //             },
            //             prisePerOrder: 10
            //         }
            //     ]
            // }
        }
    },
    reducers: {
        placeOrderForTable: (state, action) => {
            const { payload } = action;
            const { tableId, orders } = payload;
            if(tableId in state.tables) {
                state.tables[tableId] = { ...state.tables.orders, ...orders };
            } else {
                state.tables[tableId] = orders;
            }
        },
        removeOrderForTable: (state, action) => {
            state.tables = state.tables;
        },
        modifyOrderStatusForTable: (state, action) => {
            state.tables = state.tables;
        }
    }
});

export const { placeOrderForTable, removeOrderForTable, modifyOrderStatusForTable } = slice.actions;

export const selectTables = state => state.tables.tables;

export default slice.reducer;