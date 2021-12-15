import styled from "styled-components";

function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}


export function Songs(song) {

    return <Box>
        <div>1</div>
        <img src="" alt="" />
        <div>{song.name}</div>
        <div>34343434</div>
        <div>{millisToMinutesAndSeconds(song.duration_ms)}</div>
    </Box>
}

const Box = styled.div`
    max-width:776px;
    height: 56px;
    background: #181212;
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding: 8px 40px;
    &:hover{
    background: rgba(255, 255, 255, 0.15);
    }
    &>div:nth-child(1){
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 18px;
        color: #FFFFFF;
    }
    &>div:nth-child(3){
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #FFFFFF;
    }
    &>div:nth-child(4){
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        color: #FFFFFF;
        margin-left:15%;
    }
    &>div:nth-child(5){
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        color: #FFFFFF;
        margin-left:15%;

    }

`;
