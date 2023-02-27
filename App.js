import React from "react"
import ReactDOM from "react-dom"
import Banner from "./Banner"
import Card from "./Card"
import data from "./data"

export default function App(){
    const cards = data.map(item=>{
        return(
            <Card
              key={item.id}
                item={item}
            />
        )
    })
    
    return(
        <div>
            <Banner />
            <div className="main-content">
                {cards}
            </div>
        </div>
        
    )
}

