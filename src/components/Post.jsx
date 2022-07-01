/** @format */

import React from 'react';
import {
	Avatar,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Checkbox,
	IconButton,
} from '@mui/material';
import { Typography } from '@mui/material';
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';

function Post() {
	return (
		<Card sx={{ margin: 5 }}>
			<CardHeader
				avatar={
					<Avatar sx={{ bgcolor: 'red' }} aria-label='recipe'>
						R
					</Avatar>
				}
				action={
					<IconButton aria-label='settings'>
						<MoreVert />
					</IconButton>
				}
				title='KP the Programmer'
				subheader='Jun 30, 2022'
			/>
			<CardMedia
				component='img'
				height='40%'
				width='30%'
				image='https://i.imgur.com/kAEFMAZ.jpg'
				alt='Paella dish'
			/>
			<CardContent>
				<Typography variant='body2' color='text.secondary'>
					This coffee was great! It gave me the ability and focus required
					to create this semi-interactive and responsive website. Try the
					Dark/Light button, it should switch things up a bit!
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label='add to favorites'>
					<Checkbox
						icon={<FavoriteBorder />}
						checkedIcon={<Favorite sx={{ color: 'red' }} />}
					/>
				</IconButton>
				<IconButton aria-label='share'>
					<Share />
				</IconButton>
			</CardActions>
		</Card>
	);
}

export default Post;
