import styled from "styled-components";
import { useContext } from "react";
import { AutheContext } from "./Contextprovider";

function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(+millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}
export function Msongs(song) {
    console.log("songgsss", song);
    const { setaudio } = useContext(AutheContext)

    return <Box onClick={() => {
        setaudio({
            'image': song?.song?.album?.images[2].url,
            'name': song?.song?.name,
            'artist': song?.song.artists[0]?.name

            // return <Box onClick={() => {
            //     setaudio({
            //         'image': song?.song?.album?.images[2].url,
            //         'name': song?.song?.name,
            //         'artist': song?.song.artists[0]?.name

        })
        //   console.log(audio);
    }}>
        <img src={song.song.album.images[2].url} alt="song" />
        <div>{song.song.name}</div>
        <img src="heartheart.png" alt="heart" />
        <div>{millisToMinutesAndSeconds(song.song.duration_ms)}</div>
        <img src="http://localhost:3000/MoreTripledots.svg" alt="dots" />
    </Box>
}

const Box = styled.div`
   
    max-width:776px;
    height: 56px;
    background: #181212;
    cursor:pointer;
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding: 8px 40px;
    &:hover{
    background: rgba(255, 255, 255, 0.15);
    &>img:nth-child(3),
    &>img:nth-child(5){
        visibility:visible;
    }
    }
    &>div:nth-child(2){
        width:234px;
        height:20px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #FFFFFF;
    }
    &>div:nth-child(3){
        width:100px;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        color: #FFFFFF;
        margin-left:15%;
    }
    &>div:nth-child(4){
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        color: #FFFFFF;
        margin-left:4%;

    }
    &>img{
        width:40px;
        margin: 0px 20px;
    }
    &>img:nth-child(3){
        visibility:hidden;
        width:24px;
        margin: 0px;

    }
    &>img:nth-child(5){
        width:24px;
        margin: 4%;
        visibility:hidden;
    }
    &>img:nth-child(5):hover{
        /* width:24px;
        margin: 4%;
        visibility:hidden; */
    }
`;
