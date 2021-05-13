import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "../components/cover-image";
import Link from "next/link";
import StarRating from "./star-rating";

export default function HeroPost({
	title,
	coverImage,
	date,
	excerpt,
	author,
	slug,
}) {
	return (
		<section className=''>
			<div className='flex flex-col justify-start items-center'>
				<div className='mb-8 md:mb-10 relative'>
					<span class='px-10 py-2 mx-2 my-2  text-base rounded-full text-green-600  bg-green-200 absolute '>
						<StarRating />
					</span>
					<div className=' absolute bottom-0 right-0  mx-2 my-1 '>
						<h3 className='mb-2 md:mb-8 text-xl md:text-4xl font-bold tracking-tighter leading-tight bg-white px-3 py-2'>
							<Link as={`/posts/${slug}`} href='/posts/[slug]'>
								<a className='hover:underline break-all'>{title}</a>
							</Link>
						</h3>
					</div>
					<CoverImage
						slug={slug}
						imageObject={coverImage}
						title={title}
						url={coverImage}
					/>
				</div>
				<div className='md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-16 md:mb-24 '>
					<div>
						<p className='text-lg leading-relaxed mb-2'>{excerpt}</p>
					</div>
				</div>
			</div>
		</section>
	);
}
