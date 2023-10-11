import React from "react";

export default function Item(props){
    return(
        <div className="item">
            <img src={""}/>
            <h2>{props.item2.title}</h2>
            <p>{props.item2.desc}</p>
            <b>{props.item2.price}</b>
            <div className="add-to-cart">+</div>
        </div>
    );
}