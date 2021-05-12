import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import Link from 'next/link'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="mb-8 md:mb-10">
        <CoverImage slug={slug} imageObject={coverImage} title={title} url={coverImage} />
      </div>
      <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-16 md:mb-24">
        <div className="">
          <h3 className="mb-8 text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
        
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-2">{excerpt}</p>
        
        </div>
      </div>
    </section>
  )
}
