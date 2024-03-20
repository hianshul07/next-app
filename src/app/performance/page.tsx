import Hero from '@/components/Hero';
import performaceImg from '/public/performance.jpg';

const Performance = () => {
	return (
		<div>
			<Hero
				imgData={performaceImg}
				imgAlt='machine working'
				title='We serve high performance applications'
			/>
		</div>
	);
};
export default Performance;
