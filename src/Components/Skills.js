import React from 'react';

export default function Skills(){
const skills = [
  { name: "React JS", rating: 9},
  { name: "Redux", rating: 8.5},
  { name: "Spring Boot", rating: 7.5},
  { name: "SQL", rating: 9},
  { name: "Java", rating: 7.5},
  { name: "TIBCO BW 5.x", rating: 9.5},
  { name: "TIBCO BE 5.x", rating: 9.5},
  { name: "TIBCO BW 6.x", rating: 7},
  { name: "TIBCO EMS", rating: 7},
];
    return(<div className="skill-main"><br /><br />
    <span style={{color:"#ffffff",fontSize : '30px',fontWeight: "600"}}>Proficiency</span>
           {skills.sort((a, b) => (a.rating < b.rating) ? 1 : -1).map(skill  => {
           return(
                 <div>
                    <p style={{color:"#ffffff"}}>{skill.name}</p>
                    <meter min="1" max="10" value={skill.rating}></meter>
                  </div>
                 );
                     })}
            </div>
    );
}