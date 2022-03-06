import { useEffect, useState } from "react"

import { Sidebar } from "../Sidebar";
import { HomeNavbar } from "../HomeNavbar";
import SpotifyWebApi from "spotify-web-api-js";

import { useContext } from "react/cjs/react.development";
import { AutheContext } from '../Contextprovider'
import { Audioplay } from './audio'
import { useParams } from "react-router-dom";
import { PlaylistBoxes } from '../plalistbox'
import { Back, Controls, Content, SandAP, Layout } from './Artist'

const spotifyApi = new SpotifyWebApi();


export function Playlist() {


    const [artist, setArtist] = useState([]);
    const [description, setDescription] = useState({})
    const { state, audio } = useContext(AutheContext)

    const { id } = useParams()

    useEffect(() => {
        spotifyApi.setAccessToken(state)


        spotifyApi.getPlaylist(id)
            .then(function (data) {
                //  console.log('Some information about this playlist', data);

                setDescription({
                    'descr': data?.description,
                    'total': data?.followers?.total,
                    'name': data?.name,
                    'img': data?.images[0].url
                })
                console.log(data)
                setArtist(data?.tracks?.items)
                console.log(artist)
            }, function (err) {
                console.log('Something went wrong!', err);
            });
        console.log("des", description);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state, id]);


    return <>
        <Layout>
            <Sidebar />
            <HomeNavbar />
            <Back image={description?.img}>

                <div >

                </div>
                <h2>{description?.name}</h2>
                <p>{description?.total} monthly listeners</p>
            </Back>

            <Content>
                <Controls>
                    <div><img src="http://localhost:3000/VectorPlay.svg" alt="play" /></div>

                    <div><img src="http://localhost:3000/MoreTripledots.svg" alt="triple dots" /></div>
                </Controls>
                <SandAP>
                    <div>
                        <h2>Popular</h2>

                        {artist.map((song, count) => (
                            <PlaylistBoxes key={song} song={song} count={count++} />
                        ))}
                    </div>

                </SandAP>


            </Content>

            {
                (audio?.name !== undefined) ? <Audioplay /> : null
            }

        </Layout>





    </>

}

