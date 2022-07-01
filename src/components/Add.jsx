/** @format */

import { Box, Fab, Modal, styled, Tooltip } from '@mui/material';
import { React, useState } from 'react';
import { Add as AddIcon } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { Avatar } from '@mui/material';
function Add() {
	const [open, setOpen] = useState(false);

	const StyledModal = styled(Modal)({
		display: 'flex',
		alignItem: 'center',
		justifyContent: 'center',
	});

	const UserBox = styled(Box)({
		display: 'flex',
		alignItem: 'center',
		gap: '10px',
		marginBottom: '20px',
	});
	return (
		<>
			<Tooltip
				onClick={(e) => setOpen(true)}
				title='Delete'
				sx={{
					position: 'fixed',
					bottom: 20,
					left: { xs: 'calc(50% - 25px)', md: 30 },
				}}>
				<Fab color='primary' aria-label='add'>
					<AddIcon />
				</Fab>
			</Tooltip>
			<StyledModal
				open={open}
				onClose={(e) => setOpen(false)}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'>
				<Box
					width={400}
					height={280}
					bgcolor='white'
					p={2}
					borderRadius={5}>
					<Typography variant='h6' color={'gray'} textAlign='center'>
						Create post
					</Typography>
					<UserBox>
						<Avatar
							src='https://i.imgur.com/M2UFQ68.jpg'
							sx={{ width: 30, height: 30 }}></Avatar>
						<Typography>KP Villaroman</Typography>
					</UserBox>
				</Box>
			</StyledModal>
		</>
	);
}

export default Add;
