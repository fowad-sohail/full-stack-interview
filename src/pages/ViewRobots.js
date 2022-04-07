import { Divider, CardMedia, Card, CardHeader, Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ViewRobots() {
  const robots = JSON.parse(localStorage.getItem('robots'));

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Grid container spacing={3} sx={{ marginTop: 10, maxWidth: '80%' }}>
        {robots?.map((robot) => (
          <Grid item md={6}>
            <Link to='/robot' state={{ robot: robot }}>
              <Card elevation={3}>
                <CardHeader title={robot?.name} />
                <Divider />
                <CardMedia
                  component='img'
                  image='/robot-downey-jr.png'
                  alt='Robot Downey Jr.'
                />
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
