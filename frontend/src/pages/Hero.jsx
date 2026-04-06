import React, { useEffect, useState } from 'react';
import moment from 'moment';

function Hero() {
    const [post, setPost] = useState(null);

    useEffect(() => {
        const GetPosts = async () => {
            try {
                const res = await fetch("/api/posts");
                const data = await res.json();
                setPost(data[0]);
            } catch (error) {
                console.error("Error fetching post:", error);
            }
        };
        GetPosts();
    }, []);

   if(!post){
    return <h1>loding</h1>
   }

    
   return (
    <section className="relative h-[80vh] w-full overflow-hidden text-white">

        {/* Background Image */}
        <div className="absolute inset-0">
            <img 
                src={post?.image} 
                alt={post?.title} 
                className="h-full w-full object-cover"
            />
        </div>

        {/* Content */}
        <div className="relative flex h-full items-end px-6 pb-12 md:px-12 lg:px-20">
            
            {/* Glass Box 🔥 */}
            <div className="max-w-2xl space-y-4 bg-black/60 backdrop-blur-md p-6 rounded-xl">

                {/* Category */}
                <span className="inline-block rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold uppercase tracking-wider">
                    {post?.category}
                </span>

                {/* Title */}
                <h1 className="text-3xl font-bold leading-snug md:text-5xl">
                    {post?.title}
                </h1>

                {/* Author + Date */}
                <div className="flex items-center gap-3 text-sm text-gray-200">

                    <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-700 font-semibold uppercase">
                            {post?.Author?.fullName?.charAt(0)}
                        </div>
                        <span className="font-medium">
                           By: {post?.Author?.fullName}
                        </span>
                    </div>

                    <span>|</span>

                    <span>
                        {moment(post?.createdAt).format("MMM DD, YYYY")}
                    </span>
                </div>

                {/* Button */}
                <div className="pt-2">
                    <button className="rounded-md bg-white px-5 py-2 text-sm font-medium text-black hover:bg-gray-200 transition">
                        Read More
                    </button>
                </div>

            </div>
        </div>
    </section>
);

    
}

export default Hero;