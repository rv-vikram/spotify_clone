
import { useEffect,useState } from "react"

import SpotifyWebApi from "spotify-web-api-js";
const spotifyApi = new SpotifyWebApi();
export const Dashboard=()=>{
    // const [token,setToken]= useState("")
    useEffect(()=>{
      spotifyApi.searchTracks('friends')
      .then((data)=> {
        console.log('Search by "Love"', data);
      })
    
    },[])
    
    return<>
  <h1>logged in</h1>
    
    </>
}