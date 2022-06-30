/** @format */

import { Box, Container, Stack } from '@mui/material';
import { Feed } from './components/Feed';
import { NavBar } from './components/NavBar';
import { Rightbar } from './components/Rightbar';
import { Sidebar } from './components/Sidebar';

function App() {
	return (
		<Box>
			{/* <NavBar /> */}
			<Stack direction='row'>
				<Feed />
				<Rightbar />
				<Sidebar />
			</Stack>
		</Box>
	);
}

export default App;
