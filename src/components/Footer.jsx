import styled from "styled-components"


export const Footer=()=>{
    return<>
    
    
    <FooterDv>

       <div className="icondiv">
       <img src="spotifywhite.svg" alt="" />
       </div>
       <div>
           <h2>COMPANY</h2>
           <h3>About</h3>
           <h3>Jobs</h3>
           <h3>For the record</h3>
       </div>
       <div>
       <h2>COMMUNITIES</h2>
           <h3>For Artists</h3>
           <h3>Developers</h3>
           <h3>Advertising</h3>
           <h3>Investors</h3>
           <h3>Vendors</h3>
       </div>
       <div>
       <h2>USEFUL LINKS</h2>
           <h3>Support</h3>
           <h3>Web Player</h3>
           <h3>Free Mobile App</h3>
       </div>
       <div>
      <div className="social" >
         <div style={{width:"20px", height:"20px",borderRadius:"20px",margin:"10px",padding:'13px',background:"hsla(0, 0%, 16%, 1)"}}>
             <img src="insta.svg"></img>
         </div>
         <div style={{width:"20px", height:"20px",borderRadius:"20px",margin:"10px",padding:'12px 15px',background:"hsla(0, 0%, 16%, 1)"}}>
         <img src="facebook.svg"></img>
         </div>
         <div style={{width:"20px", height:"20px",borderRadius:"20px",margin:"10px",padding:'13px',background:"hsla(0, 0%, 16%, 1)"}}>
         <img src="twitter.svg"></img>
         </div>
      </div>
       </div>
    </FooterDv>
    
    </>
}


export const FooterDv=styled.div`

width:100vw;
background:var(--dark-black-background);
padding:40px;

display:flex;
flex-wrap:wrap;
justify-content: space-between;

& div{
    width:20%;
}

h2{
    color:#B2B2B2;
    font-size:0.9em;
    cursor:pointer;
    font-weight: 600;
    
}

h3{
    color:var(--darkwhite-color);
    font-size:0.9em;
    cursor:pointer;
    font-weight: 600;
}

h2:hover{
    color:var(--hover-green-color);
}

h3:hover{
    color:var(--hover-green-color);
}

.social{
    display:flex;
    paddingRight:5px;
}
@media only screen and (max-width: 1000px ){
    .icondiv{
        width:100%;
    }

    h2,h3{
        font-size:1em;
    }

    .social{
        display:block;
    }
}
@media only screen and (max-width: 600px ){

    & div{
        width:100%;
        margin-top:20px;
    }
    h2,h3{
        font-size:1.1em;
    }
}
`   