
import styled, { keyframes } from "styled-components";
import { accessUrl } from "./spotifyApi";
import { useContext, useState,useEffect } from "react";
import { slideInRight,bounceInDown } from 'react-animations';
import {ImageDiv} from './backgroundimgDiv'
import Hamburger from 'hamburger-react'
import { Footer } from "./Footer";
import { AutheContext } from "./Contextprovider";
import { getTokenFromResponse } from "./spotifyApi"
import SpotifyWebApi from "spotify-web-api-js";
import { Link } from "react-router-dom";
const spotifyApi = new SpotifyWebApi();

export const Login = () => {
    const [isOpen, setOpen] = useState(false)
    const [user,setUser]= useState({})
    const [logout,setLogout] =useState(false)
    // const [refresh,setRefresh]= useState(false)
   
    const {state,f} = useContext(AutheContext)
   
    spotifyApi.setAccessToken(state)
    
  useEffect(()=>{
    let hash= getTokenFromResponse()
    window.location.hash = "";
    let _token = hash.access_token;
   
   
    if(_token){
        localStorage.setItem('token',JSON.stringify(_token))
  
    }
     
if(state){
    f(state)    
   
      
       spotifyApi.getMe().then((me) => {
           console.log('user',me)
            setUser(me)
          });
}


    },[state])

    return<>
       <Navdiv>

        <div style={{width:"80%",margin:"auto"}}>
        <img src="spotifywhite.svg" alt="" style={{clear:"right"}} />

        <div className="container" >
          <Link to='dashboard'>  <p >Premium</p></Link>
           <Link to='/artist'> <p>Support</p></Link>
            <p>Download</p>

            <div style={{width:'1px',height:'20px',background:'white',margin:'10px 15px 0 0'}}></div>
            {
            (state==="" || state===undefined|| state==null)? <>
                <a style={{ textDecoration:"none"}} href='https://accounts.spotify.com/en/login?continue=https:%2F%2Faccounts.spotify.com%2Fauthorize%3Fscope%3Duser-read-currently-playing%2Buser-read-recently-played%2Buser-read-playback-state%2Buser-top-read%2Buser-modify-playback-state%26response_type%3Dtoken%26redirect_uri%3Dhttp%253A%252F%252Flocalhost%253A3000%252Fdashboard%26client_id%3D92dd421bf3424cee834b25f04461da51%26show_dialog%3Dtrue'> <p className="light">Signup</p></a>
           <a style={{ textDecoration:"none"}} href={accessUrl}> <p className="light">Login</p></a>
           </>:

           <>
            
            <img className="userlogo"  src="userlogo.svg" ></img>
            
            <p style={{cursor:"pointer"}} >{user?.display_name}</p>
            <p onClick={()=>{
                setLogout(!logout)
            }}><img src="down.svg" alt=""  /></p>
            <Logoutdiv display={logout} >
               <p>Account</p>
               <p style={{cursor:'pointer'}} onClick={()=>{
                    f("")
                   localStorage.removeItem('token')
               }}>Logout</p>
            </Logoutdiv>
                </>
          }
        </div>
        <div className="hamburger">
         
          <Hamburger color="var(--darkwhite-color)" toggled={isOpen} toggle={setOpen} />
            </div>
        </div>
        <HamburgerDiv display={isOpen}>
          <p >Premium</p>
            <p>Support</p>
            <p>Download</p>
            <div style={{width:'80px',height:'2px',background:'white',margin:'20px 35px'}}></div>
          {
            (state!=undefined)? <>
            
      <p className="light">Account</p>
      <p className="light">Logout</p>
            </>:<>
                <a style={{ textDecoration:"none"}} href='https://accounts.spotify.com/en/login?continue=https:%2F%2Faccounts.spotify.com%2Fauthorize%3Fscope%3Duser-read-currently-playing%2Buser-read-recently-played%2Buser-read-playback-state%2Buser-top-read%2Buser-modify-playback-state%26response_type%3Dtoken%26redirect_uri%3Dhttp%253A%252F%252Flocalhost%253A3000%252Fdashboard%26client_id%3D92dd421bf3424cee834b25f04461da51%26show_dialog%3Dtrue'> <p className="light">Signup</p></a>
           <a style={{ textDecoration:"none"}} href={accessUrl}> <p className="light">Login</p></a></>
          }
           
          </HamburgerDiv>

       </Navdiv>
      
       <ImageDiv bg={'rgb(150, 240, 182)'}  para={"Individual plan only. ₹119/month after. Terms and conditions apply. Open only to users who haven't already tried Premium. Offer ends 31 December 2021."} btn={'GET 3 MONTHS FREE'} color={'#202F72'} src={'https://i.scdn.co/image/ab671c3d0000f430143da573d752a8cc11ca120e'} h1={'SPOTIFY PREMIUM'} h2={'Get 3 Months of premium for free'} h3={'Enjoy ad-free music listening, offline playback, and more. Cancel anytime.'}>
         
       </ImageDiv>
       <ImageDiv bg={'#F46EBE'} apple={'applebtn.svg'} google={'google.svg'} link={'Listen to 2021 highlights here.'} color={'#2941AB'} src={'2021.png'} h1={'#SPOTIFYWRAPPED'} h2={'2021 Wrapped is ready.'} h3={'But it’s only available in the Spotify app. Download it now to discover more.'}  />
          
  <ImageDiv bg={'rgb(41, 65, 171)'}   color={'#1ED760'} src={'landingpage.png'} h2={'Looking for music?'} h3={'Start listening to the best new releases.'} btn={'OPEN WEB PLAYER'} ></ImageDiv>
 
 
 <Footer/>
 
    </>
}

export const Navdiv=styled.div`
margin:0;
    width:100vw;
   padding:15px 0;
    background:var(--dark-black-background);
    margin-bottom:0px;
    

   & p{
        color:var(--darkwhite-color);
       margin: 10px 15px;
       font-weight:600;
       font-family: Montserrat;
       font-size:0.9em;
       letter-spacing: 0.05em;
      
    }

    p:hover{
        color:var(--hover-green-color);
    } 

    .light{
        color:rgba(255, 255, 255, 0.7)
    }

    .hamburger{
        display:none;
    }

    .container{
        display:flex;
        float:right;

         
        @media only screen and (max-width: 1100px){
            display:none;
            
        }


    }
    @media only screen and (max-width: 1100px ){
        .hamburger{
            display:block;
            position:absolute;
            top:10px;
            right:30px;
        }
    }

.userlogo:hover{
    cursor:pointer;
    color:green;
}

`
const bounceAnimation = keyframes`${slideInRight}`;




export const HamburgerDiv = styled.div`

    background:var(--dark-black-background);
    padding:10px;
    display:${props => props.display ? "block" : "none"};
    animation: 1s ${bounceAnimation};
    min-width:40%;
    position:absolute;
    right:0px;
    height:100vh;
    


    p{
        font-size:2em;
        margin:1em;
        text-decoration:none;
        
    }

   p:hover{
       color:var(--hover-green-color);
   } 
.light{
    margin-top:10px;
    font-size:1.5em;
}


@media only screen and (min-width: 1101px){
    
        display:none;
        
    

    
}



`

const bounddown = keyframes`${bounceInDown}`;

 export const Logoutdiv=styled.div`
 animation: 1s ${bounddown};
 
 display:${props=>props.display?"block":"none"};
 border-radius:3px;
 background:white;
 position:absolute;
 top:60px;
 right:170px;
& p{
    color:var(--dark-black-background);

    hover{
        color:var(--hover-green-color);
    }
}
 
 `
/**
 *  <a href={accessUrl}>
       Login
   </a>
    
 */