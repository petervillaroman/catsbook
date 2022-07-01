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
