import Footer from '../components/Footer';

const Placements = () => {
  const successStories = [
    {
      id: 1,
      name: 'Rajesh Sharma',
      course: 'Strategic Management',
      position: 'Senior Manager',
      company: 'TechCorp Solutions',
      story: 'Rajesh completed our Strategic Management course and was promoted to Senior Manager at his company. The skills he learned helped him lead a team of 15 professionals.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      name: 'Priya Patel',
      course: 'Leadership Excellence',
      position: 'HR Director',
      company: 'Global Enterprises',
      story: 'Priya took our Leadership Excellence course and was promoted to HR Director. She now leads a team of 15 professionals and credits the course for her success.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      name: 'Amit Kumar',
      course: 'Project Management',
      position: 'Operations Head',
      company: 'InnovateX',
      story: 'Amit completed our Project Management course and transitioned from mid-management to Operations Head. The course provided him with essential skills for his new role.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
    }
  ];

  const courseStats = [
    { title: 'Students Enrolled', value: '15,000+', description: 'Learners who have joined our courses' },
    { title: 'Completion Rate', value: '95%', description: 'Students who completed their courses' },
    { title: 'Job Placement', value: '89%', description: 'Students who got jobs after course completion' },
    { title: 'Course Categories', value: '50+', description: 'Different course categories available' }
  ];

  const testimonials = [
    {
      name: 'Sunita Reddy',
      role: 'Course Graduate',
      course: 'Digital Marketing',
      content: 'The course content was exceptional and the instructors were very knowledgeable. I was able to apply the concepts directly to my work and see immediate results.'
    },
    {
      name: 'Vikram Singh',
      role: 'Course Graduate',
      course: 'Financial Management',
      content: 'Outstanding course material and practical exercises. The real-world case studies helped me understand complex financial concepts easily.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="relative h-96 bg-gradient-to-r from-indigo-800 to-emerald-600 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Success Stories</h1>
          <p className="text-xl">Student Achievements & Career Growth</p>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Course Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We take pride in the success of our students and their career growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courseStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl font-bold text-indigo-800 mb-2">{stat.value}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{stat.title}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Student Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from students who transformed their careers through our courses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <div key={story.id} className="bg-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={story.image} 
                  alt={story.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{story.name}</h3>
                  <p className="text-emerald-600 font-medium mb-1">Completed: {story.course}</p>
                  <p className="text-gray-700 font-medium mb-2">{story.position} at {story.company}</p>
                  <p className="text-gray-600">{story.story}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Student Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What our students say about our courses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="text-yellow-400 text-2xl mb-4">
                  {'★'.repeat(5)}
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}, {testimonial.course}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Process */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Learning Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive approach to ensure successful learning outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Course Selection', desc: 'Choose the right course for your goals' },
              { step: 2, title: 'Enrollment', desc: 'Complete the enrollment process' },
              { step: 3, title: 'Learning', desc: 'Engage with course content and activities' },
              { step: 4, title: 'Certification', desc: 'Complete course and earn certificate' }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-indigo-800 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Course Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer courses across diverse professional fields
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Management', desc: 'Strategic planning, leadership, and business management' },
              { name: 'Leadership', desc: 'Develop essential leadership and communication skills' },
              { name: 'Marketing', desc: 'Digital marketing, branding, and customer engagement' },
              { name: 'Finance', desc: 'Financial planning, investment, and analysis' },
              { name: 'HR Management', desc: 'Human resources, recruitment, and employee relations' },
              { name: 'Project Management', desc: 'Project planning, execution, and delivery' }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.name}</h3>
                <p className="text-gray-600">{category.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Placements;