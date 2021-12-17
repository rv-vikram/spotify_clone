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
        .then((data) =>  {
         console.log('Search by Pop"',data.tracks.items);
          setPops(data.tracks.items);
    }, function(err) {
      console.error(err);
    });

        spotifyApi.searchTracks('Love')
        .then((data) =>  {
         // console.log('Search by Love"', data.tracks.items);
          setLove(data.tracks.items);
    }, function(err) {
      console.error(err);
    });

    spotifyApi.searchTracks('Disco')
    .then((data) =>  {
     // console.log('Search by Party"', data.tracks.items);
      setDisco(data.tracks.items);
    }, function(err) {
    console.error(err);
    });
  },[])
    return (
        <div>
            <Sidebar/>
            <HomeNavbar/>
            <div className={styles.homeDiv}>
                <div>
                  {pop.map((e) => (
                    
                        <div className={styles.pop}>
                          <img src = {e?.album?.images[0]?.url} alt = "pop"/>
                          <h4> {e?.name}</h4>
                          <p>{e?.artists[0]?.name}</p>
                        </div>

                  ))}
                </div>
            </div>
            {/* <div></div>
            <div className={styles.homeDiv}>
                <div>
                  {love.map((e) => (
                    
                        <div className={styles.pop}>
                          <img src = "cover.svg" alt = "pop"/>
                          <h4> {e.name}</h4>
                          <p>{e.artists[0].name}</p>
                        </div>

                  ))}
                </div>
            </div> */}
        </div>
    )
}