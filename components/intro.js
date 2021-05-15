import { CMS_NAME, CMS_URL } from '../lib/constants'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="hidden md:block text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
       MTW.
      </h1>
      <h1 className="md:hidden text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
       Meet The Whytes.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Our journey in discovering and reviewing Food, Hotels and interesting items.
      </h4>
    </section>
  )
}
