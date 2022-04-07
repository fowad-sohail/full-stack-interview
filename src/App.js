import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ViewRobots from './pages/ViewRobots';
import ViewSingleRobot from './pages/ViewSingleRobot';
import CreateRobot from './pages/CreateRobot';

export default function App() {
  return (
    <>
      <Router>
        <Navbar>
          <Routes>
            <Route path='/app' element={<ViewRobots />} />
            <Route path='/robot' element={<ViewSingleRobot />} />
            <Route path='/new-robot' element={<CreateRobot />} />

          </Routes>
        </Navbar>
      </Router>
    </>
  );
}
