import './App.css'
import {Routes, Route} from 'react-router-dom'
import DashBoard from './components/dashBoard'
import {Box} from '@mui/material'
import Navbar from './components/navbar';
import {Task2, Task3} from './components/Tasks/tasksComponents';
import StarRating from './components/Tasks/starrating';


function App() {

  return (
    <Box >
      <Navbar />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/starRating" element={<StarRating />} />
        <Route path="/task2" element={<Task2 />} />
        <Route path="/task3" element={<Task3 />} />
      </Routes>
    </Box>
  )
}

export default App
