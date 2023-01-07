import React from 'react';
import './../../style.scss';
import ItemList from './ItemList';

const List = ({arrayList, listTitle}) => {
    return (
        <div className="list">
                    <h2 className="list__title">{listTitle}</h2>
                    <ul className="list__box">
                        {arrayList.map(i => {
                            return (
                                <ItemList key={i.id} src={i.src} name={i.name}/>
                            )
                        })}
                    </ul>
                </div>
    );
};

export default List;
