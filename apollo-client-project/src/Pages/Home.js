import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_WEATHER } from "../GraphQL/Queries";

function Home() {
    const [citySearched, setCitySearched] = useState("")
    const [getWeather, { data, error }] =  useLazyQuery(GET_WEATHER, 
            {variables: {name: citySearched}},
        )

    if (error) return <h1> Error found</h1>
    if (data) {
        console.log(citySearched)
        console.log(data)
    }

    return (
        <div className="Home">

            <h1>Search for  weather</h1>
            <input type="text" placeholder='City name' onChange={(event)=>{setCitySearched(event.target.value)}}/>
            <button onClick={() => getWeather()}>Search</button>
            <div className="weather">
            {data &&
            (
                <>
                <h1>Place: {data.getCityByName.name}</h1>
                <h1>humidity: {data.getCityByName.weather.clouds.humidity} </h1>
                <h1>Minimum temperature: {data.getCityByName.weather.temperature.min}</h1>
                </>
            )
            }
             </div>
        </div>
    )
}

export default Home