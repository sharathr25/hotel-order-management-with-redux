import React, { useState } from 'react';
import { DISHES } from '../../__mocks__';
import './Menu.module.scss';
import Dish from '../Dish/Dish';

const Menu = ({ addDish }) => {
    const [searchStr, setSearchStr] = useState("");

    const _onChange = (e) => setSearchStr(e.target.value);

    const add = (dish, quantity) => {
        addDish(dish, quantity)
    }

    return (
        <div className="menu">
            <h2 className="menu__title">Menu</h2>
            <input type="text" className="input" value={searchStr} onChange={_onChange} placeholder="Dish name..." />
            {
                DISHES
                    .filter(({name}) => name.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1)
                    .map((dish, i) => <Dish dish={dish} key={i} addDish={add} />)
            }
        </div>
    )
}

export default Menu;