import Title from 'components/Title';
import Link from 'next/link';

const Service = () => {
	const serviceData = [
		{
			icon: 'flaticon-eyepatch',
			style: 'style-one',
			title: 'Facial Implants',
			text: '	It has different attractions combined with sound, caribbian storm, aroma and various.',
			link: '/services',
		},
		{
			icon: 'flaticon-aesthetic',
			style: 'style-two',
			title: 'Lip Augmentation',
			text: '	It has different attractions combined with sound, caribbian storm, aroma and various.',
			link: '/services',
		},
		{
			icon: 'flaticon-beauty',
			style: 'style-three',
			title: 'Blepharoplasty',
			text: '	It has different attractions combined with sound, caribbian storm, aroma and various.',
			link: '/services',
		},
		{
			icon: 'flaticon-ear',
			style: 'style-four',
			title: 'Ear Surgery',
			text: '	It has different attractions combined with sound, caribbian storm, aroma and various.',
			link: '/services',
		},
	];
	return (
		<section className='services-section pt-150 rpt-95 mb-145 rmb-95'>
			<div className='container'>
				<Title title='Services We Offer'>
					It has different attractions tropical rain fog dew wall jets and it is{' '}
					<br /> combined with sound, caribbian storm.
				</Title>

				<div className='row'>
					{serviceData?.map((item, index) => (
						<div key={index} className='col-lg-3 col-md-6'>
							<div className={`service-item ${item.style}`}>
								<i className={item.icon} />
								<h4>
									<Link href={item.link}>
										<a>{item.title}</a>
									</Link>
								</h4>
								<p>{item.text}</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className='service-angle'>
				<img src='assets/images/services/service-angle.png' alt='hero angle' />
			</div>
			<div className='service-ellipse'>
				<img src='assets/images/services/ellipse.png' alt='Ellipse' />
			</div>
			<div className='what-experct mt-120 rmt-70'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-6'>
							<div className='what-experct-img rmb-50' />
						</div>
						<div className='col-lg-6'>
							<div className='what-experct-content'>
								<h3>What Experct When You Arrive For Your Appoinment</h3>
								<p>
									It has different attractions – tropical rain, fog, dew, wall
									jets and it is combined with sound, caribbian storm aroma and
									variou lighting effecs.
								</p>
								<a href='#' className='theme-btn style-three'>
									Expert Team
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Service;
