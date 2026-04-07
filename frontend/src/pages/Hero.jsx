
import moment from 'moment';

function Hero({post}) {
   

    
   return (
    <section className="w-full ">

  {/* Image Section */}
  <div className="w-full h-[60vh]">
    <img 
      src={post.image && post.image  } 
      alt={post?.title} 
      className="w-full h-full object-cover rounded-lg shadow-lg"
    />
  </div>

  {/* Content Section */}
  <div className="max-w-5xl mx-auto px-6 md:px-12 -mt-20 relative z-10">
    
    <div className="bg-white text-black p-6 md:p-8 rounded-xl shadow-lg space-y-4">

      {/* Category */}
      <span className="inline-block text-3xl">
      :  {post?.category}
      </span>

      {/* Title */}
      <h1 className="text-2xl md:text-4xl font-bold leading-snug">
        {post?.title}
      </h1>

      {/* Author + Date */}
      <div className="flex items-center gap-3 text-sm text-gray-600">

        <span>
          By {post?.Author?.fullName}
        </span>

        <span>|</span>

        <span>
          {moment(post?.createdAt).format("MMM DD, YYYY")}
        </span>
      </div>

      {/* Button */}
      <button className="mt-2 bg-black text-white px-5 py-2 text-sm rounded hover:bg-gray-800 transition">
        Read More
      </button>

    </div>

  </div>

</section>
);

    
}

export default Hero;