const About = () => {
	return (
		<section className='about-section my-150 rmy-100'>
			<div className='container'>
				<div className='row align-items-center'>
					<div className='col-lg-7'>
						<div className='about-images rmb-50'>
							<img src='assets/images/about/about1.png' alt='about image' />
							<img src='assets/images/about/about2.png' alt='about image' />
							<img src='assets/images/about/about3.png' alt='about image' />
						</div>
					</div>
					<div className='col-lg-5'>
						<div className='about-content'>
							<div className='section-title'>
								<h2>We Have 25+ Years Experience.</h2>
							</div>
							<h6>
								Saunas are used all over the world to improve health enjoy
								relax. During the clients stay in sauna, body is sweating and
								from harmful substances and toxins.
							</h6>
							<p>
								It has different attractions – tropical rain, fog, dew, wall
								jets and it is combined with sound, caribbian storm, aroma and
								various lighting effects, what makes you have an unforgettable
								filling.
							</p>
							<div className='vision-mision'>
								<div className='vm-image'>
									<img src='assets/images/about/icon.png' alt='Icon' />
								</div>
								<div className='vm-content'>
									<h4>Our Mission &amp; Vission</h4>
									<p>
										The pleasant temperature, similar to body temperature,
										extending beneath client’s body, frees the body negative
										tension caused by everyday stress.
									</p>
								</div>
							</div>
							<a href='#' className='theme-btn style-two'>
								Expert Team
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
