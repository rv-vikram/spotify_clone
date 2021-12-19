import { useEffect, useState } from "react"

import styled from "styled-components";
import { Sidebar } from "./Sidebar";
import SpotifyWebApi from "spotify-web-api-js";
import { Songs } from "./Artist/Songs";

import { useContext } from "react/cjs/react.development";
import {AutheContext} from './Contextprovider'
import {Audioplay} from './Artist/audio'
import { useParams } from "react-router-dom";
import {Back,Controls,Content,SandAP,Popular,Layout} from './Artist/Artist'

const spotifyApi = new SpotifyWebApi();


export function Tracks() {

    
    const [tracks, setTracks] = useState([]);
   
    const {state,audio} = useContext(AutheContext)
    
const {id} = useParams()

    useEffect(() => {
        spotifyApi.setAccessToken(state)

        
        spotifyApi.searchTracks(id)
        .then(function(data) {
          console.log('Search by "party"', data.tracks.items);
          setTracks(data?.tracks?.items)
        }, function(err) {
          console.error(err);
        });
        
    }, [state,id]);

  
    return <>
    <Layout>
         <Sidebar />
        {/* <Back props={description?.img}>
           
            <div >
           
            </div>
            <h2>{description?.name}</h2>
            <p>{description?.total} monthly listeners</p>
        </Back> */}
         
        <Content>
            <Controls>
                <div><img src="http://localhost:3000/VectorPlay.svg" alt="play" /></div>
            
                <div><img src="http://localhost:3000/MoreTripledots.svg" alt="triple dots" /></div>
            </Controls>
            <SandAP>
                <div>
                    <h2>{tracks[0]?.type}</h2>
                 {console.log(tracks,'track')}
                    {tracks.map((song, count) => (
                        <Songs  key={song} song={song} count={count++} />
                    ))}
                </div>
            
            </SandAP>
            
        
           
        </Content>
       
     {
        ( audio?.name!==undefined)?   <Audioplay/>:null
     } 

    </Layout>

    
   
    

    </>
    
}

