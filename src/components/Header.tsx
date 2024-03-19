import Link from "next/link";

const Header = () => {
	return (
		<div>
			<Link href='/'>Home</Link>
			<br />
			<Link href='/performance'>Perf</Link>
			<br />
			<Link href='/reliability'>Rel</Link>
			<br />
			<Link href='/scale'>Scale</Link>
		</div>
	);
};
export default Header;
