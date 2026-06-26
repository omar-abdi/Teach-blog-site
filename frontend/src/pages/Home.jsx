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
      <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
        <div className="text-center text-slate-200">
          <p className="text-lg font-medium">Loading latest stories...</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <main className="bg-slate-950 text-slate-100">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] bg-slate-900/80 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl">
            <Hero post={post} />

            <section className="px-4 py-10 sm:px-8 lg:px-12 lg:py-12">
              <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-sky-400">Recent Posts</p>
                  <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Fresh stories from our blog</h2>
                </div>
                <Link
                  to="/blogs"
                  className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
                >
                  Explore all posts
                </Link>
              </div>

              <div className="rounded-[2rem] bg-slate-950/90 p-5 shadow-inner shadow-black/10 ring-1 ring-white/5">
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
