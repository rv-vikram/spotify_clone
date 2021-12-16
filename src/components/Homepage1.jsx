import {Sidebar} from "./Sidebar"
//import { useEffect,useState } from "react"
//import SpotifyWebApi from "spotify-web-api-js";
import { HomeNavbar1 } from "./HomeNavbar1";
import styles from "./CSS/Homepage1.module.css"

//const spotifyApi = new SpotifyWebApi();

export const Homepage1 = () => {

  
    return (
        <div>
            <Sidebar/>
            <HomeNavbar1/>
            <div className={styles.homeDiv}>

            </div>
        </div>
    )
}