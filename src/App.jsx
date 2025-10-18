import { useState, useEffect } from 'react';
const API_URL =
	'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkLine=false';

const App = () => {
	const [coins, setCoins] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchCoins = async () => {
			try {
				const res = await fetch(API_URL);
				if (!res.ok) throw Error('Failed to fetch Data');
				const data = res.json();
				console.log(data);
				setCoins(data);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchCoins();
	}, []);
	return <></>;
};

export default App;
