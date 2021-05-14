import Image from 'next/image';
import Head from 'next/head';
import Wind from '@components/wind/Wind';
import Footer from '@components/footer/Footer';

export default function Home() {
	return (
		<div className="container">
			<Head>
				<title>Just Windy!</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Orelega+One&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
					rel="stylesheet"
				/>
			</Head>
			{/* <Image
				// loader={myLoader}
				src="/rain-drops-illuminated-on-window.jpg"
				alt="raindrops"
				layout="fill"
				objectFit="cover"
				objectPosition="center"
			/> */}

			<main>
				<Wind />
			</main>

			<Footer />
		</div>
	);
}
