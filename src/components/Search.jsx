import { Sidebar } from "./Sidebar"
import { useEffect, useState, useContext } from "react"
import SpotifyWebApi from "spotify-web-api-js";
import { HomeNavbar } from "./HomeNavbar";
import { Msongs } from "./Msongs.jsx";
import { AutheContext } from './Contextprovider'

import styled from "styled-components";
import { SearchBox } from './searchbox'
import { Link } from 'react-router-dom'
import { Audiopplay } from "./Artist/audio";
const spotifyApi = new SpotifyWebApi();
export const Debouncing = () => {
  const [search, setSearch] = useState('')
  const [artist, setArtist] = useState({
    'external_urls': { spotify: 'https://open.spotify.com/artist/4YRxDV8wJFPHPTeXepOstw' },
    'followers': { href: null, total: 38442702 },
    'genres': ['desi pop', 'filmi', 'modern bollywood'],
    'href': "https://api.spotify.com/v1/artists/4YRxDV8wJFPHPTeXepOstw",
    'id': "4YRxDV8wJFPHPTeXepOstw",
    'images': [{ url: 'shshh' }, { url: 'shjshs' }, { url: 'shshshhs' }],
    'name': "Arijit Singh",
    'popularity': 86,
    'type': "artist",
    'uri': "spotify:artist:4YRxDV8wJFPHPTeXepOstw"
  })
  const [artists, setArtists] = useState([])


  const [searchResult, setSearchResult] = useState([

    {
      'album': { 'images': [{ url: 'shshh' }, { url: 'shjshs' }, { url: 'shshshhs' }] },
      'artists': [{}],
      'disc_number': 1,
      'duration_ms': 200218,
      'explicit': false,
      'external_ids': { isrc: 'INS172102500' },
      'external_urls': { spotify: 'https://open.spotify.com/track/3KeMulXbLDJBQdY5PZbGEh' },
      'href': "https://api.spotify.com/v1/tracks/3KeMulXbLDJBQdY5PZbGEh",
      'id': "3KeMulXbLDJBQdY5PZbGEh",
      'is_local': false,
      'name': "Param Sundari",
      'popularity': 76
    }

  ])
  const [categories, setCategory] = useState([])
  const { state, f, audio } = useContext(AutheContext)
  const [browse, setBrowse] = useState(true);
  console.log(searchResult);

  useEffect(() => {
    spotifyApi.setAccessToken(state)

    spotifyApi.getCategories({
     
      country: 'IN'

    })
      .then(function (data) {

        setCategory(data?.categories?.items)
      }, function (err) {
        console.log("Something went wrong!", err);
      });





  }, [state, f])
  let c = 0
  useEffect(() => {
    if (!search) {
      return (
        setSearchResult([])

      )
    }
    let cancel = false;

    spotifyApi.searchTracks(search).then(res => {
      if (cancel) return
      setSearchResult(res.tracks.items)

      console.log(res.tracks.items, 'tracks');
    })



    return () => cancel = true;



  }, [search, state])
  return (

    <Maindiv>
      <Sidebar />
      <HomeNavbar>




        <input onClick={() => setBrowse(false)} style={{ padding: '9px', outline: 'none', borderRadius: '15px', margin: "12px 0px 12px 20px", width: '25%', float: "left", border: 'none' }}
          type="search"
          placeholder="Search Songs, Artist and Playlits"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
            spotifyApi.searchArtists(search)
              .then(function (data) {
                setArtist(data.artists.items[0])

              });
          }}
        />



      </HomeNavbar>
      <Container >

        <ArtistDiv prop={search.length}>
          <Link style={{ textDecoration: 'none' }} to={`/search/artist/${artist?.id}`}>
            <div className='one'>
              <h2 style={{ display: "block" }}>Top Results</h2>
              <img src={artist?.images[0]?.url} alt="ad" />
              <h3>{artist?.name}</h3>
              <p>{artist?.type}</p>
            </div>
          </Link>

          <div className='two'>
            {/* {searchResult.slice(0, 5).map((song) => (
              <Msongs key={song} song={song} />
            ))} */}
            {searchResult.splice(0, 5).map((e, count) => {
              return <Songs key={e.id} count={count++} song={e}>

                <img src={e?.album?.images[0]?.url} alt="" />
                <div >
                  <h5 style={{ margin: '6px 0px' }}>{e?.name}</h5>
                  <p style={{ margin: '0px', fontSize: '10px' }}>{e.artists[0].name}</p>
                </div>
              </Songs>
            })}
          </div>
        </ArtistDiv>

        <Div check={browse} prop={search.length} >
          {(categories.map((e) => {
            return <Link style={{ textDecoration: "none" }} to={`search/${e.id}`}><SearchBox prop={e} search={search.length} /></Link>
          }))
          }
          <Audiopplay prop={audio} />

        </Div>
      </Container>
    </Maindiv>

  )
}

const Maindiv = styled.div`
  height:100vh;
  width:100%;
  background-color:#181818;
`;

export const Songs = styled.div`

width:80%;
display:flex;
padding:5px;
& img{
width:10%;
padding:0px;
margin-right:14px;
}


`

export const Div = styled.div`
display:flex;
/* display:flex; */
width:80%;
margin:35px 15px;
padding:0px;
flex-wrap:wrap;
align-item:center;
  justify-content:center;

`
export const ArtistDiv = styled.div`

  display:${props => (props.prop) > 0 ? 'flex' : 'none'};
  align-items:centre;
  justify-content:centre;

padding:15px;
& div {
  background:#181818;
  & img{
    max-width:30%;
    border-radius:50px;
  }
 
  mix-blend-mode: normal;
  border-radius: 4px;
  
 
  }

  @media only screen and (max-width: 1100px ){
    display:block;
    & div{
      width:100%;
      margin-bottom:10px;
    }
  .two{
    min-width:82%;
  }
}

.one{
  width:80%;
  min-height:0vh;
  padding:10px 20px;
  
  &:hover{
    background: #282828;
  }
  & img{
    width:60%;
  }
}
.two{
  width:70%;
  min-height:0vh;
padding:10px;
}

p,h3,h2,h5{
  color:white;
}

`
export const Container = styled.div`
position: absolute;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
background:#181818;
  left: 230px;
  top: 64px;
  /* border: 1px solid black; */
  background: #121212;
  margin:auto;
align-item: center;
justify-content:center
 overflow-x:none ; 



`