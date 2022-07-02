/** @format */

import { Box, Stack } from '@mui/material';
import { Feed } from './components/Feed';
import { NavBar } from './components/NavBar';
import { Rightbar } from './components/Rightbar';
import { Sidebar } from './components/Sidebar';
import Add from './components/Add';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import { React, useState } from 'react';
function App() {

	// this useState hook is for setting the theme to light and dark. 
	// this is passed to our Sidebar component
	// Follow us down to the side bar component vvv
	const [mode, setMode] = useState('light');

	const darkTheme = createTheme({
		palette: {
			mode: mode,
		},
	});

	return (
		<ThemeProvider theme={darkTheme}>
			<Box bgcolor={'background.default'} color={'text.primary'}>
				<NavBar />
				<Stack direction='row' spacing={2} justifyContent='space-evenly '>
					{/* This is how we pass our state and state setter to Sidebar
					FOLLOW US TO Sidebar.jsx to see how we receive our state/setState */}
					<Sidebar setMode={setMode} mode={mode} />
					<Feed />
					<Rightbar />
				</Stack>
				<Add />
			</Box>
		</ThemeProvider>
	);
}

export default App;
