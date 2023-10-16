import React, { useState } from "react";
import {FcEmptyTrash} from "react-icons/fc"/* подгрузили библиотеку эконок*/
import Order from "../compjnents/Order"

export default function Header(props){
    let[cartOpen,setCartOpen]=useState(false);
   return(
    <header> 
        <div >
            <span className="logo">Phone Center</span>
        <ul className="nav">
            <li>Про нас</li>
            <li>Контакты</li>
            <li>Кабинет</li>
            <li>Скачать прайс</li>
        </ul>
        <FcEmptyTrash onClick={()=>setCartOpen(cartOpen=!cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>

        {cartOpen && (
            <div className="shop-cart">
                {props.orders.map(el=>(
                    <Order key={el.id} item={el}/>
                ))}
            </div>
        )}

        </div>
        <div className="presentation"></div>
    </header> /* выше код, считываем событие*/
   )
}