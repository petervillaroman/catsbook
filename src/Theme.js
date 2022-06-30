/** @format */

import { createTheme } from '@mui/material';

// We can change the default theme of components by :
// 1. creating the theme from a separate file like so
// 2. by importing the theme over to the file containing our desired component
// 3. importing themeprovider from @mui/material
// 4. We then wrap whatever we want to theme with <ThemeProvider> </ThemeProvider
export const theme = createTheme({
	palette: {
		primary: {
			main: '#1760a5',
			light: 'skyblue',
		},
		secondary: {
			main: '#15c630',
		},
		otherColor: {
			main: '#999',
		},
	},
});
