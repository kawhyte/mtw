import React from "react";
import { render } from "react-dom";
import { Heart } from "./icons";

const StarRating = () => {
	const hearts = 3;
	const maxHearts = 3;

	const heartIcons = Array(maxHearts)
		.fill()
		.map((_, index) => {
			return <Heart key={index} />;
		});

	return (
		<div class='flex  justify-start items-center align-top '>

        <h1 className="text-4xl md:text-7xl lg:text-7xl font-bold tracking-tighter leading-tight md:leading-none mb-2 md:text-left">3.5</h1>
		
        <div className="flex flex-col-reverse ml-3 align-top justify-start "> 
        <div class='flex flex-row justify-start align-middle   items-start '>
				{[...Array(maxHearts)].fill().map((_, index) => {
					return (
						<>
							<svg
								class='mx-0.5 w-6 h-6 fill-current text-yellow-500'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 20 20'>
								<path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
							</svg>
						</>
					);
				})}{" "}
				
			</div>
            <p className='mx-1 text-xl font-bold'> Good</p>
		</div>
        </div>
	);
};

export default StarRating;

//   <svg class="mx-1 w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
//   <svg class="mx-1 w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
//   <svg class="mx-1 w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
//   <svg class="mx-1 w-4 h-4 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
