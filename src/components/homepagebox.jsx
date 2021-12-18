import styled from "styled-components";

export function HomeBoxes({ prop }) {


    return <Box >
        <div> <img src={prop?.images[0]?.url} alt="svg" /></div>
        <div>{prop?.name}</div>
        {/* <div>{prop?.artists[0]?.name}</div> */}
        <div><img src="http://localhost:3000/VectorPlay.svg" alt="play" /></div>
    </Box>
}

const Box = styled.div`
    width:190px;
   height:280px;
    background: #181818;
    mix-blend-mode: normal;
    border-radius: 4px;
    padding:16px;
    margin: 0px 16px;
    transition: .3s ease-in-out;
    &:hover{
    background: #282828;
    &>div:nth-child(4){
        visibility:visible;
    }

    }

    &>div>img{
        width:100%;
        border-radius: 10px;
    }
    &>div:nth-child(2){
        margin: 16px 0px;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
        color: #FFFFFF;
    }
    /* &>div:nth-child(3){
        font-weight: 500;
        font-size: 13px;
        line-height: 16px;
        letter-spacing: -0.03em;
        color: #B2B2B2; */
    }
    &>div:nth-child(3){
        visibility:hidden;
        position:relative;
        left: 75%;
        bottom: 40%;
        width:40px;
        height:40px;
        border-radius: 28px;
        background-color:#1DB954;
        transition: all 33ms cubic-bezier(.3,0,0,1);
    }
    
    &>div:nth-child(3)>img{
        position: relative;
        left: 0;
        top: 0;
        transform:scale(.8)

    }
`;