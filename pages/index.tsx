import Head from 'next/head';
import Mrr from '../components/mrr/Mrr';
import Header from '../components/UI/header/Header';

export default function Home() {
	return (
		<div className="container">
			<Head>
				<title>MRR</title>
				<link rel="icon" href="/favicon.png" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Orelega+One&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<header>
				<Header title="MRR vs. Salary - Savings Calculator &#128202;" />
			</header>

			<main>
				<Mrr />
			</main>
		</div>
	);
}
