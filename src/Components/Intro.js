import React  from 'react';
import {Paper } from '@material-ui/core';


export default function Inro(){
  return(
	 <div className="intro-main">

    <span style={{color:"#000000",fontSize : '40px',fontWeight: "600",display:"flex"}}>Hi there, I&lsquo;m Rajanish Nuguri<br /></span>
    <br /><br /><br />
    <div className="intro-div">
        <Paper className="intro-paper" elevation={0} style={{backgroundColor:"#ffffff"}}>
             <div style={{display: "flex"}}>
                     <a href="https://github.com/rajanishnuguri"  target="_blank" rel="noopener noreferrer">
                     <i className="fa fa-github" ></i>
                     </a>
                     <a href="https://www.linkedin.com/in/rajanishnuguri"  target="_blank" rel="noopener noreferrer">
                     <i className="fab fa-linkedin-in" ></i>
                     </a>
                     <a href="mailto:rajanish.icon@gmail.com"  target="_blank" rel="noopener noreferrer">
                     <i className="fab fa-google" ></i>
                     </a>
              </div><br />
        </Paper>
        <Paper className="intro-paper" elevation={0} style={{backgroundColor:"#ffffff"}}>
            <span style={{color:"#000000"}}>Work History</span><br /><br />
            <span style={{color:"#000000",fontSize : '15px',fontWeight: "600"}}>DAH2 India PVT LTD(DBS BANK)</span>
            <span style={{color:"#737373",fontSize : '13px',fontWeight: "550",float: "right"}}>2019-2021</span><br />
            <span style={{color:"#737373",fontSize : '13px',fontWeight: "550"}}>Analyst/Application Developer</span><br /><br />
            <span style={{color:"#000000",fontSize : '15px',fontWeight: "600"}}>TIBCO Software India PVT LTD</span>
            <span style={{color:"#737373",fontSize : '13px',fontWeight: "550",float: "right"}}>2015-2019</span><br />
            <span style={{color:"#737373",fontSize : '13px',fontWeight: "550"}}>Senior Associate Consultant</span><br /><br />
        </Paper>
        </div>
    </div>
	
    );
}