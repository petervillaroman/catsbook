/** @format */
import AirlineSeatLegroomReducedIcon from '@mui/icons-material/AirlineSeatLegroomReduced';
import {
	AppBar,
	Avatar,
	Badge,
	InputBase,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
} from '@mui/material';
import React from 'react';
import { styled } from '@mui/material';
import { Block, Mail, Notifications } from '@mui/icons-material';
import { Box } from '@mui/material';

const StyledToolbar = styled(Toolbar)({
	display: 'flex',
	justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
	backgroundColor: 'white',
	margin: '0 10px',
	borderRadius: theme.shape.borderRadius,
	width: '40%',
}));

const Icons = styled(Box)(({ theme }) => ({
	display: 'none',
	gap: '20px',
	alignItems: 'center',
	[theme.breakpoints.up('sm')]: {
		display: 'flex',
	},
}));

const UserBox = styled(Box)(({ theme }) => ({
	display: 'flex',
	gap: '10px',
	alignItems: 'center',
	[theme.breakpoints.up('sm')]: {
		display: 'none',
	},
}));

export const NavBar = () => {
	return (
		<AppBar position='sticky'>
			<StyledToolbar>
				<Typography
					variant='h6'
					sx={{ display: { xs: 'none', sm: 'block' } }}>
					KP Villaroman
				</Typography>
				<AirlineSeatLegroomReducedIcon
					sx={{ display: { xs: 'block', sm: 'none' } }}
				/>
				<Search>
					<InputBase placeholder='search... ' />{' '}
				</Search>
				<Icons>
					<Badge badgeContent={4} color='error'>
						<Mail />
					</Badge>
					<Badge badgeContent={2} color='error'>
						<Notifications />
					</Badge>
					<Avatar
						sx={{ height: '30', width: '30' }}
						src='https://i.imgur.com/M2UFQ68.jpg'
					/>
				</Icons>
				<UserBox>
					<Avatar
						sx={{ height: '30', width: '30' }}
						src='https://i.imgur.com/M2UFQ68.jpg'
					/>
					<Typography>KP</Typography>
				</UserBox>
			</StyledToolbar>
			<Menu
				id='demo-positioned-menu'
				aria-labelledby='demo-positioned-button'
				open={true}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}>
				<MenuItem>Profile</MenuItem>
				<MenuItem>My account</MenuItem>
				<MenuItem>Logout</MenuItem>
			</Menu>
		</AppBar>
	);
};
