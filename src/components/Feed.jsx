/** @format */

import React from 'react';
import Post from './Post';
import Box from '@mui/material/Box';
export const Feed = () => {
	return (
		<Box flex={4} p={2}>
			<Post />
			<Post />
			<Post />
			<Post />
		</Box>
	);
};
