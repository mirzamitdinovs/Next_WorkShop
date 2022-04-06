const Footer = () => {
	return (
		<footer className='footer-section pt-150 rpt-100'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-7'>
						<div className='row'>
							<div className='col-md-6'>
								<div className='widget about-widget mr-30 rmr-0'>
									<h4 className='footer-title'>About Us.</h4>
									<div className='about-widget-content'>
										<p>
											The pleasant temperature, similar body temperature,
											extending beneath client’s body, frees the body negative
											tension caused by everyday stress.
										</p>
										<div className='about-widget-contact mt-25'>
											<p>
												176 W street name, <br />
												New York, NY 10014
											</p>
											<h4>
												<a href='callto:+00568468349'>+00 568 468 349</a>
											</h4>
										</div>
									</div>
								</div>
							</div>
							<div className='col-md-6'>
								<div className='widget services-widget'>
									<h4 className='footer-title'>Our Services.</h4>
									<ul className='list-style-one'>
										<li>
											<a href='#'>Breast Augmentation</a>
										</li>
										<li>
											<a href='#'>Mommy Makeover</a>
										</li>
										<li>
											<a href='#'>Eyelid Surgery</a>
										</li>
										<li>
											<a href='#'>Skin Care Treatments</a>
										</li>
										<li>
											<a href='#'>Useful Links</a>
										</li>
										<li>
											<a href='#'>Free Consultation</a>
										</li>
										<li>
											<a href='#'>Customer Support</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className='col-lg-5'>
						<div className='widget subscribe-widget'>
							<h4 className='footer-title'>Subscribe Now.</h4>
							<form action='#'>
								<input type='email' placeholder='Your email here' required />
								<div className='btn-and-text'>
									<button type='submit'>
										<i className='flaticon-right-arrow-1' />
									</button>
									<p>Receive weekly tips &amp; tricks on beauty.</p>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			{/* Copyright Area*/}
			<div className='copyright mt-100 rmt-50'>
				<div className='container'>
					<div className='copyright-inner'>
						<p>Copyright@2020 Gilkan. All rights reserved</p>
						{/* Scroll Top Button */}
						<button className='scroll-top scroll-to-target' data-target='html'>
							<span className='flaticon-up-arrow' />
						</button>
					</div>
				</div>
			</div>
			<div className='footer-dotted-top'>
				<img src='assets/images/footer/footer-dot1.png' alt='Footer Dotted' />
			</div>
			<div className='footer-dotted-bottom'>
				<img src='assets/images/footer/footer-dot2.png' alt='Footer Dotted' />
			</div>
		</footer>
	);
};

export default Footer;
