/** @format */

import React from 'react';
import { Avatar, AvatarGroup, Box, Typography } from '@mui/material';

export const Rightbar = () => {
	return (
		<Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
			<Box position='fixed'>
				<Typography variant='h6' fontWeight={100}>
					Online Friends
				</Typography>
				<AvatarGroup max={6}>
					<Avatar alt='Nim Boo' src='https://i.imgur.com/NvzQcM3.jpg?1' />
					<Avatar alt='Snoo Bo' src='https://i.imgur.com/YeqpVAo.jpg?1' />
					<Avatar
						alt='Irate Pirate'
						src='https://i.imgur.com/cIyCNk6.jpg?1'
					/>
					<Avatar
						alt='Penny Ghou'
						src='https://i.imgur.com/tkedMB6.jpg?1'
					/>
					<Avatar
						alt='Nose tril'
						src='https://i.imgur.com/c0tmZ3g.jpg?1'
					/>
					<Avatar
						alt='Trevor Henderson'
						src='/static/images/avatar/5.jpg'
					/>
				</AvatarGroup>
			</Box>
		</Box>
	);
};
