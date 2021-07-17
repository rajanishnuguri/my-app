import React from 'react';
import {Paper } from '@material-ui/core';
import me from '../me.png';
import {makeStyles} from "@material-ui/core/styles";
import '../Education.css';
import vlogo from '../vlogo.gif';

const useStyles = makeStyles({
    header: {
        fontSize: '30pt',
        fontWeight: '550',
        color: '#444649',
        fontFamily: '"Raleway"',

    },
    headerBar: {
    background: '#444649',
    height: '4px',
    margin: '0px 0 25px 45%',
    width: '70px',
}
});

export default function Skills(){
const skills = [
  { name: "React JS", rating: 80},
  { name: "Redux", rating: 75},
  { name: "AWS", rating: 75},
  { name: "Spring Boot", rating: 75},
  { name: "SQL", rating: 80},
  { name: "Hibernate", rating: 77},
  { name: "Java", rating: 75},
  { name: "TIBCO BW", rating: 85},
  { name: "TIBCO BE", rating: 80},
  { name: "TIBCO EMS", rating: 70},
];
    const classes = useStyles();
    return(
	<div className="skill-main" id="skillView" >
        <div className={`${classes.header} flex animate__animated animate__slideInLeft  animate__duration-0.75`} style={{paddingTop: "0"}} >
            ABOUT
        </div>
	<Paper className="skill-paper animate__animated animate__slideInLeft" elevation={0}>

	<img style={{height:"55%",width:"280px",marginLeft:"auto",marginRight:"auto",display:"block"}}src={me} alt="me"/>
	<div style={{fontWeight: "700",fontFamily: "Raleway-bold",color: "#616161",fontSize:"20pt",textAlign:"center",paddingTop:"20px"}}>More about me</div><br />
        <div style={{color: "#616161",textAlign:"center",fontSize:"16pt"}}>I'm a passionate software developer.</div>
        <div style={{color: "#616161",textAlign:"center",fontSize:"16pt"}}>I love to play with new tools and technologies.</div>
        <br />
    <div style={{color: "#616161",textAlign:"center",fontSize:"16pt"}}>When free, I love travelling the world and exploring new cuisines</div>
        <a href="#contactView"><div style={{color: "#009ada",cursor:"pointer",textAlign:"center",fontSize:"16pt"}}>Let's connect to make something special.</div></a>
	</Paper>
	<Paper className="skill-paper animate__animated animate__slideInRight" elevation={0}>
	{skills.sort((a, b) => (a.rating < b.rating) ? 1 : -1).map(skill  => {
           return(<div class="meter">
	
	<span className="progress" style={{width: `${skill.rating}%`}}>
	
	<div  style={{justifyContent:"center",height:"100%",width:"120px",color:"#ffffff",display: "inline-block"
        ,position: "absolute",left: "0", backgroundColor: "#04c2c9",textAlign: "center" }}>{skill.name}</div>
	
</span>
	
</div>
);
	})}</Paper>
        <Paper className="skill-paper animate__animated animate__slideInRight" elevation={0}>
        <div className="education-section" ><h1 className="education-heading">Education</h1>
            <div className="education-card-container">
                <div>
                    <div className="education-card">
                        <div ><img crossOrigin="anonymous" className="education-roundedimg" src={vlogo} alt="VCE,Hyderabad" title="" /></div>
                        <div ><h5 className="education-text-school">VCE, Osmania University, Hyderabad</h5>
                            <div className="education-text-details"><h5 className="education-text-subHeader">Bachelors
                                in Computer Science and Engineering</h5><p
                                className=" education-text-duration">May 2011 - April 2015</p>
                            </div>
                        </div>
                    </div>
                    <div className="education-card-border"></div>
                </div>
            </div>
        </div>

        </Paper>

</div>

    )
}