import Image from 'next/image';
import Hero from '@/components/Hero';
import homeImg from '/public/home.jpg';

export default function Home() {
	return (
		<div>
			<Hero
				imgData={homeImg}
				imgAlt='car factory image'
				title='Professional Cloud Hosting'
			/>
		</div>
	);
}

