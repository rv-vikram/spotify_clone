import {Sidebar} from "./Sidebar"
import { useEffect,useState,useContext } from "react"
import SpotifyWebApi from "spotify-web-api-js";
import { HomeNavbar } from "./HomeNavbar";
import styles from "./CSS/Homepage.module.css"
import {AutheContext}  from './Contextprovider'
import axios from "axios";
import { Popular,span} from "./Artist/Artist";
import {HomeBoxes} from './homepagebox'
import {Link} from 'react-router-dom'
const spotifyApi = new SpotifyWebApi();


export const Homepage = () => {

  // const [pop,setPops] = useState([])
  // const [love,setLove] = useState([])
  // const [disco, setDisco] = useState([])
  const [throwback,setThroback]= useState([])
  const [salena,setSalena]= useState([])

  const {state} = useContext(AutheContext)
  
  // const  getPlaylists=async()=>{
  //   let res= await axios.get('https://v1.nocodeapi.com/shikha66/spotify/khlxhhOefBdJBWjT/browse/featured')
  //   console.log(res.data.getPlaylists.items,'hxjkshj')
    
  
  // }

    useEffect(()=>{
      spotifyApi.setAccessToken(state)
    

    spotifyApi.searchPlaylists('throwback')
    .then(function(data) {
      console.log('Found playlists are', data);
      setThroback(data?.playlists?.items)
    }, function(err) {
      console.log('Something went wrong!', err);
    });

    spotifyApi.searchPlaylists('salena gomez',{
      limit : 5
    })
    .then(function(data) {
      console.log('Found playlists party are', data,'sal');
      setSalena(data?.playlists?.items)
    }, function(err) {
      console.log('Something went wrong!', err);
    });
  //   spotifyApi.getPlaylist('party')
  // .then(function(data) {
  //   console.log(data,'category');
  // }, function(err) {
  //   console.log("Something went wrong!", err);
  // });


    //     spotifyApi.searchTracks('Love')
    //     .then((data) =>  {
    //      // console.log('Search by Love"', data.tracks.items);
    //       setLove(data.tracks.items);
    // }, function(err) {
    //   console.error(err);
    // });

    // spotifyApi.searchTracks('Disco')
    // .then((data) =>  {
    //  // console.log('Search by Party"', data.tracks.items);
    //   setDisco(data.tracks.items);
    // }, function(err) {
    // console.error(err);
    // });
  },[])
    return (
        <div>
            <Sidebar/>
            <HomeNavbar/>
            <div className={styles.homeDiv}>
        
            <Popular>
                <h2>Throwback</h2>
                <span>SEE ALL</span>
                <div>
                { (throwback.slice(0,4)).map((e)=>{
                    return <Link style={{textDecoration:'none'}} to={`/playlist/${e.id}`}><HomeBoxes prop={e} /></Link>
                  })}
                  
                   
                </div>

            </Popular>
           
            <Popular>
                <h2></h2>
                <span>SEE ALL</span>
                <div>
                { (salena.slice(0,4)).map((e)=>{
                    return <Link style={{textDecoration:"none"}} to={`/playlist/${e.id}`}><HomeBoxes prop={e} /></Link>
                  })}
                  
                   
                </div>

            </Popular>
            <Popular>
                <h2></h2>
                <span>SEE ALL</span>
                <div>
                { (throwback.slice(0,4)).map((e)=>{
                    return <Link style={{textDecoration:"none"}} to={`/playlist/${e.id}`}><HomeBoxes prop={e} /></Link>
                  })}
                  
                   
                </div>

            </Popular>
            <Popular>
                <h2></h2>
                <span>SEE ALL</span>
                <div>
                { (throwback.slice(0,4)).map((e)=>{
                    return <HomeBoxes prop={e} />
                  })}
                  
                   
                </div>

            </Popular>
            <Popular>
                <h2></h2>
                <span>SEE ALL</span>
                <div>
                { (throwback.slice(0,4)).map((e)=>{
                    return <HomeBoxes prop={e} />
                  })}
                  
                   
                </div>

            </Popular>
            </div>


           
        </div>
    )
}