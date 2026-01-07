import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would submit the form data to a server
    alert('Message sent successfully! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      content: '+91 9958913539',
      description: 'Mon-Fri from 9:00 AM to 6:00 PM'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'shikhag@elitemanagement.in',
      description: 'We will respond within 24 hours'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Office',
      content: 'New Delhi',
      description: 'India'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Working Hours',
      content: '9:00 AM - 6:00 PM',
      description: 'Monday to Friday'
    }
  ];

  return (
    <div className="min-h-screen bg-muted">
      {/* Hero Banner */}
      <ScrollAnimation>
        <div className="relative h-96 bg-primary flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4 text-primary-foreground">Contact Us</h1>
            <p className="text-xl text-primary-foreground">Get in Touch with Our Team</p>
          </div>
        </div>
      </ScrollAnimation>

      {/* Contact Content */}
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">Contact Us</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Have questions about our courses? Get in touch with our team and we'll be happy to assist you.
              </p>
            </div>
          </ScrollAnimation>
                
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <ScrollAnimation>
                <h2 className="text-3xl font-bold text-foreground mb-8">Get in Touch</h2>
              </ScrollAnimation>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
                    <div key={index} className="flex items-start">
                      <div className="bg-primary/20 text-primary p-3 rounded-lg mr-4">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{info.title}</h3>
                        <p className="text-muted-foreground font-medium">{info.content}</p>
                        <p className="text-muted-foreground/70 text-sm">{info.description}</p>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>

              {/* Map Placeholder */}
              <ScrollAnimation>
                <div className="bg-muted rounded-xl h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Map Location</p>
                    <p className="text-muted-foreground/70 text-sm">New Delhi, India</p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            {/* Contact Form */}
            <div>
              <ScrollAnimation>
                <div className="bg-card rounded-xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-foreground mb-6">Send us a Message</h2>
                  <p className="text-muted-foreground mb-8">
                    Have any questions about our courses or need assistance? Fill out the form below and our team will get back to you as soon as possible.
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-foreground font-medium mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-foreground font-medium mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent"
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-foreground font-medium mb-2">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div>
                        <label className="block text-foreground font-medium mb-2">Subject</label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent"
                          placeholder="Enter subject"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-foreground font-medium mb-2">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows="6"
                        className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent"
                        placeholder="Enter your message here..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 px-6 rounded-lg text-lg transition-colors duration-300"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </ScrollAnimation>

              {/* Quick Contact */}
              <ScrollAnimation>
                <div className="mt-8 bg-primary rounded-xl shadow-lg p-6 text-primary-foreground">
                  <h3 className="text-xl font-bold mb-4">Need Immediate Assistance?</h3>
                  <p className="mb-4">Call us directly for urgent inquiries</p>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-2" />
                    <span className="text-lg font-bold">+91 9958913539</span>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;