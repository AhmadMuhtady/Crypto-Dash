import { useState, useEffect } from 'react';

import { useParams } from 'react-router';

const API_URL = import.meta.env.VITE_COIN_API_URL;

const CoinDetailsPage = () => {
	const { id } = useParams();

	const [coin, setCoins] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchCoin = async () => {
			try {
				const res = await fetch(`${API_URL}/${id}`);
				if (!res.ok) throw new Error('Failed to fetch Data');

				const data = await res.json();
				console.log(data);
				setCoins(data);
			} catch (err) {
				console.log(err);
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchCoin();
	}, [id]);
	return <div>Coin Details {id}</div>;
};

export default CoinDetailsPage;
