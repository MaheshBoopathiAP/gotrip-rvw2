import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './PageOne.css';

export default function ButtonAppBar() {
  return (
   
    <div className='page-one'>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    <div >
        
        <div>
            <div>
                <p className='place-name'>
                    NAME
                </p>
            </div>
              <div className='contain-box'>
                <div>
                  <img className='place-pic' src="INOX1.png"/>
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
        <div className='page-one'>
            <div>
                <p className='place-name'>
                    NAME
                </p>
            </div>
              <div className='contain-box'>
                <div>
                  <img className='place-pic' src="INOX1.png"/>
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
        <div className='page-one'>
            <div>
                <p className='place-name'>
                    NAME
                </p>
            </div>
              <div className='contain-box'>
                <div>
                  <img className='place-pic' src="INOX1.png"/>
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
        <div className='page-one'>
            <div>
                <p className='place-name'>
                    NAME
                </p>
            </div>
              <div className='contain-box'>
                <div>
                  <img className='place-pic' src="INOX1.png"/>
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
    
    </div>
    </div>

    
  );
}



