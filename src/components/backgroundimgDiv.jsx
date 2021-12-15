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
}
h4{
    font-size:1em;
}
h1{
    font-size:3.5em;
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
    width:40%;
    text-align:centre;
    border:none;
    color:${props=>props.bgc};
    font-size:1.2em;
}

@media only screen and (max-width: 1000px ){
   .cont{
       flex-direction:column;
       justify-content:centre;
       align-item:centre;

       .imgdiv{
        margin:auto;
        width:85%;
    }

       &  div{
           width:85%;
           margin:10px auto;

           
       }
   }

 

h4,h1,h3,p{
       text-align:centre;
   }
   
}

`