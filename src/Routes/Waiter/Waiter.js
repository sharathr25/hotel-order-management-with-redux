import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTables, placeOrderForTable } from '../../../reducers/tablesSlice';
import { Table } from '../../components';

const Waiter = ({noOfTables}) => {
    const tables = useSelector(selectTables);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Place Order</h1>
            <div className="tables">
                {[...Array(noOfTables)].map((_,i) => {
                    return <Table id={`table ${i + 1}`} key={i} />
                })}
            </div>
            <div>
                <h1>Placed Orders</h1>
            </div>
        </div>
    );
}

export default Waiter;