import React from 'react';
import {FcEmptyTrash} from "react-icons/fc";

export default function Order(props){
    return(
        <div className="item">
            <img src={"./images/"+props.item.img}/>
            <h2>{props.item.title}</h2>
            <b>{props.item.price}</b>
            <FcEmptyTrash className='delete-icon'onClick={()=> props.onDelete(props.item.id)}/>
        </div>
    )
}