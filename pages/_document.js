import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				<title>
					Welcome | Gilkan - Dermatology and Skin Care HTML5 Template
				</title>

				<link
					rel='shortcut icon'
					href='assets/images/favicon.png'
					type='image/x-icon'
				/>

				<link
					href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap'
					rel='stylesheet'
				/>
				<link rel='stylesheet' href='assets/css/fontawesome-all.min.css' />
				<link rel='stylesheet' href='assets/css/bootstrap.min.css' />
				<link rel='stylesheet' href='assets/css/menu.css' />
				<link rel='stylesheet' href='assets/css/leaflet.css' />
				<link rel='stylesheet' href='assets/css/flaticon.css' />
				<link rel='stylesheet' href='assets/css/animate.min.css' />
				<link rel='stylesheet' href='assets/css/spacing.min.css' />
				<link rel='stylesheet' href='assets/css/magnific-popup.css' />
				<link rel='stylesheet' href='assets/css/owl.carousel.min.css' />
				<link rel='stylesheet' href='assets/css/style.css' />
				<link rel='stylesheet' href='assets/css/responsive.css' />

				<script src='assets/js/jquery.min.js'></script>
				<script src='assets/js/bootstrap.min.js'></script>
				<script src='assets/js/owl.carousel.min.js'></script>
				<script src='assets/js/isotope.pkgd.min.js'></script>
				<script src='assets/js/jquery.magnific-popup.min.js'></script>
				<script src='assets/js/parallax.min.js'></script>
				<script src='assets/js/leaflet.min.js'></script>
				<script src='assets/js/wow.js'></script>

				{/* <script src='assets/js/script.js'></script> */}
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
