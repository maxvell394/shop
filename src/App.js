import Header from "./compjnents/Header";
import Footer from "./compjnents/Footer";
import "./index.css";
import { useEffect, useState } from "react";
import Items from "./compjnents/Items.jsx";
import Categories from "./compjnents/Categories";
import ShowFullItem from "./compjnents/ShowFullItem";

/* создаем масив с товарами*/
export default function App() {
  const [orders, setOders]= useState([]);/* добавление товаров в корзину(масив)*/
  const [currentItems,setCurrentItems]= useState([]);
  const [showFullItem, setShowFullItem]= useState([false]);
  const[items,setItems]=useState ([ 
    {
      id:1,
      title:'Samsung Galaxy S23 FE',
      img:'1.png',
      desc:'Galaxy S23 FE унаследовал впечатляющий дизайн серии Galaxy S23, переняв его премиальную эстетику и многие свойства практичного характера. Выберите любой из четырёх оттенков — мятный, графит, бежевый и фиолетовый. Каждый из них гармонично сочетается с металлической рамкой, обрамляющей корпус..',
      category:'Samsung',
      price:'1000.56'
    },
    {
      id:2,
      title:'iphone Pro Max',
      img:'2.jpg',
      desc:'Apple iPhone 15 Pro Max — сверхпрочный флагман, изготовленный из титана. За бескомпромиссную производительность смартфона отвечает новейший чип Apple A17 Bionic Pro. Устройство получило передовую систему камер, продуманную эргономику, обновленный дизайн и новую программируемую кнопку.',
      category:'Apple',
      price:'1200'
    },
    {
      id:3,
      title:'Xiaomi Redmi 12',
      img:'3.png',
      desc:'Cмартфон Redmi 12 обладает всем, что необходимо современному пользователю и по традиции предлагает больше, чем покупатель ожидает получить за такую цену.',
      category:'Xiaomi',
      price:'1100'
    },
    {
      id:4,
      title:'Infinix Note 30 Pro 8',
      img:'4.png',
      desc:'Быстрая зарядка 68 Вт заряжает смартфон до 80% за 30 минут. Батарея выдерживает до 1000 циклов перезарядки без снижения своих характеристик, что на 25% выше индустриального стандарта.',
      category:'Infinix',
      price:'800'
    },
    {
      id:5,
      title:'TECNO Pova Neo 3',
      img:'5.png',
      desc:'Смартфон Tecno Pova Neo 3 — оптимальное решение для современного активного пользователя. Аккумулятор ёмкостью 7000 мА*ч обеспечивает длительную автономную работу. Используйте смартфон максимально активно на протяжении дня без необходимости искать розетку. Огромный запас энергии и реверсивная зарядка 6 Вт позволяет заряжать другие устройства',
      category:'TECNO',
      price:'1150'
    },
    {
      id:6,
      title:'Realme C53 6',
      img:'6.png',
      desc:'8-ядерный чипсет обеспечивает высокую производительность, а передовые технологии и эффективные вычислительные возможности гарантируют плавную работу.',
      category:'Realme',
      price:'600'
    },
    {
      id:7,
      title:'Honor X9a 5G 8',
      img:'7.png',
      desc:'Смартфон Honor X9A — это премиальный дизайн и средний класс в одном устройстве. Экран у него 6,67 дюймов, а ОС — Android 12 с оболочкой Magic UI 6.1. У него есть все для быстрой и безопасной работы: 256 Гб внутренней и 8 Гб оперативной памяти.',
      category:'Honor',
      price:'500'
    },
    {
      id:8,
      title:'OnePlus 10T 5G 8',
      img:'8.png',
      desc:'OnePlus 10T 5G — высокопроизводительный смартфон по доступной цене. Благодаря самой быстрой зарядке в истории OnePlus и самой мощной мобильной платформе, разработанной Qualcomm вы в полной мере узнаете, что мы называем «Эволюцией со скоростью света».',
      category:'OnePlus',
      price:'800'
    },
    {
      id:9,
      title:'POCO F5 Pro 12',
      img:'9.png',
      desc:'Покорите самые ресурсоёмкие задачи выполнимы с POCO F5 Pro. На борту — процессор Snapdragon 8+ Gen 1, изготовленный по 4-нм техпроцессу TSMC для достижения максимальной эффективности при меньшем энергопотреблении.',
      category:'POCO',
      price:'1200'
    },
    {
      id:10,
      title:'Nokia C20',
      img:'10.png',
      desc:'Отличительные особенности Nokia C20 — стильный скандинавский дизайн и готовность к ежедневным испытаниям. Заряда батареи хватит на целый день — слушайте музыку и смотрите видео без ограничений.',
      category:'Nokia',
      price:'300'
    }

  ])

  useEffect(()=>{
    setCurrentItems(items);
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
    setShowFullItem(!showFullItem);
  }

  return (
    <div className="wrapper">
    <Header orders={orders} onDelete={deleteOrder}/>
    <Categories chooseCategory={chooseCategory}/>
    <Items allItems={currentItems} onShowItem={onShowItem} onAdd={addToOrder}/>
    {showFullItem && <ShowFullItem/>}
    <Footer/>
    
    </div>
  );

    
}