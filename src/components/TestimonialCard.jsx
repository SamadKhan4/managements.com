const TestimonialCard = ({ name, role, company, rating, content }) => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>★</span>
    ));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
      <div className="text-center">
        <div className="text-2xl mb-4">
          {renderStars(rating)}
        </div>
        <p className="text-gray-600 italic mb-6">"{content}"</p>
        <div className="border-t pt-6">
          <h4 className="font-bold text-gray-900">{name}</h4>
          <p className="text-gray-600 text-sm">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;