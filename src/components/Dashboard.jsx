
import { useEffect,useState } from "react"

import SpotifyWebApi from "spotify-web-api-js";
const spotifyApi = new SpotifyWebApi();
export const Dashboard=()=>{
    //const [token,setToken]= useState("")
    useEffect(()=>{
      spotifyApi.searchTracks('Party')
      .then(function(data) {
        console.log('Search by "Love"', data);
  }, function(err) {
    console.error(err);
  });
    
    },[])
    
    return<>
  <h1>logged in</h1>
    
    </>
}