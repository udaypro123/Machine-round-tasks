import {Button, Grid, } from "@mui/material"
import "../dashBoard.css"

import {useEffect, useState} from "react";

interface Props {

}
interface dataProps {
	apidata: any;
	apiloading: boolean;
}

const RecipeReviewCard: React.FC<dataProps> = ({apidata, apiloading}) => {

	if (apiloading) {
		return <p style={{textAlign: "center", marginTop: "1rem", fontSize: "22px", fontFamily: "verdana", color: "blue"}}>Loading...</p>
	}
	return <>
		<div className="cardmain">
			{apidata?.map((item: any) => {
				return (
					<div className="card">
						<img
							src={item.download_url}
							style={{height: "100%", width: "100%"}}
						/>
					</div>
				);
			})}
		</div>
	</>
}

const PaginationSecondPart: React.FC<Props> = ({ }) => {

	const [apidata, setapidata] = useState<any>();
	const [page, setpage] = useState<any>(1);
	const [newpage, setnewpage] = useState<any>([]);
	const [apiloading, setApiLoading] = useState(false)

	useEffect(() => {
		(async function () {
			try {
				setApiLoading(true)
				let data = await fetch(
					`https://picsum.photos/v2/list?limit=35`
				);
				let parsedata = await data.json();
				setapidata(parsedata);
				setApiLoading(false)
			} catch (error) {
				setApiLoading(false)
			}


		})();
	}, [page]);

	useEffect(() => {
		if (page > 3) {
			let newpage = [];
			for (let i = page - 3; i < page; i++) {
				newpage.push(i);
			}
			newpage.push(page);
			for (let i = page + 1; i <= page + 3; i++) {
				newpage.push(i);
			}
			setnewpage(newpage);
		}
	}, [page]);

	const handlePrev = () => {
		setpage((page: any) => page - 1);
	};
	const handleNext = () => {
		setpage((page: any) => page + 1);
	};

	const selectCurrentPage = (selctitem: any) => {
		setpage(selctitem);
	};


	return (
		<>
			<Grid container sx={{margin: "5rem auto", width: "98%", bgcolor: "lightgrey", borderRadius: "1rem", display: "flex", justifyContent: "center", alignItems: "center"}} >
				<Grid size={{xs: 12, md: 12}} sx={{display: "flex", justifyContent: "space-evenly", alignItems: "center", }} >
					<RecipeReviewCard apidata={apidata} apiloading={apiloading} />
				</Grid>
			</Grid>

			<Grid sx={{width: "90%", margin: "3rem auto", display: "flex", justifyContent: "space-between", }} >

				<Button variant="contained" onClick={handlePrev}>Previous</Button>
				{page > 3 ? (
					newpage?.map((item: any) => {
						return (
							<Button variant="contained" style={{backgroundColor: item == page ? "red" : "yellowgreen"}} onClick={() => selectCurrentPage(item)}>
								{" "}
								{item}{" "}
							</Button>
						);
					})
				) : (
					<Button variant="contained">{page}</Button>
				)}

				<Button variant="contained" onClick={handleNext} >Next</Button>

			</Grid>
		</>

	)
}

export default PaginationSecondPart;