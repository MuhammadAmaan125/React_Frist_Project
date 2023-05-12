import React from "react";
import { AiFillFacebook } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsGoogle } from 'react-icons/bs';


function Footer(){
    return(
        <>
        <div style={{textAlign:"center",backgroundColor:"black"}}>
        <i style={{color:"white"}}> FooDisTan ResTurAnt <AiFillFacebook style={{paddingLeft:"3px",width:"20px"}}/></i>
        <i style={{color:"white"}}> FooDisTan ResTurAnt<BsInstagram style={{paddingLeft:"3px",width:"20px"}}/></i>
        <i style={{color:"white",paddingLeft:"6px"}}>FooDisTan ResTurAnt RecIpiS <BsYoutube style={{paddingLeft:"3px",width:"20px"}}/></i>
        <i style={{color:"white"}}> FooDisTan ResTurAnt <BsTwitter style={{paddingLeft:"3px",width:"20px"}}/></i>
        <i style={{color:"white"}}> www.FooDisTan ResTurAnt <BsGoogle style={{paddingLeft:"3px",width:"20px"}}/></i>


        <br />
        <i style={{color:"white"}}>Create By Amaan Pathan</i>
        <p style={{color:"white"}}>© Copyright 2021 | FooDisTan | All right reserved</p>

        </div>
        </>
    )
}


export default Footer