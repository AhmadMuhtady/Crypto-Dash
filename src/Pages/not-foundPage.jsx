import { Link } from 'react-router';

const NotFoundPage = () => {
	return (
		<div style={styles.container}>
			<video
				autoPlay
				loop
				muted
				style={styles.videoBackground}
				src="/videos/caveman-404.mp4"
			/>

			{/* Dark translucent overlay box */}
			<div style={styles.overlay}>
				<div style={styles.overlayBox}>
					<h1 style={styles.title}>404</h1>
					<p style={styles.message}>
						Oops! The page you’re looking for doesn’t exist.
					</p>

					<Link to="/" style={styles.link}>
						🔙 Go Back Home
					</Link>
				</div>
			</div>
		</div>
	);
};

const styles = {
	container: {
		// position: 'fixed', // prevents scroll
		top: 0,
		left: 0,
		width: '100%',
		height: '100vh',
		overflow: 'hidden', // no scroll
		color: '#fff',
		backgroundColor: '#000',
	},

	videoBackground: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		objectFit: 'cover',
		zIndex: 0,
	},

	overlay: {
		position: 'absolute',
		top: '60%',
		left: '38%',
		textAlign: 'center',
		zIndex: 1,
	},

	// 🔹 Semi-transparent dark box behind text
	overlayBox: {
		background: 'rgba(0, 0, 0, 0.4)',
		padding: '15px',
		borderRadius: '12px',
		backdropFilter: 'blur(4px)',
		display: 'inline-block',
	},

	title: {
		fontSize: '60px',
		marginBottom: '5px',
		fontWeight: 'bold',
	},

	message: {
		fontSize: '14px',
		marginBottom: '15px',
		color: '#ccc',
	},

	link: {
		textDecoration: 'none',
		background: '#007bff',
		color: '#fff',
		padding: '10px 20px',
		borderRadius: '8px',
		fontWeight: 'bold',
		transition: 'background 0.3s',
		display: 'inline-block',
	},

	linkHover: {
		background: '#0056b3',
	},
};

export default NotFoundPage;
