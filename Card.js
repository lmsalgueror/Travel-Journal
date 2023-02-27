import React from "react"

export default function Card(props){
    return(
        <div className="card">
            <img src={props.item.imageUrl} className="card-img"/>
            <div className="text-section">
                <div className="location-text">
                <img src="https://cdn-icons-png.flaticon.com/512/2775/2775994.png"    className="location-icon" />           
                    <p className="location-title">{props.item.location}</p>
                    <a href={`${props.item.googleMapsUrl}`}> View on Google Maps</a>
                </div>
                
                <h1>{props.item.title}</h1>         
                <p className="date-text">{`${props.item.startDate} - ${props.item.startDate}`}</p>
                
                <p className="place-info">{props.item.description}</p>
                
            </div>
        </div>
    )
}