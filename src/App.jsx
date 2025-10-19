import { useState, useEffect } from 'react';
import Coin from './components/Coin';
import LimitSelect from './components/LimitSelect';

const API_URL = import.meta.env.VITE_API_URL;

const App = () => {
	const [coins, setCoins] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [limit, setLimit] = useState(10);

	useEffect(() => {
		const fetchCoins = async () => {
			setLoading(true);
			try {
				const res = await fetch(
					`${API_URL}&order=market_cap_desc&per_page=${limit}&page=1&sparkLine=false`
				);
				if (!res.ok) throw new Error('Failed to fetch data');
				const data = await res.json();
				setCoins(data);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchCoins();
	}, [limit]);

	return (
		<div>
			<h1>🚀 Crypto Dash</h1>

			{loading && <p>Loading...</p>}
			{error && <div className="error">{error}</div>}
			<LimitSelect limit={limit} onChangeLimit={setLimit} />

			{!loading && !error && (
				<main className="grid">
					{coins.map((coin) => (
						<Coin key={coin.id} coin={coin} />
					))}
				</main>
			)}
		</div>
	);
};

export default App;
