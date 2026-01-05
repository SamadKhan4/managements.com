const ClientLogos = () => {
  const clients = [
    { name: 'Roca', logo: '/src/assets/images/client/logo-roca-white.webp' },
    { name: 'Serviie', logo: '/src/assets/images/client/logo-servile-white.webp' },
    { name: 'Creative Plastics', logo: '/src/assets/images/client/logo-creative-plastics-white.webp' },
    { name: 'Tea Trails', logo: '/src/assets/images/client/logo-teatrails-white.webp' },
    { name: 'UltraTech', logo: '/src/assets/images/client/logo-ultratech-white.webp' },
    { name: 'Owens', logo: '/src/assets/images/client/logo-owens-white.webp' },
    { name: 'Bharat', logo: '/src/assets/images/client/logo-bharat-white.webp' },
    { name: 'Cambay', logo: '/src/assets/images/client/logo-cambay-white.webp' },
    { name: 'Healthtotal', logo: '/src/assets/images/client/logo-healthtotal-white.webp' },
    { name: 'Heinz', logo: '/src/assets/images/client/logo-heinz-white.webp' },
    { name: 'Nilkamal', logo: '/src/assets/images/client/logo-nilkamal-white.webp' },
    { name: 'Nova', logo: '/src/assets/images/client/logo-nova-white.webp' },
    { name: 'Oasis', logo: '/src/assets/images/client/logo-oasis-white.webp' },
    { name: 'Oneleph', logo: '/src/assets/images/client/logo-oneleph-white.webp' },
    { name: 'Puneet', logo: '/src/assets/images/client/logo-puneet-white.webp' },
    { name: 'Sahayak Trust', logo: '/src/assets/images/client/logo-sahayak-trust-white.webp' },
    { name: 'Shree Renuka', logo: '/src/assets/images/client/logo-shree-renuka-white.webp' },
    { name: 'Urbanetek', logo: '/src/assets/images/client/logo-urbanetek-white.webp' },
    { name: 'Vora Ceramics', logo: '/src/assets/images/client/logo-vora-ceramics-white.webp' },
    { name: 'Westcoast', logo: '/src/assets/images/client/logo-westcoast-white.webp' },
  ];

  // Duplicate the clients array to create a continuous marquee effect
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-8xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Esteemed Learning Partners
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're proud to partner with industry leaders who trust our expertise in education
          </p>
        </div>
        
        <div className="overflow-hidden py-9">
          <div className="flex animate-marquee whitespace-nowrap">
            {duplicatedClients.map((client, index) => (
              <div 
                key={index} 
                className="flex justify-center items-center opacity-80 hover:opacity-200 transition-all duration-400 hover:scale-500 mx-12 flex-shrink-0 p-4"
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-400 max-h-18"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;