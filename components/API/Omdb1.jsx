import axios from "axios"
import React, { useState } from "react"
import Loading from "./Loading"

export const Omdb1 = () =>
{
    const [isloading,setisLoading]=useState(false)
    const [movies,setmovies] = useState([])
    const getmovies = async() =>
    {
        setisLoading(true)
        const res = await axios.get("https://www.omdbapi.com/",
            {
                params: {
                    s:"game of thrones",
                    apikey:"ff9649ad"
                }
            }
        )
        // console.log(res.data.Search)
        setmovies(res.data.Search)
        setisLoading(false)
    }
    return(
        <div>
            <button onClick={()=>{getmovies()}}>get</button>
            {
                isloading && <Loading></Loading>
            }
            {/* <table className="table table-dark">
                <thead>
                    <tr>Poster</tr>
                </thead>
                <tbody>
                    {
                        movies?.map((movie=>{
                            return<tr>
                                <td><img src={movie.Poster} alt=""/></td>
                            </tr>
                        }))
                    }
                </tbody>
            </table> */}
            
            <div classname="card-group">
                
                    <div className="card">
            {
                        movies?.map((movie=>{
                            return<tr>
                                <td><img src={movie.Poster} alt=""/></td>
                            </tr>
                        }))
                    }
                    </div>
            
            </div>
        </div>
    )
}