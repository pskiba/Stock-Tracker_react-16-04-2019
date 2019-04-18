import React from 'react';
import {Link} from 'react-router-dom';

const ItemList = ({items, Component, removeItem}) => {
    return (
        <ul>
            {items.length ? items.map((item) => <Component removeItem={removeItem} {...item} key={item.id}/>) :
                <div>There are no companies yet. <Link to="/track-new-company">Track your first company.</Link></div>}
        </ul>
    )
};

export default ItemList;