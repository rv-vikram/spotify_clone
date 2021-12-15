
import { useEffect,useState } from "react"
import { getTokenFromResponse } from "./spotifyApi"
import SpotifyWebApi from "spotify-web-api-js";
const spotifyApi = new SpotifyWebApi();
export const Dashboard=()=>{
    const [token,setToken]= useState("")
    useEffect(()=>{
     let hash= getTokenFromResponse()
     setToken(hash.access_token)
     hash="";
     spotifyApi.setAccessToken(token)
     spotifyApi.getMe().then((user) => {
        console.log(user)
      });

//       spotifyApi.searchTracks('friends')
//   .then((data)=> {
//     console.log('Search by "Love"', data);
//   })

  
  
//   spotifyApi.getCategories({
//     limit : 5,
//     offset: 0,
//     country: 'SE',
//     locale: 'sv_SE'
// })
// .then(function(data) {
//   console.log(data);
// }, function(err) {
//   console.log("Something went wrong!", err);
// });


  
  // spotifyApi.getArtistAlbums('2ryKHw6BaxKXC1KhRp4Nh1')
  // .then(function(data) {
  //   console.log('Artist albums', data);
  // }, function(err) {
  //   console.error(err);
  // });
  // spotifyApi.getAudioFeaturesForTrack("08bNPGLD8AhKpnnERrAc6G")
  // .then(function(data) {
  //   console.log(data);
  // })
    
  // spotifyApi.getAudioAnalysisForTrack('08bNPGLD8AhKpnnERrAc6G')
  // .then(function(data) {
  //   console.log(data);
  // });

    },[token])
    
    return<>
  <h1>logged in</h1>
    
    </>
}