
import { useEffect,useState,useContext } from "react"
import {AutheContext} from './Contextprovider'
import SpotifyWebApi from "spotify-web-api-js";
const spotifyApi = new SpotifyWebApi();

export const Dashboard=()=>{
  const {state,f} = useContext(AutheContext)
    // const [token,setToken]= useState("")

    useEffect(()=>{
     if(!state) return;
      spotifyApi.setAccessToken(state)
     spotifyApi.searchTracks('friends')
     .then((data)=> {
       console.log('Search by "Love"', data);
      })
    
    },[])
    
    return<>
  <h1>logged in</h1>
    
    </>
}