import React from "react";
import Link from "next/link";

function Navbar() {
	return (
		<div className='sticky top-0 z-50'>
			<nav className='bg-white shadow dark:bg-gray-800'>
				<div className='container px-6 py-3 mx-auto'>
					<div className='md:flex md:items-center md:justify-between'>
						<div className='flex items-center justify-between'>
							<Link href='/'>
								<div className='text-xl font-semibold text-gray-700'>
									<a
										className='text-xl font-bold text-gray-800 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300'
										href='#'>
										Meet the Whytes
									</a>
								</div>
							</Link>
							<div className='flex md:hidden'>
								<button
									type='button'
									className='text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400'
									aria-label='toggle menu'>
									<svg viewBox='0 0 24 24' className='w-6 h-6 fill-current'>
										<path
											fillRule='evenodd'
											d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'></path>
									</svg>
								</button>
							</div>
						</div>

						<div className='flex-1 md:flex md:items-center md:justify-between'>
							<div className='flex flex-col -mx-4 md:flex-row md:items-center md:mx-8'>
								<Link href='/'>
									<a className='px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700'>
										Home
									</a>
								</Link>
								<Link href='/allposts'>
									<a
										href='#'
										className='px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700'>
										All Posts
									</a>
								</Link>
								<a
									href='#'
									className='px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700'>
									Food
								</a>
								<a
									href='#'
									className='px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700'>
									Lifestyle
								</a>
							</div>

							<div className='flex items-center mt-4 md:mt-0'>
								<a
									href='#'
									className='px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700'>
									About
								</a>
								<a
									href='#'
									className='px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700'>
									Contact
								</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
