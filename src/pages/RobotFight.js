import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Card, Button, CardHeader, Box, Typography } from '@mui/material';

export default function RobotFight() {
  const [rows, setRows] = React.useState(
    JSON.parse(localStorage.getItem('battles'))
  );

  const robots = JSON.parse(localStorage.getItem('robots'));

  const [robotOne, setRobotOne] = React.useState(0);
  const [robotTwo, setRobotTwo] = React.useState(0);

  React.useEffect(() => {
    const robotOneId = Math.floor(Math.random() * (6 - 1) + 1);
    const robotTwoId = Math.floor(Math.random() * (6 - 1) + 1);
    setRobotOne(robots.filter((value) => value.id === robotOneId)[0]);
    setRobotTwo(robots.filter((value) => value.id === robotTwoId)[0]);
  }, []);

  const fightHandler = () => {
    // set so robotOne always wins
    // add winner to localStorage
    const storage = JSON.parse(localStorage.getItem('battles'));
    console.log(storage)
    storage.push({
      id: Math.floor(Math.random() * 10000),
      robot1: robotOne.name,
      robot2: robotTwo.name,
      winner: robotOne.name,
    });
    localStorage.setItem('battles', JSON.stringify(storage));
    setRows(JSON.parse(localStorage.getItem('battles')));
  };

  const columns = [
    { field: 'robot1', headerName: 'Robot 1', width: 150 },
    { field: 'robot2', headerName: 'Robot 2', width: 150 },
    { field: 'winner', headerName: 'Winner', width: 150 },
  ];

  return (
    <Box style={{ height: 400, width: '75%', marginTop: 90 }}>
      <Box sx={{ display: 'flex', justifyContent: 'row' }}>
        <Card>
          <CardHeader title={robotOne.name} />
        </Card>
        <Typography sx={{ margin: 3 }}>VS.</Typography>
        <Card>
          <CardHeader title={robotTwo.name} />
        </Card>
        <Button onClick={() => fightHandler()}>Fight</Button>
      </Box>
      <Typography>Winner: {robotOne.name}</Typography>
      <DataGrid
        sx={{ marginTop: 3 }}
        rows={rows}
        getRowId={(row) => row.id}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </Box>
  );
}
