import React from 'react';
import './../../style.scss';

const ItemList = ({src, name}) => {
    return (
        <li className='itemList'>
                            <img src={src} alt="icon"/> {name}
                        </li>
    );
};

export default ItemList;