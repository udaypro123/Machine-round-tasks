
import {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import HomeIcon from '@mui/icons-material/Home';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
// import downloadImage from '../LandingPage/e-commerce.png';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {useNavigate} from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';




const Navbar = () => {

	const navigate = useNavigate()

	const [truebs, setTruebs] = useState(false);
	const [state, setState] = useState<any>({left: false, });


	const toggleDrawer = (anchor: 'left' | 'right' | 'top' | 'bottom', open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
		if (event.type === 'keydown' && (event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift') {
			return;
		}

		setState({...state, [anchor]: open});
	};

	const list = (anchor: any) => (
		<Box
			sx={{width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<Box sx={{display: "flex", justifyContent: "flex-end", alignItems: "center", margin: "10px ", cursor: "pointer"}}>
				<ArrowBackIosNewIcon />
			</Box>
			<List>
				{['Home', 'Products', 'Order', 'Category',].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{['Setting', 'Logout', 'Contact Us', 'Help Centre'].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	const handlpages = (text: any) => {
		if (text == 'View Profile') {
			handleViewProfile()
		}
		if (text == "Setting") {
			console.log(1)
		}
		if (text == 'Help Centre') {
			console.log(1)
		}
		if (text == 'Logout') {
			handleLogout()
		}



	}


	const handleViewProfile = () => {
		setTruebs(false)
		navigate('/viewprofile')
	}


	const showAndHIdesidebar = () => {
		setTruebs(!truebs)
	}

	const Handlesigninpage = () => {
		return (
			<>
				<Box height="40vh" width="20vw" bgcolor={'#4287f5'} position="fixed" zIndex={1} top={70} right={10} borderRadius={3}>

					<List>
						{['View Profile', 'Setting', 'Help Centre', 'Logout',].map((text, index) => (
							<ListItem key={text} disablePadding onClick={() => handlpages(text)}>
								<ListItemButton>
									<ListItemIcon>
										{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
									</ListItemIcon>
									<ListItemText primary={text} />
									{
										index === 2 && <Divider />
									}
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Box>
			</>
		)
	}


	const handleLogout = async () => {

	}


	const getAllCoursesdata = async () => {

	}

	useEffect(() => {
		getAllCoursesdata()
	}, [])




	return (
		<AppBar position="fixed">
			<Toolbar>
				<div>
					{['left'].map((anchor: any) => (
						<React.Fragment key={anchor}>
							<IconButton
								edge="start"
								color="inherit"
								aria-label="menu"
								onClick={toggleDrawer(anchor, true)}
							>
								<MenuIcon sx={{fontSize: 35}} />
							</IconButton>

							<Drawer
								anchor={anchor}
								open={state[anchor]}
								onClose={toggleDrawer(anchor, false)}
							>
								{list(anchor)}
							</Drawer>
						</React.Fragment>
					))}
				</div>

				<Typography variant="h6" component="div" sx={{flexGrow: 1, justifyContent: "center"}}>
					Machine Coding Round tasks
				</Typography>
				<Box sx={{display: 'flex', alignItems: 'center'}}>
					<IconButton
						onClick={showAndHIdesidebar}
						color="inherit"
					>
						<AccountCircle sx={{fontSize: 35}} />
					</IconButton>
					{
						truebs && <Handlesigninpage />
					}
				</Box>
			</Toolbar>
		</AppBar>
	)
}

export default Navbar

