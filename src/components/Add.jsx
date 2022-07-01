/** @format */

import { Box, Fab, Modal, Tooltip, Typography } from '@mui/material';
import { React, useState } from 'react';
import { Add as AddIcon } from '@mui/icons-material';
function Add() {
	const [open, setOpen] = useState(false);

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
			<Modal
				open={open}
				onClose={(e) => setOpen(false)}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'>
				<Box
					width={100}
					height={100}
					bgcolor='white'
					p={2}
					borderRadius={5}>
					Hello{' '}
				</Box>
			</Modal>
		</>
	);
}

export default Add;
