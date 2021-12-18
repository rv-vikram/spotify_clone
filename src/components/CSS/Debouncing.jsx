import { useState,useContext,useEffect } from "react"
import { AutheContext } from "../Contextprovider";
import { getTokenFromResponse } from "../spotifyApi";
//import { accessUrl } from "../spotifyApi";
import SpotifyWebApi from "spotify-web-api-js"


const spotifyApi = new SpotifyWebApi();
export const Debouncing = () => {
    const [search,setSearch] = useState('')
    const [searchResult,setSearchResult] = useState([])
    const [token,setToken] = useState('')
    const {state , f} = useContext(AutheContext)

    console.log(searchResult);

    useEffect(() => {
        let hash = getTokenFromResponse()
        window.location.hash = "";
        let _token = hash.access_token;
        
        if (_token) {
            f(hash.access_token)
            setToken(hash.access_token)
            window.location.hash = ""

            spotifyApi.setAccessToken(_token)
        }
    }, [state, f])

    useEffect(() => {
        if(!search)
            return setSearchResult([])
          let cancel =  false;
        spotifyApi.searchTracks(search).then(res => {
         if(cancel) return 

            setSearchResult(res.tracks.items.map(track => {
                const smallestAlbumImage = track.album.images.reduce(
                       (smallest,image) => {
                        if(image.height < smallest.height)
                            return image
                        
                        return smallest
                    },track.album.images[0]) 
                return {
                    artist : track.artists[0].name,
                    title: track.name,
                    uri : track.uri,
                    albumUrl : smallestAlbumImage.url
                }
            }))
        })

       return () => cancel = true ;

    },[search])
    return (
        <div>
           <div>
           <input 
                type = "search"
                placeholder="Search songs"
                value = {search}
                onChange = {(e) => setSearch(e.target.value)}
                />
           </div>
           <div>

           </div>
        </div>
    )
}