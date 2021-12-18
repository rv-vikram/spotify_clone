
//import { useEffect } from "react"

//import SpotifyWebApi from "spotify-web-api-js";

//const spotifyApi = new SpotifyWebApi();
import styled from "styled-components"
export const Dashboard = () => {
  return <>

    <Audiopplay>
      <audio
        controls
        src="https://p.scdn.co/mp3-preview/346755e1c36bc95e0c98f625d22a5a354e0351dc?cid=92dd421bf3424cee834b25f04461da51">
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </Audiopplay>

  </>
}


export const Audiopplay = styled.div`

width:100%;
padding:10px;
background:var(--dark-black-background);
display:flex;
justify-content:center;
align-items:center;
position:sticky;
bottom:0px;


`
