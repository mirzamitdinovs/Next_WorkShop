import Footer from 'components/Footer';
import Header from 'components/Header';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
	const router = useRouter();

	return (
		<div className='page-wrapper'>
			{/* <Header /> */}
			{children}
			{/* <Footer /> */}
		</div>
	);
};

export default Layout;
