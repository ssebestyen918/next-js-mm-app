import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Image from "next/image";


export default function ButtonAppBar() {
    return (
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
            <MenuIcon></MenuIcon>
            </IconButton>
   
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Rejects
            </Typography>
            <div>
            <Image
                src="/march_madness.jpeg"
                alt="marchMadness"
                height={64}
                width={90}
                priority
            />  
            </div>

          </Toolbar>
        </AppBar>
      </Box>
    );
  }