import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Hero from './Hero'
import GridPost from './GridPost'
import Footer from './Footer'

function Home() {
  const [post, setPost] = useState(null)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const GetPosts = async () => {
      try {
        const res = await fetch('/api/posts')
        const data = await res.json()
        setPost(data[0])
        setPosts(data)
      } catch (error) {
        console.error('Error fetching post:', error.message)
      }
    }

    GetPosts()
  }, [])

  if (!posts || posts.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f5f7f2] px-4">
        <div className="text-center text-[#52635d]">
          <p className="text-lg font-medium">Loading latest stories...</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <main className="bg-[#f5f7f2] text-[#17221f]">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          <div className="overflow-hidden rounded-[2rem] bg-[#17221f] shadow-[0_24px_80px_rgba(23,34,31,0.16)]">
            <Hero post={post} />

            <section className="px-4 py-10 sm:px-8 lg:px-12 lg:py-12">
              <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#58c9b4]">Recent Posts</p>
                  <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Fresh stories from our blog</h2>
                </div>
                <Link
                  to="/blogs"
                  className="inline-flex items-center justify-center rounded-full bg-[#e4a15a] px-6 py-3 text-sm font-bold text-[#17221f] transition hover:bg-[#f0b878]"
                >
                  Explore all posts
                </Link>
              </div>

              <div className="rounded-[2rem] bg-[#f5f7f2] p-5 shadow-inner shadow-black/10">
                <GridPost isHome posts={posts} />
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Home
