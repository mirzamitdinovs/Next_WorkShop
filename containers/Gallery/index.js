import Title from 'components/Title';

const Gallery = () => {
	return (
		<section className='gallery-section mb-120 rmb-70'>
			<div className='container'>
				<Title title='Our Photo Gallery'>
					<p>
						It has different attractions tropical rain fog dew wall jets and it
						is <br /> combined with sound, caribbian storm.
					</p>
				</Title>

				<div className='row gallery-active'>
					{/* single-portfolio item*/}
					<div className='grid-item col-lg-4 col-md-6'>
						<div className='gallery-item'>
							<img
								src='assets/images/gallery/gallery2.png'
								className='img-fluid'
								alt=''
							/>
							<div className='gallery-hover'>
								<a
									className='gallery-popup-link'
									href='assets/images/gallery/gallery2.png'
								>
									<i className='flaticon-eye' />
								</a>
							</div>
						</div>
					</div>
					{/* single-portfolio item*/}
					<div className='grid-item col-lg-4 col-md-6'>
						<div className='gallery-item'>
							<img
								src='assets/images/gallery/gallery6.png'
								className='img-fluid'
								alt=''
							/>
							<div className='gallery-hover'>
								<a
									className='gallery-popup-link'
									href='assets/images/gallery/gallery6.png'
								>
									<i className='flaticon-eye' />
								</a>
								<h4>Neck Beauty</h4>
							</div>
						</div>
					</div>
					{/* single-portfolio item*/}
					<div className='grid-item col-lg-4 col-md-6'>
						<div className='gallery-item'>
							<img
								src='assets/images/gallery/gallery3.png'
								className='img-fluid'
								alt=''
							/>
							<div className='gallery-hover'>
								<a
									className='gallery-popup-link'
									href='assets/images/gallery/gallery3.png'
								>
									<i className='flaticon-eye' />
								</a>
								<h4>Neck Beauty</h4>
							</div>
						</div>
					</div>
					{/* single-portfolio item*/}
					<div className='grid-item col-lg-4 col-md-6'>
						<div className='gallery-item'>
							<img
								src='assets/images/gallery/gallery1.png'
								className='img-fluid'
								alt=''
							/>
							<div className='gallery-hover'>
								<a
									className='gallery-popup-link'
									href='assets/images/gallery/gallery1.png'
								>
									<i className='flaticon-eye' />
								</a>
								<h4>Neck Beauty</h4>
							</div>
						</div>
					</div>
					{/* single-portfolio item*/}
					<div className='grid-item col-lg-4 col-md-6'>
						<div className='gallery-item'>
							<img
								src='assets/images/gallery/gallery5.png'
								className='img-fluid'
								alt=''
							/>
							<div className='gallery-hover'>
								<a
									className='gallery-popup-link'
									href='assets/images/gallery/gallery5.png'
								>
									<i className='flaticon-eye' />
								</a>
								<h4>Neck Beauty</h4>
							</div>
						</div>
					</div>
					{/* single-portfolio item*/}
					<div className='grid-item col-lg-4 col-md-6'>
						<div className='gallery-item'>
							<img
								src='assets/images/gallery/gallery4.png'
								className='img-fluid'
								alt=''
							/>
							<div className='gallery-hover'>
								<a
									className='gallery-popup-link'
									href='assets/images/gallery/gallery4.png'
								>
									<i className='flaticon-eye' />
								</a>
								<h4>Neck Beauty</h4>
							</div>
						</div>
					</div>
					{/* single-portfolio item*/}
					<div className='grid-item col-lg-4 col-md-6'>
						<div className='gallery-item'>
							<img
								src='assets/images/gallery/gallery7.png'
								className='img-fluid'
								alt=''
							/>
							<div className='gallery-hover'>
								<a
									className='gallery-popup-link'
									href='assets/images/gallery/gallery7.png'
								>
									<i className='flaticon-eye' />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Gallery;
