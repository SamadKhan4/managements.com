import { useState } from 'react';
import ScrollAnimation from '../components/ScrollAnimation';
import Footer from '../components/Footer';

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const courseCategories = [
    { id: 'all', name: 'All Courses' },
    { id: 'management', name: 'Management' },
    { id: 'leadership', name: 'Leadership' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'finance', name: 'Finance' },
    { id: 'hr', name: 'HR Management' }
  ];

  const courses = [
    {
      id: 1,
      title: 'Strategic Management',
      category: 'management',
      instructor: 'Dr. Sarah Johnson',
      duration: '12 weeks',
      level: 'Advanced',
      rating: 4.8,
      students: 1250,
      price: 299,
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      description: 'Master strategic planning and implementation techniques for business success.',
      tags: ['Strategy', 'Planning', 'Leadership']
    },
    {
      id: 2,
      title: 'Leadership Excellence',
      category: 'leadership',
      instructor: 'Prof. Michael Chen',
      duration: '8 weeks',
      level: 'Intermediate',
      rating: 4.9,
      students: 980,
      price: 249,
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      description: 'Develop essential leadership skills for modern business environments.',
      tags: ['Leadership', 'Communication', 'Team Management']
    },
    {
      id: 3,
      title: 'Digital Marketing Mastery',
      category: 'marketing',
      instructor: 'Emma Rodriguez',
      duration: '10 weeks',
      level: 'Beginner',
      rating: 4.7,
      students: 1500,
      price: 199,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      description: 'Comprehensive digital marketing strategies for the modern era.',
      tags: ['SEO', 'Social Media', 'Content Marketing']
    },
    {
      id: 4,
      title: 'Financial Management',
      category: 'finance',
      instructor: 'Dr. Robert Williams',
      duration: '14 weeks',
      level: 'Advanced',
      rating: 4.6,
      students: 870,
      price: 349,
      image: 'https://images.unsplash.com/photo-1444723121867-6a1df62530cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      description: 'Advanced financial planning and management techniques.',
      tags: ['Finance', 'Investment', 'Analysis']
    },
    {
      id: 5,
      title: 'HR Management Essentials',
      category: 'hr',
      instructor: 'Dr. Lisa Anderson',
      duration: '6 weeks',
      level: 'Beginner',
      rating: 4.8,
      students: 1100,
      price: 179,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      description: 'Essential HR management skills for modern workplaces.',
      tags: ['HR', 'Recruitment', 'Employee Relations']
    },
    {
      id: 6,
      title: 'Project Management',
      category: 'management',
      instructor: 'James Wilson',
      duration: '9 weeks',
      level: 'Intermediate',
      rating: 4.7,
      students: 1320,
      price: 229,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      description: 'Master project planning, execution, and delivery techniques.',
      tags: ['Project Management', 'Planning', 'Execution']
    }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  const handleEnroll = (courseId) => {
    if (!enrolledCourses.includes(courseId)) {
      setEnrolledCourses([...enrolledCourses, courseId]);
      alert('Successfully enrolled in the course!');
    }
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>★</span>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <ScrollAnimation>
        <div className="relative h-96 bg-gradient-to-r from-indigo-800 to-emerald-600 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Our Courses</h1>
            <p className="text-xl">Expand Your Knowledge with Expert-Led Courses</p>
          </div>
        </div>
      </ScrollAnimation>

      {/* Course Categories */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Explore Our Course Categories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from a wide range of expertly designed courses to advance your career
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {courseCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-colors duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-indigo-800 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </ScrollAnimation>

          {/* Course Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <ScrollAnimation key={course.id} animation="fade-up" delay={index * 100}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                        {course.level}
                      </span>
                      <div className="text-yellow-400 text-sm">
                        {renderStars(Math.floor(course.rating))}
                        <span className="text-gray-600 ml-1">({course.rating})</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-3">{course.description}</p>
                    
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <span className="font-medium">Instructor:</span> {course.instructor}
                    </div>
                    
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex space-x-2">
                        {course.tags.slice(0, 2).map((tag, index) => (
                          <span key={index} className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-600">{course.duration}</span>
                      <span className="text-gray-600">{course.students} students</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-indigo-800">${course.price}</span>
                      <button 
                        onClick={() => handleEnroll(course.id)}
                        disabled={enrolledCourses.includes(course.id)}
                        className={`px-6 py-2 rounded-lg font-medium transition-colors duration-300 ${
                          enrolledCourses.includes(course.id)
                            ? 'bg-green-600 text-white cursor-not-allowed'
                            : 'bg-indigo-800 hover:bg-indigo-900 text-white'
                        }`}
                      >
                        {enrolledCourses.includes(course.id) ? 'Enrolled' : 'Enroll Now'}
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Courses</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our most popular and highly-rated courses chosen by thousands of students
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.slice(0, 3).map((course, index) => (
              <ScrollAnimation key={course.id} animation="fade-up" delay={index * 150}>
                <div key={course.id} className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 ${index === 1 ? 'transform -translate-y-4' : ''}`}>
                  <div className="text-center">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-40 object-cover rounded-lg mb-6"
                    />
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    <div className="flex justify-center items-center mb-4">
                      <div className="text-yellow-400 mr-2">
                        {renderStars(Math.floor(course.rating))}
                      </div>
                      <span className="text-gray-600">({course.rating})</span>
                    </div>
                    <button 
                      onClick={() => handleEnroll(course.id)}
                      disabled={enrolledCourses.includes(course.id)}
                      className={`w-full py-3 rounded-lg font-medium transition-colors duration-300 ${
                        enrolledCourses.includes(course.id)
                          ? 'bg-green-600 text-white cursor-not-allowed'
                          : 'bg-indigo-800 hover:bg-indigo-900 text-white'
                      }`}
                    >
                      {enrolledCourses.includes(course.id) ? 'Enrolled' : 'Start Learning'}
                    </button>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Courses?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide the highest quality education with industry experts and practical learning
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{ title: 'Expert Instructors', desc: 'Learn from industry professionals with real-world experience' },
              { title: 'Flexible Learning', desc: 'Study at your own pace with 24/7 access' },
              { title: 'Certification', desc: 'Earn certificates to boost your career' },
              { title: 'Career Support', desc: 'Get career guidance and job placement assistance' }
            ].map((feature, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-800 text-2xl font-bold mx-auto mb-6">✓</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;