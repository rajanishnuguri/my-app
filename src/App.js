import React, {useState , useRef} from 'react';
import './App.css';
import {AppBar,Toolbar,Grid,IconButton,List,ListItem,ListItemText,Drawer,Divider } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Contac from './Components/Contac';
import Skills from './Components/Skills';

import Experience from './Components/Experience';
import useWindowDimensions from "./Utils/useWindowDimensions";

export default function App(){

    const [open, setOpen] = useState(false);
    const [position] = useState("fixed");
    const navRef = useRef();

  /*  useEffect(() => {
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
    }, [])*/

    function handleDrawerOpen(){
  setOpen(true);
  }
    function handleDrawerClose(){
       setOpen(false);
  }

    const { height, width } = useWindowDimensions();
return (
<div id="mainView" >
<div className="canvas-back" style={{width: `${width}px`, height: `${height}px`}}>
<div className="flex">
          <div className="text text-margin">
            Hello there!  <i className="fas fa-hand-spock wave"></i>
              <br />I'm <span className="highlight">Rajanish Nuguri</span>.
            <br />
            Full-stack developer.
          </div>
			<br /><br />
          <div className="button page-link text"  >
            <a className="main-anchor" href="#skillView" > View my work <i class="fas fa-arrow-right"></i></a>
          </div>
        </div>
</div>
    <AppBar ref={navRef} style={{ width: `${width}px`,borderBottom: "3px solid #04c2c9",backgroundColor:"#4d4d4d"}} position={position}>
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
        <li><a href="#skillView" >About Me</a></li>
        <li><a href="#workView">Work</a></li>
        <li><a href="#contactView">Contact Me</a></li>
        <li><a href="https://drive.google.com/file/d/11wgZkllJtm7eACI5c1iwupHvdeJD22fV/view?usp=sharing" download="Rajanish's Resume.pdf">Resume</a></li>
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


                                 <List component="nav" className="mobile-nav">
                                     <ListItem  >
                                         <a href="#skillView" > <ListItemText primary="About Me" /></a>
                                     </ListItem>
                                     <ListItem >
                                         <a href="#workView"> <ListItemText primary="Work" /></a>
                                     </ListItem>
                                     <ListItem >
                                         <a href="#contactView"><ListItemText primary="Contact Me" /></a>
                                     </ListItem>
                                     <ListItem >
                                         <a href="https://drive.google.com/file/d/11wgZkllJtm7eACI5c1iwupHvdeJD22fV/view?usp=sharing" download="Rajanish's Resume.pdf">
                                             <ListItemText primary="Resume" />
                                         </a>
                                     </ListItem>
                                 </List>
                               </Drawer>
                          </div>
              </Grid>
              </Grid>
         </Toolbar>

    </AppBar>
    <Skills id="skillView" />
    <Experience id="workView"/>
    <Contac id="contactView"/>
    </div>
    );

}



