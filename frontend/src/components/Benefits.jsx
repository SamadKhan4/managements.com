import ScrollAnimation from './ScrollAnimation';

const Benefits = () => {
  const benefits = [
    {
      icon: '🎓',
      title: 'Certification',
      description: 'Earn industry-recognized certificates upon completion',
      color: 'bg-indigo-100 text-indigo-800'
    },
    {
      icon: '⏰',
      title: 'Flexible Learning',
      description: 'Study at your own pace with 24/7 access',
      color: 'bg-emerald-100 text-emerald-800'
    },
    {
      icon: '💰',
      title: 'Career Growth',
      description: 'Enhance your career prospects with new skills',
      color: 'bg-indigo-100 text-indigo-800'
    },
    {
      icon: '📍',
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with real experience',
      color: 'bg-emerald-100 text-emerald-800'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Learn With Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive learning solutions that make the educational journey seamless and effective
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <div 
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover-lift"
              >
                <div className={`${benefit.color} w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-6`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;