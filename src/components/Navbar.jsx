import React from 'react'
import { AppBar,Container,Typography,IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

export const Navbar = () => {
  return (
    <div>
    <AppBar position="static">
       <Container maxWidth="xl">
       <IconButton
            size="large"
            edge="start"
            color="black"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        <Typography>About</Typography>
       </Container>
    </AppBar>
    </div>
  )
}
