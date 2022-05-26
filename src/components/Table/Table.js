import React, { useState } from 'react';
import './Table.module.scss';
import { useHistory } from 'react-router-dom';

const Table = (props) => {
    const { id } = props;
    const [tableClass, setTableClass] = useState("table button__bordered");
    const history = useHistory();

    const _onClick = () => {
        history.push(`place_order/${id}`);
    }

    const _onMouseEnter = () => {
        setTableClass("table button__solid");
    }

    const _onMouseLeave = () => {
        setTableClass("table button__bordered");
    }

    return (
        <button className={tableClass} onClick={_onClick} onMouseEnter={_onMouseEnter} onMouseLeave={_onMouseLeave}>{id}</button>
    );
}

export default Table;