import Banner from 'components/Banner';
import About from 'containers/About';
import Clients from 'containers/Clients';
import Mission from 'containers/Mission';
import Team from 'containers/Team';
import Testimonials from 'containers/Testemonials';

const AboutPage = () => {
	return (
		<>
			<Banner />
			<About />
			<Mission />
			<Team />
			<Testimonials />
			<Clients />
		</>
	);
};

export default AboutPage;
