import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from "next/image";
import MenuDrawer from './MenuDrawer';


export default function ButtonAppBar() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <MenuDrawer></MenuDrawer>
   
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Rejects
            </Typography>
            <div>
            <Image
                src="/march_madness.png"
                alt="marchMadness"
                height={50}
                width={80}
                priority
            />  
            </div>

          </Toolbar>
        </AppBar>
      </Box>
    );
  }