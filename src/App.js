import React, {useState ,useEffect, useRef} from 'react';
import './App.css';
import {AppBar,Toolbar,Grid,IconButton,List,ListItem,ListItemText,Drawer,Divider } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
//import Intro from './Components/Intro';
import Skills from './Components/Skills';
//import Education from './Components/Education';
import Experience from './Components/Experience';
import {   Switch } from 'react-router-dom';
import useWindowDimensions from "./Utils/useWindowDimensions";

export default function App(){

    const [open, setOpen] = useState(false);
    const [position, setPosition] = useState("relative");
    const navRef = useRef();

    useEffect(() => {
        const handleScroll = (e) => {
            if (window.scrollY >= 0 && window.scrollY <= window.innerHeight ) {
                setPosition("relative");
            } else if (navRef.current.offsetTop - window.innerHeight / 20 ) {
                setPosition("fixed");
            } else {
                setPosition("relative");
            }
        }
        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        }
    }, [])

    function handleDrawerOpen(){
  setOpen(true);
  }
    function handleDrawerClose(){
       setOpen(false);
  }

    const { height, width } = useWindowDimensions();
return (
<div >
<div className="canvas-back" style={{width: `${width}px`, height: `${height}px`}}>
<div className="flex">
          <div className="text">
            Hello, I'm <span className="highlight">Rajanish Nuguri</span>.
            <br />
            I&lsquo;m a full-stack developer.
          </div>
			<br /><br />
          <div className="button page-link text" href="#skillView" >
            View my work <i class="fas fa-arrow-right"></i>
          </div>
        </div>
</div>
    <AppBar ref={navRef} style={{ width: `${width}px`,borderBottom: "3px solid #04c2c9",backgroundColor:"#4d4d4d"}} position={position}>
	<Switch>
	
            </Switch>
    <Toolbar>
<Grid
      justify="space-between"
      container>
    <a href="/" className="logo">
    <span>&lt; </span>
    <span className="logo-name">Rajanish Nuguri</span>
    <span> /&gt;</span>
    </a>
    <Grid >
    <div id="menu" className="menu">
     <ul>
        <li><a href="/" >About Me</a></li>
        <li><a href="/skills">Skills</a></li>
        <li><a href="/experience">Experience</a></li>
        <li><a href="/education">Education</a></li>
        <li><a href="#Resume">Resume</a></li>
      </ul>
</div>
                         <div className="menu-icon">
                           <IconButton id="icon-btn" color="inherit"  aria-label="menu" onClick={handleDrawerOpen}>
                                                     <MenuIcon />
                                                   </IconButton>
                           <Drawer

                                 variant="persistent"
                                 anchor="right"
                                 open={open}

                               >
<IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>

        <Divider />


                                 <List component="nav">
                                   {['About Me','Skills', 'Experience', 'Achievements', 'Resume'].map((text, index) => (
                                     <ListItem button key={text}>
                                       <ListItemText primary={text} />
                                     </ListItem>
                                   ))}
                                 </List>

                               </Drawer>
                          </div>
              </Grid>
              </Grid>
         </Toolbar>

    </AppBar>
    <Skills id="skillView" />
    <Experience />
    </div>
    );

}



