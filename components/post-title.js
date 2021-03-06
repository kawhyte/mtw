export default function PostTitle({ children }) {
  return (
    <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-5 md:text-left">
      {children}
    </h1>
  )
}
