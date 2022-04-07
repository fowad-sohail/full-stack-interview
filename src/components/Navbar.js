import React from 'react';
import {
  Link,
  Toolbar,
  Container,
  Button,
  Box,
  AppBar,
} from '@mui/material';

export default function Navbar() {
  return (
    <>
      <AppBar position='fixed' elevation={0} style={{ zIndex: 1201 }}>
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
            <Link href='/app'>
              <Button size='large' sx={{ color: 'white' }}>Robot Rampage</Button>
            </Link>
            <Box
              display='flex'
              flexDirection='row'
              justifyContent='space-between'
            >
              <Button
                variant='contained'
                color='error'
                sx={{ marginRight: 2 }}
              >
                Fight
              </Button>
              <Button
                variant='contained'
                color='success'
                sx={{ marginRight: 2 }}
              >
                New Robot
              </Button>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}
