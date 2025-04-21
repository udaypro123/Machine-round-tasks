import './App.css'
import {Routes, Route} from 'react-router-dom'
import DashBoard from './components/dashBoard'
import {Box} from '@mui/material'
import Navbar from './components/navbar';
import StarRating from './components/Tasks/starrating';
import ToastNotification from './components/Tasks/toastnotification';
import Pagination from './components/Tasks/pagination';
import PaginationSecondPart from './components/Tasks/paginationSecondpart';


function App() {

  return (
    <Box sx={{height: "100dvh", width: "100vw", overflowX: "hidden"}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/starRating" element={<StarRating />} />
        <Route path="/toastNotification" element={<ToastNotification />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/paginationHard" element={<PaginationSecondPart />} />
      </Routes>
    </Box>
  )
}

export default App
