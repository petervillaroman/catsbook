/** @format */

import React from 'react';
import {
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Switch,
} from '@mui/material';
import { DarkMode, Face, Home, People, Storefront } from '@mui/icons-material';
import SettingsIcon from '@mui/icons-material/Settings';

// this is where we receive our state, we pass it into our export's parameter parens. ({state, setState})
export const Sidebar = ({ mode, setMode }) => {
	return (
		<Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
			<Box position='fixed'>
				<List>
					<ListItem disablePadding>
						<ListItemButton component='a' href='#home'>
							<ListItemIcon>
								<Home />
							</ListItemIcon>
							<ListItemText primary='Homepage ' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component='a' href='#profile'>
							<ListItemIcon>
								<Face />
							</ListItemIcon>
							<ListItemText primary='Profile ' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component='a' href='#contacts'>
							<ListItemIcon>
								<People />
							</ListItemIcon>
							<ListItemText primary='Contacts ' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component='a' href='#market'>
							<ListItemIcon>
								<Storefront />
							</ListItemIcon>
							<ListItemText primary='Marketplace ' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component='a' href='#settings'>
							<ListItemIcon>
								<SettingsIcon />
							</ListItemIcon>
							<ListItemText primary='Settings ' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component='a' href='#settings'>
							<ListItemIcon>
								<DarkMode />
							</ListItemIcon>
							{/* Finally this is where we use our setState and state hooks as the
							event result of an onClick listener. SIMPLE! : ) */}
							<Switch
								onClick={(e) =>
									setMode(mode === 'light' ? 'dark' : 'light')
								}
							/>
						</ListItemButton>
					</ListItem>
				</List>
			</Box>
		</Box>
	);
};
