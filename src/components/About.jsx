/** @format */
import '../styles/About.css';
import { ThemeContext } from '../../hooks/ThemeContext';
import { useContext } from 'react';
function About() {
	const { dark } = useContext(ThemeContext);
	
	const body = document.querySelector('body');
	!dark ? (body.className = '') : (body.className = 'dark');
	return (
		<>
			<div className={dark ? 'container darkCont' : 'container'}>
				<h3>about us</h3>
				<div className='aboutContainer'>
					<div className={dark ? 'aboutCard darkAbout' : 'aboutCard'}>
						<h2>how are we?</h2>
						<p>
							Have you ever needed a plumber or a locksmith or any other
							professional? Thats what were here for! B-Card makes available to
							you every professional you need so that you stop looking
						</p>
					</div>
					<div className={dark ? 'aboutCard darkAbout' : 'aboutCard'}>
						<h2>how to start?</h2>
						<p>
							Its easy! , easily search for the
							field/profession/area/professional you need and he will
							immediately pop up his details for you, (for the pros) we
							recommend you register on the site in order to save the
							professionals you liked and even leave a review (to come...)
						</p>
					</div>
					<div className={dark ? 'aboutCard darkAbout' : 'aboutCard'}>
						<h2>business owner?</h2>
						<p>
							Register on the site as a business account and start advertising
							yourself, you can save other businesses and track your tickets and
							reviews (to come...)
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default About;
