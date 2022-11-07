import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import img1 from '../assets/gobbler1.jpg';
import img2 from '../assets/gobbler2.jpg';
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

function Test() {
	// const [isConnected, setIsConnected] = useState(true);

	const { chains, provider } = configureChains(
		[chain.mainnet],
		[
			alchemyProvider({ apiKey: process.env.REACT_APP_ALCHEMY_ID }),
			publicProvider(),
		]
	);
	const { connectors } = getDefaultWallets({
		appName: 'My RainbowKit App',
		chains,
	});

	const wagmiClient = createClient({
		autoConnect: true,
		connectors,
		provider,
	});

	const { isConnected, address } = useAccount();

	console.log(isConnected);

	useEffect(() => {}, [isConnected]);

	return (
		<WagmiConfig client={wagmiClient}>
			<RainbowKitProvider chains={chains}>
				<div>
					<Link to='/'>Click to view our home page</Link>
					<h1>0x... Profile</h1>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<ConnectButton />
					</div>

					{!isConnected ? (
						<p>Please connect your wallet!</p>
					) : (
						<>
                        {console.log(address)}
							<h2>Your Bids</h2>
							<Grid
								container
								spacing={{ xs: 2, md: 3 }}
								columns={{ xs: 4, sm: 8, md: 12 }}
							>
								<Grid item xs={2} sm={4} md={4}>
									<img src={img1} width='50%' />
								</Grid>
								<Grid item xs={2} sm={4} md={4}>
									<img src={img1} width='50%' />
								</Grid>
								<Grid item xs={2} sm={4} md={4}>
									<img src={img1} width='50%' />
								</Grid>
							</Grid>

							<h2>Your Offers</h2>

							<Grid
								container
								spacing={{ xs: 2, md: 3 }}
								columns={{ xs: 4, sm: 8, md: 12 }}
							>
								<Grid item xs={2} sm={4} md={4}>
									<img src={img2} width='50%' />
								</Grid>
								<Grid item xs={2} sm={4} md={4}>
									<img src={img2} width='50%' />
								</Grid>
								<Grid item xs={2} sm={4} md={4}>
									<img src={img2} width='50%' />
								</Grid>
							</Grid>
						</>
					)}
				</div>
			</RainbowKitProvider>
		</WagmiConfig>
	);
}

export default Test;
