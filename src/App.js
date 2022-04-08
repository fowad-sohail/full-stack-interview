import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ViewRobots from './pages/ViewRobots';
import ViewSingleRobot from './pages/ViewSingleRobot';
import RobotFight from './pages/RobotFight';
import CreateRobot from './pages/CreateRobot';
import data from './robots.json';
import React from 'react';
import battles from './battles.json'

export default function App() {
  React.useEffect(() => {
    localStorage.setItem('robots', JSON.stringify(data));
    localStorage.setItem('battles', JSON.stringify(battles));
  });
  return (
    <>
      <Router>
        <Navbar>
          <Routes>
            <Route path='/app' element={<ViewRobots robots={data} />} />
            <Route path='/robot' element={<ViewSingleRobot />} />
            <Route path='/new-robot' element={<CreateRobot />} />
            <Route path='/robot-fight' element={<RobotFight />} />
          </Routes>
        </Navbar>
      </Router>
    </>
  );
}
