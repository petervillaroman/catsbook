/** @format */
import AirlineSeatLegroomReducedIcon from '@mui/icons-material/AirlineSeatLegroomReduced';
import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material';
import { Block } from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)({
	display: 'flex',
	justifyContent: 'space-between',
});

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
			</StyledToolbar>
		</AppBar>
	);
};
