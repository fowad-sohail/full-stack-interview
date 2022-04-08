import React from 'react';
import { Toolbar, Container, Button, Box, AppBar } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Navbar({ children }) {
  return (
    <>
      <AppBar position='fixed' elevation={0}>
        <Toolbar>
          <Container
            maxWidth={false}
            disableGutters
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              alignContent: 'center',
            }}
          >
            <Link to='/app'>
              <Button size='large' sx={{ color: 'white' }}>
                Robot Rampage
              </Button>
            </Link>
            <Box
              display='flex'
              flexDirection='row'
              justifyContent='space-between'
            >
              <Link to='/robot-fight'>
                <Button
                  variant='contained'
                  color='error'
                  sx={{ marginRight: 2 }}
                >
                  Fight
                </Button>
              </Link>
              <Link to='/new-robot'>
                <Button
                  variant='contained'
                  color='success'
                  sx={{ marginRight: 2 }}
                >
                  New Robot
                </Button>
              </Link>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
      {children}
    </>
  );
}
