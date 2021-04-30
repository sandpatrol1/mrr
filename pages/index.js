import Head from 'next/head';
import Header from '@components/header/Header';
import Wind from '@components/wind/Wind';
import Footer from '@components/footer/Footer';

export default function Home() {
	return (
		<div className="container">
			<Head>
				<title>Just Windy!</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Header title="Justwindy.com" />
				<Wind title="Hello" />
			</main>

			<Footer />
		</div>
	);
}
