import './App.css'
import {Routes, Route} from 'react-router-dom'
import DashBoard from './components/dashBoard'
import {Box} from '@mui/material'
import Navbar from './components/navbar';
import StarRating from './components/Tasks/starrating';
import ToastNotification from './components/Tasks/toastnotification';


function App() {

  return (
    <Box >
      <Navbar />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/starRating" element={<StarRating />} />
        <Route path="/toastNotification" element={<ToastNotification />} />
        {/* <Route path="/task3" element={<Task3 />} /> */}
      </Routes>
    </Box>
  )
}

export default App
