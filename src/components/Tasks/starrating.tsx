import {Box, TextField, Button} from "@mui/material";
import {useState} from "react";
import StarIcon from "@mui/icons-material/Star";
import "../../index.css"

const StarRating = () => {
	const [starCount, setStarCount] = useState<number>(0);
	const [submittedStarCount, setSubmittedStarCount] = useState<number>(0);

	const [hoverIndex, setHoverIndex] = useState<number>(0)
	const [selectedStar, setSelectedStar] = useState<number>(0)

	const handleStarCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(event.target.value, 10);
		setStarCount(isNaN(value) ? 0 : value);
	};

	const handleSubmit = () => {
		setSubmittedStarCount(starCount);
		setStarCount(0)
	};

	return (
		<Box marginTop={"5rem"} textAlign="center">
			<Box marginBottom={"1rem"} display="flex" justifyContent="center" gap={"1rem"}>
				<TextField
					label={"Enter star count"}
					type="number"
					variant="outlined"
					value={starCount == 0 ? "" : starCount}
					onChange={handleStarCountChange}
				/>
				<Button variant="contained" onClick={handleSubmit}>
					Submit
				</Button>
			</Box>

			<Box display="flex" justifyContent="center" flexWrap={"wrap"} gap={".8rem"} marginTop={"3rem"}>
				{Array.from({length: submittedStarCount}, (_, index) => (
					<Box display={"flex"} flexDirection={"column"}  >
						<span>{index + 1}</span>
						<StarIcon key={index}
							fontSize="large"
							className={(hoverIndex == 0 && index < selectedStar) || index < hoverIndex ? "gold" : ""}
							onMouseEnter={() => setHoverIndex(index + 1)}
							onMouseLeave={() => setHoverIndex(0)}
							onClick={() => setSelectedStar(index + 1)}
							style={{fontSize: "3rem"}}
						/>
					</Box>
				))}
			</Box>
		</Box>
	);
};

export default StarRating;
