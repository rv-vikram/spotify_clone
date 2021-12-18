import {Sidebar} from "./Sidebar"
import { useEffect,useState,useContext } from "react"
import SpotifyWebApi from "spotify-web-api-js";
import { HomeNavbar } from "./HomeNavbar";

import {AutheContext}  from './Contextprovider'
import {Songs} from './Artist/Songs'
import styled from "styled-components";
import {SearchBox} from './searchbox'
import {Link} from 'react-router-dom'
import { Audiopplay } from "./Artist/audio";
const spotifyApi = new SpotifyWebApi();
export const Debouncing = () => {
    const [search,setSearch] = useState('')
    const [artist,setArtist]= useState({
      'external_urls': {spotify: 'https://open.spotify.com/artist/4YRxDV8wJFPHPTeXepOstw'},
'followers': {href: null, total: 38442702},
'genres':  ['desi pop', 'filmi', 'modern bollywood'],
'href': "https://api.spotify.com/v1/artists/4YRxDV8wJFPHPTeXepOstw",
'id': "4YRxDV8wJFPHPTeXepOstw",
'images':  [{url:'shshh'},{url:'shjshs'},{url:'shshshhs'}],
'name': "Arijit Singh",
'popularity': 86,
'type': "artist",
'uri': "spotify:artist:4YRxDV8wJFPHPTeXepOstw"
    })
    const [artists,setArtists]=useState([])


    const [searchResult,setSearchResult] = useState([
   
{
  'album':{'images':[{url:'shshh'},{url:'shjshs'},{url:'shshshhs'}]},
  'artists': [{}],
'disc_number': 1,
'duration_ms': 200218,
'explicit': false,
'external_ids': {isrc: 'INS172102500'},
'external_urls': {spotify: 'https://open.spotify.com/track/3KeMulXbLDJBQdY5PZbGEh'},
'href': "https://api.spotify.com/v1/tracks/3KeMulXbLDJBQdY5PZbGEh",
'id': "3KeMulXbLDJBQdY5PZbGEh",
'is_local': false,
'name': "Param Sundari",
'popularity': 76
}

    ])
    const[categories,setCategory] =useState([])
    const {state , f,audio} = useContext(AutheContext)

    console.log(searchResult);

    useEffect(() => {
            spotifyApi.setAccessToken(state)

            spotifyApi.getCategories({
                limit : 25,
                offset: 0,
                country: 'IN',
              
            })
            .then(function(data) {
           
              setCategory(data?.categories?.items)
            }, function(err) {
              console.log("Something went wrong!", err);
            });
        



            
    }, [state, f])
let c=0
    useEffect(() => {
        if(!search)
          {
            return(
              setSearchResult([]) 
             
            )
          }
          let cancel =  false;

        spotifyApi.searchTracks(search).then(res => {
         if(cancel) return 
        setSearchResult(res.tracks.items)

            console.log(res.tracks.items);
        })

       

       return () => cancel = true ;

 

    },[search,state])
    return (

        <div>
        <Sidebar/>
        <HomeNavbar>

    
    

        <input  style={{padding:'9px',outline:'none',borderRadius:'15px',margin:'20px 0 3px 20px',width:'20%',border:'none'}}
                type = "search"
                placeholder="Search songs"
                value = {search}
                onChange = {(e) => {
                  setSearch(e.target.value)
                  spotifyApi.searchArtists(search)
                  .then(function(data) {
                    setArtist(data.artists.items[0])
                    console.log( data.artists.items[0],'as');
                  });
                }}


               
                />
        
        
    
        </HomeNavbar>
        <Container >
          {/* {console.log(artist?.images[0]?.url,'ar')} */}
        <ArtistDiv prop={search.length}>
         <Link to={`/artist/${artist?.id}`}>
         <div className='1'>
          <h2 style={{display:"block"}}>Top Results</h2>
            <img src={artist?.images[0]?.url} alt="ad" />
            <h3>{artist?.name}</h3>
            <p>{artist?.type}</p>
          </div>
          </Link>
                
          <div className='2'>
          {searchResult.splice(0,5).map((e,count)=>{
                  return <Songs key={e.id} count={count++} song={e}></Songs>
                })}
          </div>
        </ArtistDiv>
       
            <Div prop={search.length} >
            { (categories.map((e)=>{
                return <Link style={{textDecoration:"none"}} to={`debounce/${e.id}`}><SearchBox prop={e} search={search.length} /></Link>
              }))
            }
              <Audiopplay prop={audio} />
               
            </Div>       
        </Container>
    </div>
      
    )
}

export const Div=styled.div`
display:flex;
width:100%;
margin:15px auto;
padding:0 10px;
flex-wrap:wrap;
min-height:100vh;
background:#181818;
`
export const ArtistDiv=styled.div`

display:${props=>(props.prop)>2? 'flex':'none'};
padding:15px;

& div {
 
  padding:5px;
  background:#181818;


  margin-left:30px;
  & img{
    max-width:30%;
    border-radius:50px;
  }
 
  mix-blend-mode: normal;
  border-radius: 4px;
  padding:16px;
  
  
}

.1{
  width:10%;
  min-height:0vh;
  &:hover{
    background: #282828;
  }
}
.2{
  width:80%;
  min-height:0vh;
  
}

p,h3,h2{
  color:white;
}

`
export const Container=styled.div`
position: absolute;
  display: flex;
  width: 90%;
  flex-wrap: wrap;
background:#181818;
  left: 200px;
  top: 64px;
  /* border: 1px solid black; */
  background: #121212;
  margin:auto;

 overflow-x:scroll ; 



`