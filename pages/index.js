import About from 'containers/About';
import Beauty from 'containers/Beauty';
import Clients from 'containers/Clients';
import Gallery from 'containers/Gallery';
import Hero from 'containers/Hero';
import Pricing from 'containers/Pricing';
import Service from 'containers/Service';
import Team from 'containers/Team';
import Testimonials from 'containers/Testemonials';

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Service />
			<Pricing />
			<Beauty />
			<Gallery />
			<Team />
			<Testimonials />
			<Clients />
		</>
	);
}
