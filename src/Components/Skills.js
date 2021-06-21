import React from 'react';

import ProgressBar from 'react-animated-progress-bar';

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
    return( <div className="skill-main"><br /><br />
    <span style={{color:"#ffffff",fontSize : '30px',fontWeight: "600"}}>Proficiency</span>
           {skills.sort((a, b) => (a.rating < b.rating) ? 1 : -1).map(skill  => {
           return(
                 <div style={{display: "flex",marginBottom:"-15%",marginTop:"7%"}}>
                   
					<div  style={{color:"#ffffff",backgroundColor:"green",textAlign:"center",marginTop:"54px",lineHeight:"25px",marginRight: "0px",height: "20%", width: "100px",boxSizing: "border-box"}}>
					{skill.name}</div>
					<ProgressBar
        width="60%"
        height="25px"
        rect
        fontColor="#000000"
        percentage={skill.rating}
        trackPathColor="transparent"
        backgroundColor="green"
        trackBorderColor="grey"
      />
                  </div>
                 );
                     })}
            </div>
    );
}