import {
  Button,
  Grid,
  TextField,
  Box,
  Typography,
  Divider,
} from '@mui/material';
import { useLocation, Link } from 'react-router-dom';

export default function ViewSingleRobot() {
  const location = useLocation();
  const { robot } = location.state;

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
      <Typography variant='h4'>View Details for {robot?.name}</Typography>
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
            disabled
            label='Name'
            variant='outlined'
            defaultValue={robot?.name}
          />
          <TextField
            sx={{ marginTop: 3 }}
            disabled
            label='Color'
            variant='outlined'
            defaultValue={robot?.color}
          />
          <TextField
            sx={{ marginTop: 3 }}
            disabled
            label='Attack'
            variant='outlined'
            defaultValue={robot?.attack}
          />
          <TextField
            sx={{ marginTop: 3 }}
            disabled
            label='Defense'
            variant='outlined'
            defaultValue={robot?.defense}
          />
        </Grid>
      </Grid>
      <Box sx={{ marginTop: 3, display: "flex", flexDirection: 'row-reverse' }}>
        <Button>Delete</Button>
        <Link to='/app'>
        <Button>Back</Button>
        </Link>
      </Box>
    </Box>
  );
}
