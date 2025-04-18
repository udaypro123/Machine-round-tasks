import {Box} from "@mui/material";
import Navbar from "./navbar";
import {useNavigate} from 'react-router-dom';
import "./dashBoard.css"; // Import CSS for card styling

const DashBoard = () => {
	const navigate = useNavigate();

	const tasks = [
		{id: 1, label: 'Go to Task StarRating', path: '/StarRating', background: 'linear-gradient(to right, #6a11cb, #2575fc)'},

		{id: 2, label: 'Go to Task 2', path: '/task2', background: 'linear-gradient(to right, #ff7e5f, #feb47b)'},

		{id: 3, label: 'Go to Task 3', path: '/task3', background: 'linear-gradient(to right, #43cea2, #185a9d)'},

	];

	return (
		<div>
			<Navbar />
			<Box height={"auto"} width={"100%"} margin={"auto"} marginTop={"3rem"}>
				{/* Render cards dynamically */}
				<div className="card-container">
					{tasks.map(task => (
						<div key={task.id} className="card" style={{background: task.background, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)'}}>
							<h2>{task.label}</h2>
							<button onClick={() => navigate(task.path)}>Show This </button>
						</div>
					))}
				</div>
			</Box>
		</div>
	);
};

export default DashBoard;