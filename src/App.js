/** @format */

import { Button, Typography } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { Add } from '@mui/icons-material';

function App() {
	return (
		<div className='App'>
			<Button variant='text'>Text</Button>
			<Button
				startIcon={<SettingsIcon />}
				variant='contained'
				color='secondary'
				size='small'>
				Settings
			</Button>
			<Button
				startIcon={<Add />}
				variant='contained'
				color='success'
				size='small'>
				Add new post
			</Button>
			<Button variant='outlined'>Outlined</Button>
			<Typography variant='h1' component='p'>
				Hi my name is balls
			</Typography>

			{/* This button is styled using the sx property. Apparently you can do such things as hover effects
    using the sx property. I don't fully know how to do it yet but, it's nice to know you can.  */}
			<Button
				variant='contained'
				sx={{
					backgroundColor: 'skyblue',
					color: '#888',
					m: 5,
					'&:hover': {
						backgroundColor: 'lightblue',
					},
				}}>
				My Unique Button
			</Button>
		</div>
	);
}

export default App;
