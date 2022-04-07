import React from 'react';
import {
  Button,
  Grid,
  TextField,
  Box,
  Typography,
  Divider,
} from '@mui/material';
import { Link } from 'react-router-dom';

export default function CreateRobot() {
  const [name, setName] = React.useState('');
  const [color, setColor] = React.useState('');
  const [attack, setAttack] = React.useState('');
  const [defense, setDefense] = React.useState('');

  const saveHandler = () => {
    const storage = JSON.parse(localStorage.getItem('robots'));
    storage.push({ name, color, attack, defense });
    localStorage.setItem('robots', JSON.stringify(storage));
  };

  return (
    <Box
      sx={{
        marginTop: 10,
        maxWidth: '80%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Typography variant='h4'>Create Robot</Typography>
      <Divider />
      <Grid container spacing={3} sx={{ marginTop: 10 }}>
        <Grid item md={6}>
          <img alt='Robot Downey Jr.' width='360' src='/robot-downey-jr.png' />
        </Grid>
        <Grid
          item
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <TextField
            label='Name'
            variant='outlined'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            sx={{ marginTop: 3 }}
            label='Color'
            variant='outlined'
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <TextField
            sx={{ marginTop: 3 }}
            label='Attack'
            variant='outlined'
            value={attack}
            onChange={(e) => setAttack(e.target.value)}
          />
          <TextField
            sx={{ marginTop: 3 }}
            label='Defense'
            variant='outlined'
            value={defense}
            onChange={(e) => setDefense(e.target.value)}
          />
        </Grid>
      </Grid>
      <Box sx={{ marginTop: 3, display: 'flex', flexDirection: 'row-reverse' }}>
        <Button>Delete</Button>
        <Link to='/app'>
          <Button onClick={() => saveHandler()}>Save</Button>
        </Link>
        <Link to='/app'>
          <Button>Back</Button>
        </Link>
      </Box>
    </Box>
  );
}
