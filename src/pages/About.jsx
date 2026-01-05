import { useState } from 'react';
import ScrollAnimation from '../components/ScrollAnimation';
import Footer from '../components/Footer';

const About = () => {
  const [activeTab, setActiveTab] = useState('vision');

  const values = [
    { title: 'Excellence', description: 'We maintain excellence in all our courses and learning experiences.' },
    { title: 'Innovation', description: 'We continuously innovate to provide the best learning methods.' },
    { title: 'Accessibility', description: 'We make quality education accessible to everyone.' },
    { title: 'Growth', description: 'We foster personal and professional growth for all learners.' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <ScrollAnimation>
        <div className="relative h-96 bg-gradient-to-r from-indigo-800 to-emerald-600 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl">Elite Learning Academy - Your Educational Partner</p>
          </div>
        </div>
      </ScrollAnimation>

      {/* Welcome Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Welcome to Elite Learning Academy</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Founded in 2011, Elite Learning Academy has evolved into a premier educational institution, 
                specializing in providing high-quality courses that bridge the gap between academic knowledge and practical skills.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollAnimation animation="fade-left">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Elite Learning Academy" 
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </ScrollAnimation>
            </div>
            <div>
              <ScrollAnimation animation="fade-right">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Academy Story</h3>
                  <p className="text-gray-600 mb-6">
                    With over a decade of experience in education, we've built a reputation for excellence, 
                    innovation, and unmatched learning experiences. Our journey began with a simple mission: to provide 
                    quality education that empowers individuals to achieve their professional goals.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Today, we continue to innovate and adapt to the ever-changing landscape of education, 
                    staying ahead of trends and maintaining our position as industry leaders.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Enhancement Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Learning Enhancement</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're committed to helping professionals advance their careers through quality education
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollAnimation animation="fade-up" delay={100}>
              <div className="bg-gray-50 p-8 rounded-xl text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-800 text-2xl font-bold mx-auto mb-6">1</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Skill Development</h3>
                <p className="text-gray-600">Comprehensive training and development programs to enhance professional skills</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={200}>
              <div className="bg-gray-50 p-8 rounded-xl text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-800 text-2xl font-bold mx-auto mb-6">2</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Instruction</h3>
                <p className="text-gray-600">Learn from industry experts with real-world experience</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={300}>
              <div className="bg-gray-50 p-8 rounded-xl text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-800 text-2xl font-bold mx-auto mb-6">3</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Career Growth</h3>
                <p className="text-gray-600">Strategic learning paths that align with career goals</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Vision & Mission Tabs */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision & Mission</h2>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="flex justify-center mb-8">
              <div className="bg-gray-200 rounded-lg p-1 flex">
                <button
                  className={`px-6 py-3 rounded-lg transition-colors duration-300 ${
                    activeTab === 'vision' 
                      ? 'bg-indigo-800 text-white' 
                      : 'text-gray-700 hover:bg-gray-300'
                  }`}
                  onClick={() => setActiveTab('vision')}
                >
                  Our Vision
                </button>
                <button
                  className={`px-6 py-3 rounded-lg transition-colors duration-300 ${
                    activeTab === 'mission' 
                      ? 'bg-indigo-800 text-white' 
                      : 'text-gray-700 hover:bg-gray-300'
                  }`}
                  onClick={() => setActiveTab('mission')}
                >
                  Our Mission
                </button>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="bg-white rounded-xl shadow-lg p-8">
              {activeTab === 'vision' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                  <p className="text-gray-600 text-lg">
                    To be the leading educational institution that transforms potential into success, 
                    fostering meaningful learning experiences that empower individuals to achieve their career goals.
                  </p>
                </div>
              )}
              {activeTab === 'mission' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-600 text-lg">
                    To provide comprehensive, personalized educational experiences that create value for learners, 
                    helping them develop the skills and knowledge needed to succeed in their chosen fields.
                  </p>
                </div>
              )}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Learning Process Diagram */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Learning Process</h2>
              <p className="text-xl text-gray-600">Our comprehensive 6-step approach to successful learning</p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { step: 1, title: 'Assessment', desc: 'Understanding your learning needs' },
              { step: 2, title: 'Course Selection', desc: 'Choosing the right course for you' },
              { step: 3, title: 'Enrollment', desc: 'Getting started with your learning journey' },
              { step: 4, title: 'Learning', desc: 'Engaging with course materials' },
              { step: 5, title: 'Practice', desc: 'Applying concepts through projects' },
              { step: 6, title: 'Certification', desc: 'Earning your certificate of completion' }
            ].map((item, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-12 h-12 bg-indigo-800 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide our educational approach and interactions
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
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

export default About;