import React from "react";
import Link from "next/link";

function Navbar({ fixed }) {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	return (
		<div className='sticky top-0 z-50 border-b bg-white'>
			<nav className='relative flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-3'>
				<div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
					<div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
						<Link href='/'>
							<div className="flex flex-row justify-center align-middle items-center">
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-11 w-11 md:h-8 md:w-8 md:mr-2 fill-current text-pink-500'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z'
									/>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z'
									/>
								</svg>

								<a className='hidden text-base font-bold leading-relaxed md:inline-block mr-4 py-2 whitespace-nowrap uppercase text-black'>
									Meet The Whytes
								</a>
							</div>
						</Link>
						<button
							className='text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
							type='button'
							onClick={() => setNavbarOpen(!navbarOpen)}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M4 6h16M4 12h16M4 18h16'
								/>
							</svg>
						</button>
					</div>
					<div
						className={
							"lg:flex flex-grow items-center" +
							(navbarOpen ? " flex" : " hidden")
						}
						id='example-navbar-danger'>
						<ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
							<li className='nav-item'>
								<a
									className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75'
									href='#pablo'>
									<i className='fab fa-facebook-square text-lg leading-lg text-black opacity-75'></i>
									<span className='ml-2'>Home</span>
								</a>
							</li>
							<li className='nav-item'>
								<Link href='/allposts'>
									<a
										className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75'
										href='#pablo'>
										<i className='fab fa-facebook-square text-lg leading-lg text-black opacity-75'></i>
										<span className='ml-2'>All Posts</span>
									</a>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;

// <nav className='bg-white shadow dark:bg-gray-800'>
// 				<div className='container px-6 py-3 mx-auto'>
// 					<div className='md:flex md:items-center md:justify-between'>
// 						<div className='flex items-center justify-between'>
// 							<Link href='/'>
// 								<div className='text-xl font-semibold text-gray-700'>
// 									<a
// 										className='text-xl font-bold text-gray-800 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300'
// 										href='#'>
// 										Meet the Whytes
// 									</a>
// 								</div>
// 							</Link>
// 							<div className='flex md:hidden'>
// 								<button
// 									type='button'
// 									className='text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400'
// 									aria-label='toggle menu'>
// 									<svg viewBox='0 0 24 24' className='w-6 h-6 fill-current'>
// 										<path
// 											fillRule='evenodd'
// 											d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'></path>
// 									</svg>
// 								</button>
// 							</div>
// 						</div>

// 						<div className='flex-1 md:flex md:items-center md:justify-between'>
// 							<div className='flex flex-col -mx-4 md:flex-row md:items-center md:mx-8'>
// 								<Link href='/'>
// 									<a className='px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700'>
// 										Home
// 									</a>
// 								</Link>
// 								<Link href='/allposts'>
// 									<a
// 										href='#'
// 										className='px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700'>
// 										All Posts
// 									</a>
// 								</Link>
// 								<a
// 									href='#'
// 									className='px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700'>
// 									Food
// 								</a>
// 								<a
// 									href='#'
// 									className='px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700'>
// 									Lifestyle
// 								</a>
// 							</div>

// 							<div className='flex items-center mt-4 md:mt-0'>
// 								<a
// 									href='#'
// 									className='px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700'>
// 									About
// 								</a>
// 								<a
// 									href='#'
// 									className='px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700'>
// 									Contact
// 								</a>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</nav>
