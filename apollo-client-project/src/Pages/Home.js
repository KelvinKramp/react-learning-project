import { ApolloClient } from '@apollo/client'
import React from 'react'
import {useLazyQuery } from "@apollo/client"
import GET_WEATHER from "../GraphQL/Queries"

function Home() {
    const [getWeather, {loading, data, error}] =  useLazyQuery(GET_WEATHER, 
            {variables: {name: "Vancouver"}},
        )

    if (error) return <h1> Error found</h1>
    if (data) {
        console.log(data)
    }

    return (
        <div className="Home">

            <h1>Search for  weather</h1>
            <input type="text" placeholder='Cutyname' />
            <button onClick={() => getWeather()}>Search</button>
        </div>
    )
}

export default Home