import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
	const router = useRouter();
	const headersData = [
		{
			title: 'Home',
			link: '/',
		},
		{
			title: 'About',
			link: '/about',
		},
		{
			title: 'Services',
			link: '/services',
		},
		{
			title: 'Contact',
			link: '/contact',
		},
	];
	return (
		<header className='main-header'>
			{/*Header-Upper*/}
			<div className='header-upper'>
				<div className='container clearfix'>
					<div className='header-inner d-lg-flex align-items-center'>
						<div className='logo-outer d-flex align-items-center'>
							<div className='logo'>
								<a href='index.html'>
									<img src='assets/images/logo.png' alt='' title />
								</a>
							</div>
						</div>
						<div className='nav-outer clearfix ml-lg-auto'>
							{/* Main Menu */}
							<nav className='main-menu navbar-expand-lg'>
								<div className='navbar-header clearfix'>
									{/* Toggle Button */}
									<button
										type='button'
										className='navbar-toggle'
										data-toggle='collapse'
										data-target='.navbar-collapse'
									>
										<span className='icon-bar' />
										<span className='icon-bar' />
										<span className='icon-bar' />
									</button>
								</div>
								<div className='navbar-collapse collapse clearfix'>
									<ul className='navigation clearfix'>
										{headersData?.map((item, index) => (
											<li
												className={router.asPath === item.link ? 'current' : ''}
												key={index}
											>
												<Link href={item.link}>
													<a>{item.title}</a>
												</Link>
											</li>
										))}
									</ul>
								</div>
							</nav>
							{/* Main Menu End*/}
						</div>
					</div>
				</div>
			</div>
			{/*End Header Upper*/}
		</header>
	);
};

export default Header;
