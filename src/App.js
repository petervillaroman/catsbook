/** @format */

import { Box } from '@mui/material';
import { Feed } from './components/Feed';
import { NavBar } from './components/NavBar';
import { Rightbar } from './components/Rightbar';
import { Sidebar } from './components/Sidebar';

function App() {
	return (
		<Box>
			<NavBar />
			<Feed />
			<Rightbar />
			<Sidebar />
		</Box>
	);
}

export default App;
