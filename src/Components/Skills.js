import React from 'react';
import {Paper } from '@material-ui/core';
import me from '../me.png';
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles({
    header: {
        fontSize: '30pt',
        fontWeight: '500',
        color: '#444649',
        fontFamily: 'raleway-bold',
        textAlign: 'center',
        textDecoration: 'underline',
        marginBottom: '100px'
    },
});

export default function Skills(){
	  
const skills = [
  { name: "React JS", rating: 90},
  { name: "Redux", rating: 85},
  { name: "Spring Boot", rating: 75},
  { name: "SQL", rating: 90},
  { name: "Java", rating: 75},
  { name: "TIBCO BW 5.x", rating: 95},
  { name: "TIBCO BE 5.x", rating: 95},
  { name: "TIBCO BW 6.x", rating: 70},
  { name: "TIBCO EMS", rating: 70},
];
    const classes = useStyles();
    return( 
	
	
	<div className="skill-main"><br /><br />
        <div className={classes.header}>
            About
        </div>
	<Paper className="skill-paper" elevation={0}>

	<img style={{height:"55%",width:"280px",marginLeft:"auto",marginRight:"auto",display:"block"}}src={me} alt="me"/>
	<div style={{fontWeight: "700",fontFamily: "Raleway-bold",color: "#616161",fontSize:"23px",textAlign:"center",paddingTop:"20px"}}>Meet me</div><br />
        <div style={{color: "#616161",textAlign:"center",fontSize:"12pt"}}>I'm an application developer.</div>
        <div style={{color: "#616161",textAlign:"center",fontSize:"12pt"}}>I have passion for software development and learning new technologies.</div>
        <div style={{color: "#009ada",cursor:"pointer",textAlign:"center",fontSize:"12pt"}}>Let's make something special.</div>
	</Paper>
	<Paper className="skill-paper" elevation={0}>
	{skills.sort((a, b) => (a.rating < b.rating) ? 1 : -1).map(skill  => {
           return(<div class="meter">
	
	<span style={{width: `${skill.rating}%`}}>
	
	<div style={{justifyContent:"center",height:"100%",width:"120px",color:"#ffffff",display: "inline-block",position: "absolute",left: "0", backgroundColor: "#04c2c9",textAlign: "center"}}>{skill.name}</div>
	
</span>
	
</div>
);
                     })}</Paper>
        <br />
        <br />
        <br />
        <br />
        <br />



</div>

    );
}