import React from "react";

function Hero() {
	return (
		<div>
			<section className='text-gray-600 body-font'>
				<div className='container mx-auto flex px-5 py-24 items-center justify-center flex-col'>
					<img
						className='lg:w-5/6 md:w-4/6 w-5/6 mb-10 object-cover object-center rounded'
						alt='hero'
						src='https://images.pexels.com/photos/1154638/pexels-photo-1154638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
					/>
					<div className='text-center lg:w-2/3 w-full'>
						<h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
							Hello.{" "}
						</h1>
						<p className='mb-8 leading-relaxed'>
							{" "}
							Hi, We're a Husband 👖 and wife 👗 duo.We love to travel & Eat new
							food
						</p>
						<div className='flex justify-center'>
							<button className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
								Blog
							</button>
							<button className='ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg'>
								Photos
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Hero;

{
	/* <div>
<h1>
  Hi, We're a Husband 👖 and wife 👗 duo. We love to travel & Eat new food<span className="fancy">.</span>
</h1>
<span className="handle">@nextjs-netlify-blog</span>
<h2>A blog template with Next.js and Netlify.</h2>
<SocialList />
</div> */
}
