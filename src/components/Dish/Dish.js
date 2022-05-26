import React, { useState, useEffect } from 'react';
import './Dish.module.scss';

const Dish = ({dish, addDish = () => {}, quantity : q = 0, disabled = false}) => {
    const { name } = dish;
    const [quantity, setQuantity] = useState((isNaN(q)) ? "0" : q.toString());
    
    useEffect(() => {
        if(q) {
            setQuantity((isNaN(q)) ? "0" : q.toString());
        }
    })

    const add = () => {
        addDish(dish, quantity)
    }

    const _onChange = (e) => {
        setQuantity(parseInt(e.target.value))
    }

    return (
        <div className="dish">
            <div className="dish__name">{name}</div>
            <input type="number" value={quantity.toString()} className="dish__quantity input" onChange={_onChange} disabled={disabled} />
            {!disabled && <button onClick={add} className="button button__solid">Add</button>}
        </div>
    );
}

export default Dish;