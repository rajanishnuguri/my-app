import React, {Component} from 'react';
import {Paper } from '@material-ui/core';

class Intro extends Component{
render(){
    return(

    <div className="intro-main">

    <span style={{color:"#ffffff",fontSize : '40px',fontWeight: "600",display:"flex"}}>Hi there, I&lsquo;m Rajanish Nuguri<br /></span>
    <br /><br /><br />
    <div className="intro-div">
        <Paper className="intro-paper" elevation={0} style={{backgroundColor:"#000000"}}>
             <span style={{color:"#737373"}}>I&lsquo;m a </span>
             <span style={{color:"#ffffff"}}>full-stack developer </span>
             <span style={{color:"#737373"}}>interested in crafting </span>
             <span style={{color:"#737373"}}>software applications for small, medium, and big size companies and build </span>
             <span style={{color:"#ffffff"}}>scalable software </span>
             <span style={{color:"#737373"}}>for REST API&lsquo;s using springboot and TIBCO and some other cool </span>
             <span style={{color:"#ffffff"}}>frameworks</span><br /><br />
             <div style={{display: "flex"}}>
                     <a href="https://github.com/rajanishnuguri"  target="_blank" rel="noreferrer">
                     <i className="fa fa-github" ></i>
                     </a>
                     <a href="https://www.linkedin.com/in/rajanishnuguri"  target="_blank" rel="noreferrer">
                     <i className="fab fa-linkedin-in" ></i>
                     </a>
                     <a href="mailto:rajanish.icon@gmail.com"  target="_blank" rel="noreferrer">
                     <i className="fab fa-google" ></i>
                     </a>
              </div><br />
        </Paper>
        <Paper className="intro-paper" elevation={0} style={{backgroundColor:"#000000"}}>
            <span style={{color:"#ffffff"}}>Work History</span><br /><br />
            <span style={{color:"#ffffff",fontSize : '15px',fontWeight: "600"}}>DAH2 India PVT LTD(DBS BANK)</span>
            <span style={{color:"#737373",fontSize : '13px',fontWeight: "550",float: "right"}}>2019-2021</span><br />
            <span style={{color:"#737373",fontSize : '13px',fontWeight: "550"}}>Analyst/Application Developer</span><br /><br />
            <span style={{color:"#ffffff",fontSize : '15px',fontWeight: "600"}}>TIBCO Software India PVT LTD</span>
            <span style={{color:"#737373",fontSize : '13px',fontWeight: "550",float: "right"}}>2015-2019</span><br />
            <span style={{color:"#737373",fontSize : '13px',fontWeight: "550"}}>Senior Associate Consultant</span><br /><br />
        </Paper>
        </div>


    </div>
    );
}

}
export default Intro;