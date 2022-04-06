const Hero = () => {
	return (
		<section className='hero-section'>
			<div className='container'>
				<div className='hero-content'>
					<h1>
						We Are <span>Ready</span> For Your <span>Skin</span> Care{' '}
						<span>Help.</span>
					</h1>
					<h5>
						Saunas are used all over the world to improve health, to enjoy and
						relax.
					</h5>
					<a href='contact.html' className='theme-btn'>
						Contact now
					</a>
				</div>
			</div>
			<div className='hero-angle'>
				<img src='assets/images/hero/hero-angle.png' alt='hero angle' />
			</div>
		</section>
	);
};

export default Hero;
