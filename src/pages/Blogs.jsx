import Footer from '../components/Footer';

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Online Learning: Trends to Watch in 2024',
      excerpt: 'Exploring the latest trends in online education and how they are shaping the future of learning.',
      date: 'January 15, 2024',
      author: 'Dr. Sarah Johnson',
      category: 'Education Trends',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'How to Choose the Right Course for Your Career Goals',
      excerpt: 'Learn proven strategies to select courses that align with your professional objectives.',
      date: 'January 10, 2024',
      author: 'Michael Chen',
      category: 'Career Guidance',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Building a Strong Professional Portfolio',
      excerpt: 'Discover how to create a compelling portfolio that showcases your skills and achievements.',
      date: 'January 5, 2024',
      author: 'Emma Rodriguez',
      category: 'Professional Development',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'The Art of Effective Learning: Best Practices',
      excerpt: 'Essential tips for maximizing your learning efficiency and retention.',
      date: 'December 28, 2023',
      author: 'Robert Williams',
      category: 'Learning Tips',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      title: 'Remote Work: Skills That Matter Most',
      excerpt: 'How to develop the skills needed to succeed in remote work environments.',
      date: 'December 20, 2023',
      author: 'Lisa Anderson',
      category: 'Remote Work',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      title: 'Digital Marketing in the AI Era',
      excerpt: 'Understanding how artificial intelligence is changing the digital marketing landscape.',
      date: 'December 15, 2023',
      author: 'James Wilson',
      category: 'Marketing',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1451187580459-401b681d5e8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const categories = [
    'All Posts',
    'Education Trends',
    'Career Guidance',
    'Professional Development',
    'Learning Tips',
    'Remote Work',
    'Marketing'
  ];

  const recentPosts = blogPosts.slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="relative h-96 bg-primary flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Insights & Articles</h1>
          <p className="text-xl">Educational Knowledge & Industry Insights</p>
        </div>
      </div>

      {/* Blog Content */}
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Category Filter */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className={`px-4 py-2 rounded-full text-sm font-medium ${
                        index === 0
                          ? 'bg-indigo-800 text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Blog Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs font-medium">
                          {post.category}
                        </span>
                        <span className="mx-2">•</span>
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-indigo-800 cursor-pointer">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">By {post.author}</span>
                        <button className="text-indigo-800 hover:text-indigo-900 font-medium text-sm">
                          Read More →
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-12">
                <button className="bg-indigo-800 hover:bg-indigo-900 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300">
                  Load More Articles
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Search */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Search Articles</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.slice(1).map((category, index) => (
                    <li key={index}>
                      <button className="flex justify-between items-center w-full text-left py-2 hover:text-indigo-800">
                        <span>{category}</span>
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                          {index + 1}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="flex items-start">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-16 h-16 object-cover rounded-lg mr-4"
                      />
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm hover:text-indigo-800 cursor-pointer">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-primary to-emerald-600 rounded-xl shadow-lg p-6 mt-8 text-white">
                <h3 className="text-lg font-bold mb-2">Subscribe to Our Newsletter</h3>
                <p className="text-sm mb-4 opacity-90">
                  Get the latest educational insights and course updates delivered to your inbox.
                </p>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button className="absolute right-2 top-2 bg-white text-indigo-800 px-4 py-1 rounded text-sm font-medium">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blogs;