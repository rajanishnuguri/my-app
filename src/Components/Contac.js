import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
        footer: {
        background: '#1b242f',
        padding: '70px 0 50px 0',
        position: 'relative',
    },
    doubleUp: {
    cursor: 'pointer',
    fontSize: '40pt',
    height: '50px',
    left: 0,
    lineHeight: '40pt',
    margin: '0 auto',
    position: 'absolute',
    right: 0,
    top: '-25px',
    transition: 'background 0.5s',
    width: '47px',
},
    header: {
        fontSize: '30pt',
        fontWeight: '400',
        color: '#ffffff',
        fontFamily: '"Raleway"',
    },
    headerBar: {
        background: '#ffffff',
        height: '4px',
        margin: '0px 0 50px 40%',
        width: '100px',
        alignItems: "center"
    },
    highlight: {
    color: '#04c2c9',
    fontWeight: '600',
}
});

export default function Contac(){
    const classes = useStyles();
	  return(
	      <div style={{backgroundColor: "#000000",paddingTop: "100px"}} id="contactView">
             <footer className={classes.footer}>
                  <a  href="#mainView" > <i className={`${classes.doubleUp}  fas fa-angle-double-up page-link`} ></i></a>
                 <div className={`${classes.header} flex animate__animated animate__slideInLeft  animate__duration-0.75`}  style={{paddingTop: "0"}}>
                     Contact Me <a href="tel:+91-949-247-9363   "><img alt="☎️" draggable="false" src="https://twemoji.maxcdn.com/2/72x72/260e.png"
                                     style={{height: '1em', width: '1em', margin: '0px 0.05em 0px 0.1em', verticalAlign: '-0.1em'}}></img></a>
                 </div>

                  <div className="icon-wrap flex row" style={{flexDirection :"row",paddingTop: "5%"}}>
                      <a href="https://www.linkedin.com/in/rajanishnuguri/">
                          <div className="flex icons" >
                              <i className="fab fa-linkedin-in"></i>
                          </div>
                      </a>
                      <a href="mailto:rajanish.icon@gmail.com">
                          <div className="flex icons" >
                              <i className="far fa-envelope"></i>
                          </div>
                      </a>
                      <a href="https://www.instagram.com/rajanishnuguri/">
                          <div className="flex icons" >
                              <i className="fab fa-instagram"></i>
                          </div>
                      </a>
                      <a href="https://github.com/rajanishnuguri/">
                          <div className="flex icons" >
                              <i className="fab fa-github"></i>
                          </div>
                      </a>
                  </div>
                  <div className="flex" style={{flexDirection :"row",paddingTop: "1%"}}>
                      <p style={{color:"#ffffff"}}>Made with <img alt="❤️" draggable="false"
                                                                src="https://twemoji.maxcdn.com/2/72x72/2764.png"
                                                                style={{height: '1em', width: '1em', margin: '0px 0.05em 0px 0.1em', verticalAlign: '-0.1em'}}
                                                                title=""/> by Rajanish Nuguri</p>
                  </div>
              </footer>
          </div>
      );
}