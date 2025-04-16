import './App.css'
import {Routes, Route} from 'react-router-dom'
import DashBoard from './components/dashBoard'
import {Box} from '@mui/material'

function App() {

  return (
    <Box >
      <Routes>
        <Route path="/" element={<DashBoard />} />
      </Routes>
    </Box>
  )
}

export default App
