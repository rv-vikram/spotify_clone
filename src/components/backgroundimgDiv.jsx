import styled from "styled-components"
export const ImageDiv=({color,bg,btn,h1,h2,h3,src,})=>{
    return <>
    <Imgdiv color={color} bgc={bg}>
    
  <div className='cont'>
  <div >
          <h4>{h1}</h4>
          <h1>{h2}</h1>
          <h3>{h3}</h3>
        {btn?  <button>{btn}</button>:null}

        <p >Individual plan only. ₹119/month after. Terms and conditions apply. Open only to users who haven't already tried Premium. Offer ends 31 December 2021.</p>
          </div>
          <div className='imgdiv'>
          <img src={src}></img>
          </div>
         
  </div>
 
    </Imgdiv>
    </>
}


export const Imgdiv= styled.div`

    background:${props=>props.bgc};
    padding:40px 35px 70px;
    width:100vw;
    background-image:url(${props=>props.src});
   
    .cont{
        backgroung:${props=>props.bgc};
        width:90%;
        margin:auto;
        display:flex;

       
    }
  
  

   .imgdiv{
       display:flex;
       justify-content:centre;
       align-item:centre;
       width:40%;
    margin-left:100px;


       img{
           max-width:30em;
           height:90%;
           align-item:centre;
           
       }
   }
h4,h1,h3,p{
    margin-top:0px;
    color:${props=>props.color};
    text-align: left;
    margin: 16px 0px 32px;
    font-weight: 500;

line-height: 1.4em;
}
h4{
    font-size:0.9em;
    font-family: Montserrat;
font-style: normal;
font-weight: bold;
line-height:16px;
}
h1{
    font-size:3em;
   
    font-weight: 700;
    font-size: 60px;
    line-height: 70px;
    /* or 117% */
    
    letter-spacing: -0.04em;
    
}
h3{
    font-size:1.6em;
    font-weight:450;
    bold:none;
}


button{
    background:${props=>props.color};
    border-radius:20px;
    padding: 10px 20px;
    width:60%;
    text-align:centre;
    border:none;
    color:${props=>props.bgc};
    font-size:1.2em;
    letter-spacing: 0.05em;
}

@media only screen and (max-width: 1000px ){
   .cont{
       flex-direction:column;
       justify-content:centre;
       align-item:centre;

       .imgdiv{
        margin:auto;
        width:85%;
         img{
            max-width:70%;
        }
    }

    p{
        text-align:"centre";
    }

       &  div{
           width:85%;
           margin:10px auto;

           
       }

       h4{
        font-size:0.7em;
    }
    h1{
        font-size:2.5em;
    }
    h3{
        font-size:1em;
        font-weight:450;
        bold:none;
    }
   }

 

h4,h1,h3,p{
       text-align:centre;
   }
   
}

`