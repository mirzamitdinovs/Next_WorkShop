const Banner = () => {
	return (
		<section className='banner-section'>
			<div className='container'>
				<div className='banner-inner'>
					<div className='banner-content'>
						<h2 className='page-title'>About Us.</h2>
						<p>
							Saunas are used all over the world to improve <br /> health, to
							enjoy and relax.
						</p>
					</div>
					<nav aria-label='breadcrumb'>
						<ol className='breadcrumb'>
							<li className='breadcrumb-item'>
								<a href='index.html'>Home</a>
							</li>
							<li className='breadcrumb-item active' aria-current='page'>
								About Us
							</li>
						</ol>
					</nav>
				</div>
			</div>
			<div className='banner-angle'>
				<img src='assets/images/banner/banner-angle.png' alt='Angle' />
			</div>
		</section>
	);
};

export default Banner;
