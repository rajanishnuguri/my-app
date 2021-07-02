import React, {Component} from 'react';
import './App.css';
import {AppBar,Toolbar,Grid,IconButton,List,ListItem,ListItemText,Drawer,Divider } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Intro from './Components/Intro';
import Skills from './Components/Skills';
import Education from './Components/Education';
import Experience from './Components/Experience';
import {  Route, Switch } from 'react-router-dom';

class App extends Component{
constructor(props) {
    super(props);
    this.state = {open: false};
  }


   handleDrawerOpen= () =>{
  this.setState({open: true});
  }
   handleDrawerClose= () => {
   this.setState({open: false});
  }
   handleChange(e) { 
    console.log(e.target.getAttribute("value"));
  }
render(){


return (
<div >
<div className="canvas-back" style={{width: "100%", height: "600px"}}>
<div className="flex">
          <div className="text">
            Hello, I'm <span className="highlight">Rajanish Nuguri</span>.
            <br />
            I&lsquo;m a full-stack developer.
          </div>
			<br /><br />
          <div className="button page-link" dest="about">
            View my work <i class="fas fa-arrow-right"></i>
          </div>
        </div>
</div>
    <AppBar style={{    borderBottom: "3px solid #04c2c9",backgroundColor:"#4d4d4d"}} position="relative">
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
                           <IconButton id="icon-btn" color="inherit"  aria-label="menu" onClick={this.handleDrawerOpen}>
                                                     <MenuIcon />
                                                   </IconButton>
                           <Drawer

                                 variant="persistent"
                                 anchor="right"
                                 open={this.state.open}

                               >
<IconButton onClick={this.handleDrawerClose}>
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
	
    </div>
    );
  }
}


export default App;
