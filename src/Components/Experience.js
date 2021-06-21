import React from 'react';
import {makeStyles,CardContent,Card  } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: "45%",
	height: "400px",
	marginRight: "30px",
	marginLeft: "30px",
  },
  imag: {
	marginLeft: "30%",
	marginTop: "27%",
	borderRadius :"50%"
  },
});
export default function Experience(){
	const classes = useStyles();
	
    return(
	<div style={{paddingLeft: "50px",paddingTop: "100px",paddingRight: "50px"}}>
   <span style={{color:"#ffffff",fontSize : '30px',fontWeight: "600"}}>Experiences</span>
   <div className="experience">
   <Card className={classes.root}>
   <div style={{height : "200px",width:"100%", backgroundColor: "#4891f7"}}>
   <div style={{color:"#ffffff",fontSize : '20px',fontWeight: "600",marginLeft:"40%"}}>TIBCO</div>
   <img className={classes.imag} src="https://www.tibco.com/sites/tibco/files/tibco-logo-social.png" 
   alt="Osmania University" width="40%" height="60%"/>
	  </div>
      <CardContent>
	  
	  
	  </CardContent>
      
    </Card>
	<Card className={classes.root}>
      <CardContent>
	  
	  </CardContent>
      
    </Card>
	</div>
   </div>
			
    );
}