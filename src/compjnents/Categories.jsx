import React from "react";

export default function Categories(props){
    const categories=[
        {
            key:"all",
            name:"Все"
        },
        {
            key:"Samsung",
            name:"Samsung"
        },
        {
            key:"Apple",
            name:"Apple"
        },
        {
            key:"Xiaomi",
            name:"Xiaomi"
        },
        {
            key:"Infinix",
            name:"Infinix"
        },
        {
            key:"TECNO",
            name:"TECNO"
        },
        {
            key:"Realme",
            name:"Realme"
        },
        {
            key:"Honor",
            name:"Honor"
        },
        {
            key:"OnePlus",
            name:"OnePlus"
        },
        {
            key:"POCO",
            name:"POCO"
        },
        {
            key:"Nokia",
            name:"Nokia"
        }

    ]
    return(
        <div className="categories">
            {categories.map(el=>(
                <div key={el.key} onClick={()=>props.chooseCategory(el.key)}>{el.name}</div>
            ))}
        </div>
    );
}