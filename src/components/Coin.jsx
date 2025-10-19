const Coin = ({ coin }) => {
	return (
		<div
			className="coin-card"
			style={{
				boxShadow:
					coin.price_change_percentage_24h >= 0
						? '0 0 10px rgba(0, 255, 0, 0.5)' // green glow
						: '0 0 10px rgba(255, 0, 0, 0.5)', // red glow
			}}
		>
			<div className="coin-header">
				<img className="coin-image" src={coin.image} alt={coin.name} />
				<div>
					<h2>{coin.name}</h2>
					<p className="symbol">{coin.symbol.toUpperCase()}</p>
				</div>
			</div>
			<p>Price: ${coin.current_price.toLocaleString()}</p>
			<p
				className={
					coin.price_change_percentage_24h >= 0 ? 'positive' : 'negative'
				}
			>
				{coin.price_change_percentage_24h.toFixed(2)} %
			</p>
			<p>Market Cap: {coin.market_cap_change_24h.toLocaleString()}</p>
		</div>
	);
};

export default Coin;
