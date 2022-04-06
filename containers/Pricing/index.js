import Title from 'components/Title';

const Pricing = () => {
	return (
		<section className='pricing-section mb-120 rmb-70'>
			<div className='container'>
				<Title title='Best Price &amp; Planning Of Gilkan'>
					It has different attractions tropical rain fog dew wall jets and it is{' '}
					<br /> combined with sound, caribbian storm.
				</Title>
				<div className='section-title text-center mb-95'></div>
				<div className='row justify-content-center'>
					<div className='col-lg-4 col-md-6'>
						<div className='price-item style-one'>
							<div className='price-image'>
								<img
									src='assets/images/pricing/price1.png'
									alt='Pricing Plan'
								/>
							</div>
							<div className='pricing-content'>
								<div className='price-circle'>
									<p>Starting From</p>
									<h3>$150</h3>
								</div>
								<ul>
									<li>Breast Augmentation</li>
									<li>Mommy Makeover</li>
									<li>Eyelid Surgery</li>
									<li>Skin Care Treatments</li>
									<li>Chin Augmentation</li>
								</ul>
								<a href='#' className='theme-btn'>
									Starte Now
								</a>
							</div>
						</div>
					</div>
					<div className='col-lg-4 col-md-6'>
						<div className='price-item style-two'>
							<div className='price-image'>
								<img
									src='assets/images/pricing/price2.png'
									alt='Pricing Plan'
								/>
							</div>
							<div className='pricing-content'>
								<div className='price-circle'>
									<p>Starting From</p>
									<h3>$180</h3>
								</div>
								<ul>
									<li>Breast Augmentation</li>
									<li>Mommy Makeover</li>
									<li>Eyelid Surgery</li>
									<li>Skin Care Treatments</li>
									<li>Chin Augmentation</li>
								</ul>
								<a href='#' className='theme-btn'>
									Starte Now
								</a>
							</div>
						</div>
					</div>
					<div className='col-lg-4 col-md-6'>
						<div className='price-item style-three'>
							<div className='price-image'>
								<img
									src='assets/images/pricing/price3.png'
									alt='Pricing Plan'
								/>
							</div>
							<div className='pricing-content'>
								<div className='price-circle'>
									<p>Starting From</p>
									<h3>$260</h3>
								</div>
								<ul>
									<li>Breast Augmentation</li>
									<li>Mommy Makeover</li>
									<li>Eyelid Surgery</li>
									<li>Skin Care Treatments</li>
									<li>Chin Augmentation</li>
								</ul>
								<a href='#' className='theme-btn'>
									Starte Now
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Pricing;
