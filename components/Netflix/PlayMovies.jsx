import React from "react"
import { useParams } from "react-router-dom"

export const PlayMovies = ()=>
{
    const id = useParams().id
    return (
        <div>
            <h1>Play Movies... {id}</h1>
        </div>
    )
}