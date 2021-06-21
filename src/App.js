import React, {Component} from 'react';
import './App.css';
import {AppBar,Toolbar,Grid,IconButton,List,ListItem,ListItemText,Drawer,Divider } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronLeft';



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
render(){


return (
<div >
    <AppBar style={{backgroundColor:"#4d4d4d"}} position="fixed">
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
        <li><a href="#About Me">About Me</a></li>
        <li><a href="#Skills">Skills</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#Achievements">Achievements</a></li>
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