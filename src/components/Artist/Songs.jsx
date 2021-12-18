import styled from "styled-components";
import { useContext } from "react";
import { AutheContext } from "../Contextprovider";

function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(+millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

function getRandomInt() {
    let str = Math.floor(Math.random() * 10000000);
    str.toString();
    return str;
}
export const Songs=(song, count)=> {
    
    const {setaudio}= useContext(AutheContext)
   
    return <Box onClick={()=>{
       setaudio({
           'image':song?.song?.album?.images[2].url,
           'name':song?.song?.name,
           'artist':song?.song.artists[0]?.name

       })
    //   console.log(audio);
    }}>
        <div>{song.count + 1}</div>
        <img src={song.song.album.images[2].url} alt="song" />
        <div>{song.song.name}</div>
        
        <div>{getRandomInt()}</div>
        <img src="http://localhost/3000/heartheart.svg" alt="heart" />
        <div>{millisToMinutesAndSeconds(song.song.duration_ms)}</div>
        <img src="MoreTripledots.svg" alt="dots" />
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
    &>img:nth-child(5),
    &>img:nth-child(7){
        visibility:visible;
    }
    }
    &>div:nth-child(1){
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 18px;
        color: #FFFFFF;
    }
    &>div:nth-child(3){
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
    &>div:nth-child(4){
        width:100px;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        color: #FFFFFF;
        margin-left:15%;
    }
    &>div:nth-child(6){
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
    &>img:nth-child(5){
        visibility:hidden;
        width:24px;
        margin: 0px;

    }
    &>img:nth-child(7){
        width:24px;
        margin: 4%;
        visibility:hidden;
    }
    &>img:nth-child(5):hover{
        /* width:24px;
        margin: 4%;
        visibility:hidden; */
        src:"http://localhost:3000/heartwhite.svg";
    }
`;
