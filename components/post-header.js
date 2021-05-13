import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";
import { imageBuilder } from "../lib/sanity";
import StarRating from "./star-rating";
export default function PostHeader({ title, coverImage, date, author }) {
	return (
		<>
			<PostTitle>{title}</PostTitle>
			<div className=' block mb-2 text-lg'>
				<StarRating />
			</div>
      <div className='max-w-2xl mx-auto'>
      <div className=' text-gray-500 block  md:hidden mb-2 text-lg'>
      Review date:	<Date dateString={date} />
      </div>
    </div>
      <div className='max-w-2xl mx-auto'>
      <div className=' text-gray-500 block  md:hidden mb-6 text-lg'>
     Location:	San Francisco
      </div>
    </div>
			<div className='block md:mb-12'>
				<Avatar name={author?.name} picture={author?.picture} />
			</div>
			<div className=' hidden  md:block mb-6 text-lg'>
				<Date dateString={date} />
			</div>

			<div className='mb-8 md:mb-16 -mx-5 sm:mx-0'>
				<CoverImage title={title} imageObject={coverImage} url={coverImage} />
			</div>
		
		</>
	);
}
