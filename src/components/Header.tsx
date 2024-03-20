import Link from 'next/link';

const Header = () => {
	return (
		<div className='w-full absolute text-white z-10'>
			<nav className='container flex flex-wrap items-center justify-between mx-auto p-8'>
				<Link className='font-bold text-3xl' href='/'>
					Home
				</Link>
				<div className='space-x-4 text-xl'>
					<Link href='/performance'>Perf</Link>
					<Link href='/reliability'>Rel</Link>
					<Link href='/scale'>Scale</Link>
				</div>
			</nav>
		</div>
	);
};
export default Header;
