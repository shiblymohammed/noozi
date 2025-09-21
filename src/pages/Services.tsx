import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Our Services
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Comprehensive solutions tailored to meet your business needs and drive growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Service 1 */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Web Development</h3>
            <p className="text-gray-600 mb-6">
              Custom web applications built with modern technologies and best practices for optimal performance and user experience.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• React & TypeScript</li>
              <li>• Responsive Design</li>
              <li>• Performance Optimization</li>
              <li>• SEO Implementation</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Mobile Development</h3>
            <p className="text-gray-600 mb-6">
              Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• React Native</li>
              <li>• iOS & Android</li>
              <li>• Cross-platform Solutions</li>
              <li>• App Store Optimization</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Backend Development</h3>
            <p className="text-gray-600 mb-6">
              Robust and scalable backend solutions with secure APIs and efficient database management.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• RESTful APIs</li>
              <li>• Database Design</li>
              <li>• Cloud Integration</li>
              <li>• Security Implementation</li>
            </ul>
          </div>

          {/* Service 4 */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">UI/UX Design</h3>
            <p className="text-gray-600 mb-6">
              User-centered design solutions that create intuitive and engaging digital experiences.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• User Research</li>
              <li>• Wireframing & Prototyping</li>
              <li>• Visual Design</li>
              <li>• Usability Testing</li>
            </ul>
          </div>

          {/* Service 5 */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Digital Marketing</h3>
            <p className="text-gray-600 mb-6">
              Strategic digital marketing campaigns that drive traffic, engagement, and conversions.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• SEO & SEM</li>
              <li>• Social Media Marketing</li>
              <li>• Content Strategy</li>
              <li>• Analytics & Reporting</li>
            </ul>
          </div>

          {/* Service 6 */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Consulting</h3>
            <p className="text-gray-600 mb-6">
              Expert technology consulting to help you make informed decisions and optimize your digital strategy.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Technology Assessment</li>
              <li>• Strategic Planning</li>
              <li>• Process Optimization</li>
              <li>• Team Training</li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 rounded-lg shadow-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our services can help transform your business.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;