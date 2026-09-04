
import moment from 'moment';

function Hero({post}) {
   

    
   return (
    <section className="w-full">

  {/* Image Section */}
  <div className="h-[48vh] w-full sm:h-[58vh]">
    <img 
      src={post.image && post.image  } 
      alt={post?.title} 
      className="h-full w-full object-cover opacity-90"
    />
  </div>

  {/* Content Section */}
  <div className="relative z-10 mx-auto -mt-20 max-w-5xl px-5 md:px-12">
    
    <div className="space-y-4 rounded-[1.5rem] border border-white/10 bg-[#f5f7f2] p-6 text-[#17221f] shadow-2xl md:p-8">

      {/* Category */}
      <span className="inline-block rounded-full bg-[#d8eee8] px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#138a78]">
        {post?.category}
      </span>

      {/* Title */}
      <h1 className="text-2xl font-black leading-snug md:text-5xl">
        {post?.title}
      </h1>

      {/* Author + Date */}
      <div className="flex items-center gap-3 text-sm text-[#687871]">

        <span>
          By {post?.Author?.fullName}
        </span>

        <span>|</span>

        <span>
          {moment(post?.createdAt).format("MMM DD, YYYY")}
        </span>
      </div>

      {/* Button */}
      <button className="mt-2 rounded-full bg-[#17221f] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#138a78]">
        Read More
      </button>

    </div>

  </div>

</section>
);

    
}

export default Hero;