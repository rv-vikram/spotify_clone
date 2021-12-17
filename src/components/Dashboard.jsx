
import { useEffect,useState ,useContext} from "react"
import { AutheContext } from "./Contextprovider";
import SpotifyWebApi from "spotify-web-api-js";
import {Audiopplay} from './Artist/audio'
const spotifyApi = new SpotifyWebApi();
export const Dashboard=()=>{
    // const [token,setToken]= useState("")
    const {state} = useContext(AutheContext)
    useEffect(()=>{
      spotifyApi.setAccessToken(state)
      spotifyApi.searchTracks('friends')
      .then((data)=> {
        console.log('Search by "Love"', data);
      })
    
    },[])
    
    return<>
  <h1>logged in</h1>
  <Audiopplay  value={state} />    
    </>
}