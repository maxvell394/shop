import Header from "./compjnents/Header";
import Footer from "./compjnents/Footer";
import "./index.css";
import { useEffect, useState } from "react";
import Items from "./compjnents/Items.jsx";
import Categories from "./compjnents/Categories";
import ShowFullItem from "./compjnents/ShowFullItem";
import axios from "axios";

/* создаем масив с товарами*/
export default function App() {
  const [orders, setOders]= useState([]);/* добавление товаров в корзину(масив)*/
  const [currentItems,setCurrentItems]= useState([]);
  const [showFullItem, setShowFullItem]= useState([false]);
  const [fullItem,setFullItem]= useState({});
  const[items,setItems]=useState ([]);

  useEffect(()=>{
    axios
      .get("http://localhost:3001/items")
      .then((response)=>{
        setItems(response.data);
        chooseCategory("all");
        setCurrentItems(response.data);
      })
      .catch((error)=>{
        console.error("Ошибка при закгрузки данных",error);
      });
  },[items]);

  const addToOrder=(item3)=>{
    if(!orders.some((el)=>el.id===item3.id)){
      setOders([...orders,item3]);
    }
  };
  
  const deleteOrder =(id)=>{
    setOders(orders.filter((el)=>el.id !==id));
  }

  const chooseCategory=(category)=>{
    if(category==="all"){
      setCurrentItems(items);
    }
      else{
        setCurrentItems(items.filter((el)=>el.category===category));
      }
  }

  const onShowItem = (item)=>{
    setFullItem (item);
    setShowFullItem(!showFullItem);
  }

  return (
    <div className="wrapper">
    <Header orders={orders} onDelete={deleteOrder}/>
    <Categories chooseCategory={chooseCategory}/>
    <Items allItems={currentItems} onShowItem={onShowItem} onAdd={addToOrder}/>
    {showFullItem && <ShowFullItem onShowItem={onShowItem}nAdd={addToOrder}item={fullItem}/>}
    <Footer/>
    
    </div>
  );

    
}