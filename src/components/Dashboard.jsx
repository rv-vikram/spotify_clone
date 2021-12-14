
import { useEffect,useState } from "react"
import { getTokenFromResponse } from "./spotifyApi"
import SpotifyWebApi from "spotify-web-api-js";
const spotifyApi = new SpotifyWebApi();
export const Dashboard=()=>{
    const [token,setToken]= useState("")
    useEffect(()=>{
     let hash= getTokenFromResponse()
     setToken(hash.access_token)
     spotifyApi.setAccessToken(token)
     spotifyApi.getMe().then((user) => {
        console.log(user)
      });

    //   spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
    //     function(data) {
    //       console.log('Artist albums', data.body)
    //     },
    //     function(err) {
    //       console.error(err)
    //     }
    //   );


    spotifyApi.searchTracks('love')
  .then(function(data) {
    console.log('Search tracks by "Love" in the artist name', data.body);
  }, function(err) {
    console.log('Something went wrong!', err);
  });

//   spotifyApi.getAudioFeaturesForTrack('08bNPGLD8AhKpnnERrAc6G')
//   .then(function(data) {
//     console.log(data.body);
//   }, function(err) {
//     console.log(err)
//   });

    },[token])
    
    return<>
  <h1>logged in</h1>
    
    </>
}