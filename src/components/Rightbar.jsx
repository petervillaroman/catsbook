/** @format */

import React from 'react';
import {
	Avatar,
	AvatarGroup,
	Box,
	Divider,
	ImageList,
	ImageListItem,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Typography,
} from '@mui/material';

export const Rightbar = () => {
	return (
		<Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
			<Box position='fixed' width={300}>
				<Typography variant='h6' fontWeight={100} my={2}>
					Online Friends
				</Typography>
				<AvatarGroup max={6}>
					<Avatar alt='Nim Boo' src='https://i.imgur.com/NvzQcM3.jpg?1' />
					<Avatar alt='Snoo Bo' src='https://i.imgur.com/YeqpVAo.jpg?1' />
					<Avatar
						alt='Irate Pirate'
						src='https://i.imgur.com/cIyCNk6.jpg?1'
					/>
					<Avatar
						alt='Penny Ghou'
						src='https://i.imgur.com/tkedMB6.jpg?1'
					/>
					<Avatar
						alt='Nose tril'
						src='https://i.imgur.com/c0tmZ3g.jpg?1'
					/>
					<Avatar
						alt='Trevor Henderson'
						src='/static/images/avatar/5.jpg'
					/>
				</AvatarGroup>
				<Typography variant='h6' fontWeight={100} my={2}>
					Latest Photos
				</Typography>
				<ImageList cols={3} rowHeight={100}>
					<ImageListItem>
						<img
							src='https://s7d2.scene7.com/is/image/PetSmart/5287722'
							loading='lazy'
							alt='filler'
						/>
					</ImageListItem>
					<ImageListItem>
						<img
							src='https://m.media-amazon.com/images/I/715EiqpJ6XL._AC_SY355_.jpg'
							loading='lazy'
							alt='filler'
						/>
					</ImageListItem>
					<ImageListItem>
						<img
							src='https://expertreviews.b-cdn.net/sites/expertreviews/files/styles/er_main_wide/public/2017/09/best_cat_toys_catit_senses_2_play_circuit.jpg?itok=uL55aNCK'
							loading='lazy'
							alt='filler'
						/>
					</ImageListItem>
					<ImageListItem>
						<img
							src='https://media1.popsugar-assets.com/files/thumbor/5am41PTCufDDD3XywvZlKyTKH_U/0x403:1560x1963/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/04/02/869/n/1922243/5e9f8c455e8642636d5f55.94337501_/i/best-toys-to-keep-cats-kittens-entertained.jpg'
							loading='lazy'
							alt='filler'
						/>
					</ImageListItem>
					<ImageListItem>
						<img
							src='https://static.onecms.io/wp-content/uploads/sites/47/2021/12/16/cat-toy-interactive-treat-maze.png'
							loading='lazy'
							alt='filler'
						/>
					</ImageListItem>
					<ImageListItem>
						<img
							src='https://media1.popsugar-assets.com/files/thumbor/DtEuO-LptNpfh2V6vPH7dtYVBRs/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2020/04/02/848/n/1922243/8c4dbefebae68625_netimg2p5xoZ/i/Amakunft-Electric-Fish-Cat-Toy.jpg'
							loading='lazy'
							alt='filler'
						/>
					</ImageListItem>
				</ImageList>
				<Typography variant='h6' fontWeight={100} my={2}>
					Latest Comments
				</Typography>
				<List
					sx={{
						width: '100%',
						maxWidth: 360,
						bgcolor: 'background.paper',
					}}>
					<ListItem alignItems='flex-start'>
						<ListItemAvatar>
							<Avatar
								alt='pirate'
								src='https://i.imgur.com/cIyCNk6.jpg?1'
							/>
						</ListItemAvatar>
						<ListItemText
							primary='Reow?'
							secondary={
								<React.Fragment>
									<Typography
										sx={{ display: 'inline' }}
										component='span'
										variant='body2'
										color='text.primary'>
										to Maggie
									</Typography>
									{' Ma ma meow meow... rrr...rreow? oouuuurrrrrrr...'}
								</React.Fragment>
							}
						/>
					</ListItem>
					<Divider variant='inset' component='li' />
					<ListItem alignItems='flex-start'>
						<ListItemAvatar>
							<Avatar
								alt='Penny'
								src='https://i.imgur.com/tkedMB6.jpg?1'
							/>
						</ListItemAvatar>
						<ListItemText
							primary='Nimboo stop!'
							secondary={
								<React.Fragment>
									<Typography
										sx={{ display: 'inline' }}
										component='span'
										variant='body2'
										color='text.primary'>
										to Nimboo
									</Typography>
									{' GRRRrrrrr..... RREOOOW!!! ggggrrrrrr!!'}
								</React.Fragment>
							}
						/>
					</ListItem>
					<Divider variant='inset' component='li' />
					<ListItem alignItems='flex-start'>
						<ListItemAvatar>
							<Avatar
								alt='Kubo'
								src='https://i.imgur.com/YeqpVAo.jpg?1'
							/>
						</ListItemAvatar>
						<ListItemText
							primary='Gasp!'
							secondary={
								<React.Fragment>
									<Typography
										sx={{ display: 'inline' }}
										component='span'
										variant='body2'
										color='text.primary'>
										To everyone
									</Typography>
									{' wawawaah?? ouuuwaaa... uwawawaaahhh??? '}
								</React.Fragment>
							}
						/>
					</ListItem>
				</List>
			</Box>
		</Box>
	);
};
