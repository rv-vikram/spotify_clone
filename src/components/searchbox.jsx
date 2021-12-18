import styled from "styled-components";

export function SearchBox({ prop, search }) {
    console.log(search);

    return <Box >
        <img src={prop?.icons[0]?.url} alt="svg" />
        <div>{prop?.name}</div>
    </Box>
}

const Box = styled.div`
    width:200px;
    display:${props => (props.search > 1) ? "hidden" : "block"};
    background: #181818;
    mix-blend-mode: normal;
    border-radius: 4px;
    margin: 5px;
    border-radius:20px;
    
    &>img{
        width:100%;
        border-radius:20px;
        
    }
    &>div:nth-child(2){
        position:relative;
        bottom:45px;
        margin: 10px 10px;
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
