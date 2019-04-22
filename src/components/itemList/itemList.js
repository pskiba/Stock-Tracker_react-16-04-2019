import React from 'react';

const ItemList = ({items, Component, removeItem}) => {
    return (
        <ul>
            {items.length ? items.map((item) => <Component removeItem={removeItem} item={item} key={item.symbol}/>) : null}
        </ul>
    )
};

export default ItemList;