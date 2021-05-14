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
					<span className='flex  flex-row-reverse px-3 py-2 mx-2 my-2  text-base rounded-full text-green-600  bg-green-200 absolute '>
						<p className=' ml-2 '> MTW Approved</p>

						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
						<path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
					  </svg>
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
