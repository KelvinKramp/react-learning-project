import { ApolloClient } from '@apollo/client'
import React from 'react'
import {useLazyQuery } from "@apollo/client"
import GET_WEATHER from "../GraphQL/Queries"
import { useState } from 'react'

function Home() {
    const [citySearched, setCitySearched] = useState("")
    const [getWeather, {loading, data, error}] =  useLazyQuery(GET_WEATHER, 
            {variables: {name: citySearched}},
        )

    if (error) return <h1> Error found</h1>
    if (data) {
        console.log(data)
    }

    return (
        <div className="Home">

            <h1>Search for  weather</h1>
            <input type="text" placeholder='City name' onClick={(e)=>setCitySearched(e.target.value)}/>
            <button onClick={() => getWeather()}>Search</button>
            {data &&
            (
                <>
                <h1>Place:</h1>
                <h1>Rain</h1>
                <h1>Temp</h1>
                </>
            )
            }
        </div>
    )
}

export default Home