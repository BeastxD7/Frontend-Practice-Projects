export default function Card({ id, username, title, content }) {
    return (
      <article className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-blue-500/20 hover:shadow-2xl transition-all duration-300 ease-in-out border border-gray-700/50">
        <div className="p-6">
          {/* Title */}
          <h2 className="text-2xl font-bold text-white mb-2 hover:text-blue-400 transition-colors line-clamp-2">
            {title}
          </h2>
          
          {/* Author */}
          <div className="flex items-center mb-4">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center">
              <span className="text-white text-sm font-medium">
                {username.charAt(0).toUpperCase()}
              </span>
            </div>
            <span className="ml-2 text-sm text-gray-400">
              By <span className="font-medium text-blue-300">{username}</span>
            </span>
          </div>
  
          {/* Content */}
          <div 
            className="text-gray-300 overflow-hidden text-ellipsis max-h-[4.5rem] opacity-80"
            dangerouslySetInnerHTML={{ __html: content }}
          />
  
          {/* Read More Link */}
          <div className="mt-4">
            <button className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors group">
              Read More
              <svg
                className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </article>
    );
  }