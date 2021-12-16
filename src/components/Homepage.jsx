import {Sidebar} from "./Sidebar"
import { useEffect,useState } from "react"
import SpotifyWebApi from "spotify-web-api-js";
import { HomeNavbar } from "./HomeNavbar";
import styles from "./CSS/Homepage.module.css"

const spotifyApi = new SpotifyWebApi();

export const Homepage = () => {

  const [pop,setPops] = useState([])
  const [love,setLove] = useState([])
  const [disco, setDisco] = useState([])

    useEffect(()=>{
        spotifyApi.searchTracks('Pop')
        .then(({tracks}) =>  {
          console.log('Search by Party"',tracks );
          setPops(tracks);
    }, function(err) {
      console.error(err);
    });

        spotifyApi.searchTracks('Love')
        .then(({tracks}) =>  {
          //console.log('Search by Party"', tracks);
          setLove(tracks);
    }, function(err) {
      console.error(err);
    });

    spotifyApi.searchTracks('Disco')
    .then(({tracks}) =>  {
      //console.log('Search by Party"', tracks);
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