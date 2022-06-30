/** @format */

import { Button, styled, Typography } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { Add } from '@mui/icons-material';

function App() {
	// we took our sx={{}} prop style and created a style component.
	// we just declare a variable and set it any MUI component or HTML element.
	//  const StyleComponent = styled(MUI/HTML)({ })
	const BlueButton = styled(Button)(({ theme }) => ({
		backgroundColor: theme.palette.otherColor.main,
		color: '#888',
		margin: 5,
		'&:hover': {
			backgroundColor: 'lightblue',
		},
		'&:disabled': {
			backgroundColor: 'gray',
			color: 'white',
		},
	}));

	return (
		<div className='App'>
			<Button variant='text'>Text</Button>
			<Button
				startIcon={<SettingsIcon />}
				variant='contained'
				color='otherColor'
				size='small'>
				Settings
			</Button>
			<Button
				startIcon={<Add />}
				variant='contained'
				color='secondary'
				size='small'>
				Add new post
			</Button>
			<Button variant='outlined'>Outlined</Button>
			<Typography variant='h1' component='p'>
				Hi my name is balls
			</Typography>

			{/* This button is styled using the sx property. Apparently you can do such things as hover effects
    using the sx property. I don't fully know how to do it yet but, it's nice to know you can.  */}
			<BlueButton> Button</BlueButton>
			<BlueButton> Another Button</BlueButton>
		</div>
	);
}

export default App;
