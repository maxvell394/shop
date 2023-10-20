import React from 'react';
import Item from './Item.jsx';

export default function Items (props) {
    return(
        <main>
            {props.allItems.map(el=>(
                // <h1>{el.title}</h1>
                <Item key={el.id} item2={el} onAdd={props.onAdd} onShowItem={props.onShowItem}/>
            ))}
        </main>
    );
}