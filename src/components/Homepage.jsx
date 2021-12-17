import {Sidebar} from "./Sidebar"
import { useEffect,useState,useContext } from "react"
import SpotifyWebApi from "spotify-web-api-js";
import { HomeNavbar } from "./HomeNavbar";
import styles from "./CSS/Homepage.module.css"
import {AutheContext}  from './Contextprovider'
const spotifyApi = new SpotifyWebApi();


export const Homepage = () => {

  const [pop,setPops] = useState([])
  const [love,setLove] = useState([])
  const [disco, setDisco] = useState([])
  const {state} = useContext(AutheContext)
  

    useEffect(()=>{
     // spotifyApi.setAccessToken(state)
        spotifyApi.searchTracks('Pop')
        .then((tracks) =>  {
          console.log('Search by Party"',tracks.tracks.items)
          setPops(tracks.tracks.items);
    }, function(err) {
      console.error(err);
    });

        spotifyApi.searchTracks('Love')
        .then((tracks) =>  {
          console.log('Search by Party"', tracks);
          setLove(tracks);
    }, function(err) {
      console.error(err);
    });

    spotifyApi.searchTracks('Disco')
    .then((tracks) =>  {
      console.log('Search by Party"', tracks);
      setDisco(tracks);
    }, function(err) {
    console.error(err);
    });
  },[])
    return (
        <div>
            <Sidebar/>
            <HomeNavbar/>
            <div className={styles.homeDiv}>
                <h1>GOOD MORNING</h1>
                <div>
                    {/* {pop.items.map(songs => {
                      console.log(songs);
                    })} */}
                </div>
            </div>
        </div>
    )
}