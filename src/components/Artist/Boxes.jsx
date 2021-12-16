import styled from "styled-components";

export function Boxes() {

    return <Box>
        <img src="card1.svg" alt="svg" />
        <div>Daily Mix 1</div>
        <div>Alan Walker, The Chainsmoker</div>
        <div><img src="http://localhost:3000/VectorPlay.svg" alt="play" /></div>
    </Box>
}

const Box = styled.div`
    width:216px;
    height:304px;
    background: #181818;
    mix-blend-mode: normal;
    border-radius: 4px;
    padding:16px;
    margin: 0px 16px;
    &:hover{
    background: #282828;
    &>div:nth-child(4){
        visibility:visible;
    }
    }
    &>img{
        width:100%;
    }
    &>div:nth-child(2){
        margin: 16px 0px;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
        color: #FFFFFF;
    }
    &>div:nth-child(3){
        font-weight: 500;
        font-size: 13px;
        line-height: 16px;
        letter-spacing: -0.03em;
        color: #B2B2B2;
    }
    &>div:nth-child(4){
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
    
    &>div:nth-child(4)>img{
        position: relative;
        left: 36%;
        top: 28%;
        transform:scale(.8)

    }
`;
