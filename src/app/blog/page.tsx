import BlogItem from '../_components/blogItem/page'

export default function Blog() {
  return (
    <main className="flex flex-wrap gap-4 w-full justify-between">
      {[1, 2, 3, 4, 5, 6].map((item) => {
        return <BlogItem key={item} />
      })}
    </main>
  )
}
