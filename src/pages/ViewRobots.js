import { Divider, CardMedia, Card, CardHeader, Grid, Box } from '@mui/material';

export default function ViewRobots({ robots }) {
  console.log(robots);
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Grid container spacing={3} sx={{ marginTop: 10, maxWidth: '80%' }}>
        {robots.map((robot) => (
          <Grid item md={6}>
            <Card elevation={3}>
              <CardHeader title={robot.name} />
              <Divider />
              <CardMedia
                component='img'
                width='194'
                image='/robot-downey-jr.jpeg'
                alt='Robot Downey Jr.'
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
