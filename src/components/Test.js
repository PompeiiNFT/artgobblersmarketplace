import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import img1  from '../assets/gobbler1.jpg';
import img2  from '../assets/gobbler2.jpg';

function test() {
	return (
		<div>
			<Link to='/'>Click to view our home page</Link>
			<h1>0x... Profile</h1>

			<h2>Your bids</h2>

			<Grid
				container
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 4, sm: 8, md: 12 }}
			>
				<Grid item xs={2} sm={4} md={4} >
					<img src={img1} width='50%' />
				</Grid>
				<Grid item xs={2} sm={4} md={4} >
					<img src={img1} width='50%' />
				</Grid>
				<Grid item xs={2} sm={4} md={4} >
					<img src={img1} width='50%' />
				</Grid>
			</Grid>

            <h2>Your Offers</h2>

			<Grid
				container
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 4, sm: 8, md: 12 }}
			>
				<Grid item xs={2} sm={4} md={4} >
					<img src={img2} width='50%' />
				</Grid>
				<Grid item xs={2} sm={4} md={4} >
					<img src={img2} width='50%' />
				</Grid>
				<Grid item xs={2} sm={4} md={4} >
					<img src={img2} width='50%' />
				</Grid>
			</Grid>
		</div>
	);
}

export default test;
