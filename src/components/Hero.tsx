import type { StaticImageData } from 'next/image';
import Image from 'next/image';

interface HeroProps {
	imgData: StaticImageData;
	imgAlt: string;
	title: string;
}

const Hero = (props: HeroProps) => {
	return (
		<div className='relative h-screen'>
			Hero
			<div className='absolute -z-10 inset-0'>
				Home Page
				<Image
					src={props.imgData}
					alt={props.imgAlt}
					fill
					style={{ objectFit: 'cover' }}
				/>

			</div>
      <div className='pt-48 flex justify-center items-center'>
        <h1 className='text-8xl text-white'>
          {props.title}
        </h1>
      </div>
		</div>
	);
};
export default Hero;
