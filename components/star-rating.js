import React from "react";
import { render } from "react-dom";
import { Heart } from "./icons";
import Stars from "./stars";

const StarRating = ({ratingOverall, ratingLocation, ratingCleanliness,ratingService, ratingValue}) => {

	const hearts = 3;
	const maxHearts = 3;
	let textRating = " "

	// const heartIcons = Array(maxHearts)
	// 	.fill()
	// 	.map((_, index) => {
	// 		return <Heart key={index} />;
	// 	});
	switch (Math.floor(ratingOverall)) {
		case 1:
			textRating ="Meh"
			break;
		case 2:
			textRating ="Ok"
			break;
		case 3:
			textRating ="Good"
			break;
		case 4:
			textRating ="Great"
			break;
		case 5:
			textRating ="Awesome"
			break;
	
		default:
			textRating ="Hmmmm"
			break;
	}

	return (
		<>  
        <div className="flex flex-col md:flex-row border-b "> 
			<div className='flex  justify-start items-center align-top mb-8 md:border-r '>
				<h1 className='text-6xl md:text-7xl lg:text-7xl font-bold tracking-tighter leading-tight md:leading-none mb-2 md:text-left'>
					{ratingOverall}
				</h1>

				<div className='flex flex-col-reverse ml-3 align-top justify-start '>
					<div className='flex flex-row justify-start align-middle   items-start '>
						<Stars stars={Math.floor(ratingOverall)} />
					</div>
					<p className='mx-1 text-xl font-bold'> {textRating}</p>
				</div>
			</div>


          
			<div className='md:my-5 md:ml-6 pb-4'>
				<div className='flex flex-row'>
					<Stars stars={ratingLocation} />
					<p className='mx-6'>Location</p>
				</div>
				<div className='flex flex-row'>
					<Stars stars={ratingCleanliness} />
					<p className='mx-6'>Cleanliness</p>
				</div>
				<div className='flex flex-row'>
					<Stars stars={ratingService} />
					<p className='mx-6'>Service</p>
				</div>
				<div className='flex flex-row'>
					<Stars stars={ratingValue} />
					<p className='mx-6'>Value</p>
				</div>

                </div>
			</div>
		</>
	);
};

export default StarRating;

//   <svg class="mx-1 w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
//   <svg class="mx-1 w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
//   <svg class="mx-1 w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
//   <svg class="mx-1 w-4 h-4 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
