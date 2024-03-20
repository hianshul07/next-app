import Hero from "@/components/Hero";
import scaleImg from '/public/scale.jpg'
const Scale = () => {
	return <div>
		<Hero imgData={scaleImg} imgAlt={"Factory Image"} title={"Scale to Infinity"} />
	</div>;
};
export default Scale;
