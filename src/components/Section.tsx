import {Box, Card, CardContent, Button, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';

const Section = () => {
	const navigate = useNavigate();

	const handleButtonClick = (path: string) => {
		navigate(path);
	};

	return (
		<Box
			sx={{
				width: '80vw',
				margin: 'auto',
				marginTop: '100px', // To account for the fixed navbar
				display: 'flex',
				flexWrap: 'wrap',
				gap: '20px',
				justifyContent: 'center',
			}}
		>
			{[1, 2, 3].map((item) => (
				<Card key={item} sx={{width: '300px'}}>
					<CardContent>
						<Typography variant="h5" component="div">
							Card {item}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							This is some text inside card {item}.
						</Typography>
						<Button
							variant="contained"
							color="primary"
							sx={{marginTop: '10px'}}
							onClick={() => handleButtonClick(`/page${item}`)}
						>
							Open Page {item}
						</Button>
					</CardContent>
				</Card>
			))}
		</Box>
	);
};

export default Section;