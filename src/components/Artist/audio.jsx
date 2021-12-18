
//import { useEffect } from "react"

//import SpotifyWebApi from "spotify-web-api-js";

//const spotifyApi = new SpotifyWebApi();
import { useContext } from "react"
import { AutheContext } from '../Contextprovider'
import styled from "styled-components"
export const Audioplay = () => {
  const { audio } = useContext(AutheContext)
  return <>

    <Audiopplay prop={audio}>
      <div>
        <img src={audio?.image} alt="" />
      </div>

      <div>
        <p>{audio?.name}</p>
        <p id='artist'>{audio?.artist}</p>
      </div>
      <div>
        <img src='http://localhost:3000/heart.png' style={{ width: "10%" }} alt="" />
      </div>

      <div></div>
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
& div{
  margin:0 20px;
}

p{
  font-weight: 600;
font-size: 14px;
line-height: 18px;
margin:10px;

text-transform: capitalize;

color: #FFFFFF;


}

width:100%;
padding:10px 70px;
background: #181818;
display:flex;

align-items:center;
position:sticky;
bottom:0px;
#artist{
  font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 10px;
line-height: 12px;

color: #B2B2B2;

img{
  border-radius:5px;
}
}

`
