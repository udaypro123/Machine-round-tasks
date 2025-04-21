import {Button, Grid, Typography} from "@mui/material"
import "../dashBoard.css"
import {Delete} from "@mui/icons-material"
import {makeStyles} from "@mui/styles";
import {useState} from "react";

interface Props {

}

const useStyles: any = makeStyles(() => ({
	toast: {
		height: "2rem",
		width: "25%",
		display: "flex",
		borderRadius: ".2rem",
		justifyContent: "space-between",
		alignItems: "center",
		animation: `$slide 1s`,
		margin: ".1rem",
		marginTop: ".3rem",
		marginBottom: ".3rem"
	},
	'@keyframes slide': {
		'0%': {
			transform: 'translateX(-100%)',
			opacity: 0,
		},
		'100%': {
			transform: 'translateX(0)',
			opacity: 1,
		},
	},
}));

interface ToastItem {
	id: number;
	message: string;
}

interface ColorMap {
	success: string;
	error: string;
	warning: string;
	info: string;
}


const ToastNotification: React.FC<Props> = ({ }) => {
	const classes: any = useStyles();
	const [list, setList] = useState<ToastItem[]>([])
	let color: ColorMap = {
		success: "green",
		error: "red",
		warning: "#8c7a07",
		info: "#075d69",
	}

	const handleBtn = (message: string) => {
		let id: number = Date.now()
		setList([...list, {id, message, }])
		setTimeout(() => {
			setList((prev) => prev.filter((item) => item.id !== id))
		}, 5000)
	}

	const handeldelte = (id: number) => {
		let filterList: ToastItem[] = list.filter((item) => item.id !== id)
		setList(filterList)
	}

	return (
		<>
			<Grid container sx={{marginTop: "5rem", marginLeft: "7rem", height: "10vh", width: "98%", bgcolor: "lightgrey", borderRadius: "1rem", display: "flex", justifyContent: "center", alignItems: "center"}} >
				<Grid size={{xs: 12, md: 12}} sx={{display: "flex", justifyContent: "space-evenly", alignItems: "center", }} >
					<Button variant="contained" className="success" onClick={() => handleBtn("success")} >Success</Button>
					<Button variant="contained" className="error" onClick={() => handleBtn("error")}>Error</Button>
					<Button variant="contained" className="warning" onClick={() => handleBtn("warning")} >Warning</Button>
					<Button variant="contained" className="info" onClick={() => handleBtn("info")} >Info</Button>
				</Grid>
			</Grid>

			<Grid sx={{width: "99vw", marginTop: "10rem"}} >
				{
					list.map((item) => {
						return <>
							<Grid className={classes.toast} bgcolor={color[item.message as keyof ColorMap]}>
								<Typography marginLeft={"1rem"} padding={".5rem"} color="white">{item.message}</Typography>
								<Delete sx={{marginRight: "1rem", color: "white"}} onClick={() => handeldelte(item.id)} />
							</Grid>
						</>
					})
				}

			</Grid>
		</>

	)
}

export default ToastNotification