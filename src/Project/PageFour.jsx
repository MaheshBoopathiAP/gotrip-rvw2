import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './PageOne.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { red } from '@mui/material/colors';
import { Navigate } from 'react-router-dom';

export default function PageFour() {
  
      React.useEffect(() => {
        AOS.init();
      }, [])
  const[homee,setHomee]=React.useState(false)
  const[aboutuss,setAboutuss]=React.useState(false)
  const[supportt,setSupportt]=React.useState(false)
  const[logoutt,setLogoutt]=React.useState(false)
  if(homee)
  {
    return <Navigate to="/home"/>
  }
  if(aboutuss)
  {
    return <Navigate to="/aboutus"/>
  }
  if(supportt)
  {
    return <Navigate to="/support"/>
  }
  if(logoutt)
  {
    return <Navigate to="/"/>
  }
  return (
    <div className='full'>
      <div className='page-one'>
            <Box sx={{ flexGrow: 1, color:red}}>
          <AppBar style={{backgroundColor:'brown'}}position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="static"
                aria-label="menu"
                sx={{ mr: 4 }}
              >
                <img src='imageOne.png' className='logo-size'></img>
              </IconButton>
              <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                <p className='gotrip-index'>goTrip!</p>
              </Typography>
              <div  className='home-button'>
              <Button color="inherit" onClick={()=>{setHomee(true)}}>Home</Button>
              </div>
              <div  className='aboutus-button'>
              <Button color="inherit" onClick={()=>{setAboutuss(true)}}>AboutUs</Button>

              </div>
              <div  className='support-button'>
              <Button color="inherit" onClick={()=>{setSupportt(true)}}>Support</Button>

              </div>
              <div className='logout'>
                <Button color="inherit" onClick={()=>{setLogoutt(true)}}>Logout</Button>
              </div>
              
            </Toolbar>
          </AppBar>
        </Box>
      </div>
        <hr/>
           <div className='place-list'>
              <div data-aos="fade-left" className='page-one'>
            
              <div>
                
                  <p className='place-name'>
                      NAME
                  </p>
              </div>
                <div className='contain-box'>
                  <div>
                    <img className='place-pic' src='images/inox.png' data-aos="fade-right"/>
                  </div>
                  <div>
                      <p className='address' data-aos="fade-left">
                      ADDRESS :
                          Fun Republic Mall, 4th Floor Fun Republic Mall, Avinashi Road, Peelamedu, Coimbatore, Tamil Nadu 641004·
                      </p>
                      <p className='contact'>
                      CONTACT : 123456789
                      </p>
                      
                      
                      <div>
                        
                      </div>
                  </div>
            </div>
        </div>
        <hr/>
          <div data-aos="fade-right" className='page-one'>
              <div>
                  <p className='place-name'>
                      NAME
                  </p>
              </div>
                <div className='contain-box'>
                  <div>
                    <img className='place-pic' src="images/inox.png"/>
                  </div>
                  <div>
                      <p className='address'>
                      ADDRESS :
                          Fun Republic Mall, 4th Floor Fun Republic Mall, Avinashi Road, Peelamedu, Coimbatore, Tamil Nadu 641004·
                      </p>
                      <p className='contact'>
                      CONTACT : 123456789
                      </p>
                  </div>
            </div>
        </div>
        <hr/>
          <div data-aos="fade-up-left" className='page-one'>
              <div>
                  <p className='place-name'>
                      NAME
                  </p>
              </div>
                <div className='contain-box'>
                  <div>
                    <img className='place-pic' src="images/inox.png"/>
                  </div>
                  <div>
                      <p className='address'>
                      ADDRESS :
                          Fun Republic Mall, 4th Floor Fun Republic Mall, Avinashi Road, Peelamedu, Coimbatore, Tamil Nadu 641004·
                      </p>
                      <p className='contact'>
                      CONTACT : 123456789
                      </p>
                  </div>
            </div>
        </div>
        <hr/>
          <div data-aos="fade-up-right" className='page-one'>
              <div>
                  <p className='place-name'>
                      NAME
                  </p>
              </div>
                <div className='contain-box'>
                  <div>
                    <img className='place-pic' src="images/inox.png"/>
                  </div>
                  <div>
                      <p className='address'>
                      ADDRESS :
                          Fun Republic Mall, 4th Floor Fun Republic Mall, Avinashi Road, Peelamedu, Coimbatore, Tamil Nadu 641004·
                      </p>
                      <p className='contact'>
                      CONTACT : 123456789
                      </p>
                  </div>
            </div>
          
          </div>
          <hr/>
       </div>
          
    </div>
    
  
    
  );
}