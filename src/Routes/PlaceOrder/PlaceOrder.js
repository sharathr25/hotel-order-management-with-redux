import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectTables, placeOrderForTable, removeOrderForTable } from '../../../reducers/tablesSlice';
import { Menu } from '../../components';
import './PlaceOrder.module.scss';
import Dish from '../../components/Dish/Dish';

const PlaceOrder = () => {
    const { tableId } = useParams();
    const [orders, setOrders] = useState({});
    const tables = useSelector(selectTables);
    const dispatch = useDispatch();
    
    const addDish = (dishToAdd, quantity) => {
        if(dishToAdd.name in orders) {
            setOrders({ ...orders, [dishToAdd.name]: { ...orders[dishToAdd.name], quantity: orders[dishToAdd.name].quantity + quantity }});
        } else {
            setOrders({...orders, [dishToAdd.name]: { ...dishToAdd, quantity }})
        }
    }

    const placeOrder = () => {
        console.log("********");
        dispatch(placeOrderForTable({tableId, orders}))
    }
    
    return (
        <div className="order">
            <h1 className="order__title">Place order for <span className="order__title--highlight">{tableId}</span></h1>
            <Menu addDish={addDish} />
            {JSON.stringify(orders) !== "{}" &&
                <>
                    <h2>Orders</h2>
                    <div className="orders">
                        {Object.keys(orders).map(key => <Dish dish={orders[key]} disabled={true} key={orders[key].name} quantity={orders[key].quantity} />)}
                    </div>
                </>
            }
            <br />
            {orders.length !== 0 && <button className="button button__solid" onClick={placeOrder}>Place order</button>}
        </div>
    );
}

export default PlaceOrder;