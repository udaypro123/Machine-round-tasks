import {Box} from "@mui/material";
import Navbar from "./navbar";
import {useNavigate} from 'react-router-dom';
import "./dashBoard.css"; // Import CSS for card styling

const DashBoard = () => {
	const navigate = useNavigate();

	const tasks = [
		{id: 1, label: 'Star Rating', path: '/StarRating', background: 'linear-gradient(to right, #6a11cb, #2575fc)'},

		{id: 2, label: 'Toast Notification', path: '/toastNotification', background: 'linear-gradient(to right, #ff7e5f, #feb47b)'},

		{id: 3, label: 'Pagination', path: '/pagination', background: 'linear-gradient(to right, #43cea2, #185a9d)'},

	];

	return (
		<div>
			<Navbar />
			<Box height={"auto"} width={"100%"} margin={"auto"} marginTop={"3rem"}>
				{/* Render cards dynamically */}
				<div className="card-container">
					{tasks.map(task => (
						<div key={task.id} className="card" style={{background: task.background, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)'}}>
							<h3 style={{color: "white", fontFamily: "verdana"}}>{task.label}</h3>
							<button onClick={() => navigate(task.path)}>Show This </button>
						</div>
					))}
				</div>
			</Box>
		</div>
	);
};

export default DashBoard;