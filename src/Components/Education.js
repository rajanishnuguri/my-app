import React from 'react';
import { InView } from 'react-intersection-observer';
import {Slide,Divider } from '@material-ui/core';

export default function Education(){
	 const [inView, setInView] = React.useState(false)
    return(<InView onChange={setInView}>
	<Slide direction="left" in={inView} mountOnEnter  timeout={500}>
	<div style={{paddingLeft: "50px",paddingTop: "50px"}}>
   <span style={{color:"#ffffff",fontSize : '30px',fontWeight: "600"}}>Education</span><br /><br />
   <img src="https://www.pngfind.com/pngs/m/498-4986158_ou-logo-png-osmania-university-logo-png-transparent.png" alt="Osmania University" width="50" height="50"/>
   <br /><br />
   <span style={{color:"#ffffff",fontSize : '25px',fontWeight: "450"}}>Osmaina University, Hyderabad</span><br />
   <span style={{color:"#ffffff",fontSize : '25px',fontWeight: "450"}}>Bachelor of Engineering, Computer Science</span><br />
   <span style={{color:"#ffffff",fontSize : '20px',fontWeight: "450"}}>May 2011 - April 2015</span><br />
   <Divider />
   </div>
			</Slide>
			</InView>
    );
}