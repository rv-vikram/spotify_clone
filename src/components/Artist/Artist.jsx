import { useEffect, useState } from "react"
import { getTokenFromResponse } from "../spotifyApi"

import styled from "styled-components";
import { Sidebar } from "./Sidebar ";
import SpotifyWebApi from "spotify-web-api-js";
const spotifyApi = new SpotifyWebApi();
// {
//     {
//         {
//             export const Dashboard = () => {
//                 useEffect(() => {

//                     spotifyApi.searchTracks('friends')
//                         .then((data) => {
//                             console.log('Search by "Love"', data);
//                         })
//                     spotifyApi.getCategories({
//                         limit: 5,
//                         offset: 0,
//                         country: 'SE',
//                         locale: 'sv_SE'
//                     })
//                         .then(function (data) {
//                             console.log(data);
//                         }, function (err) {
//                             console.log("Something went wrong!", err);
//                         });
//                     spotifyApi.getArtistAlbums('2ryKHw6BaxKXC1KhRp4Nh1')
//                         .then(function (data) {
//                             console.log('Artist albums', data);
//                         }, function (err) {
//                             console.error(err);
//                         });
//                     spotifyApi.getAudioFeaturesForTrack("08bNPGLD8AhKpnnERrAc6G")
//                         .then(function (data) {
//                             console.log(data);
//                         })

//                     spotifyApi.getAudioAnalysisForTrack('08bNPGLD8AhKpnnERrAc6G')
//                         .then(function (data) {
//                             console.log(data);
//                         });

//                 }, [token])

//                 return <>
//                     <h1>logged in</h1>

//                 </>
//             }}}}

export function Artist() {

    const [token, setToken] = useState("")

    useEffect(() => {
        let hash = getTokenFromResponse()
        setToken(hash.access_token)
        spotifyApi.setAccessToken(token)
        spotifyApi.getMe().then((user) => {
            console.log(user)
        });
    }, [token]);

    return <Layout>
        <Sidebar />
        <Back />
    </Layout>
}

const Layout = styled.div`
    margin: 0px;
`;

const Back = styled.div`
    margin-left:200px;
    width:100%;
    height: 400px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.59) 100%);
`;

