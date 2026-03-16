import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from '../components/forms/ContactForm';
import StatusMessage from '../components/forms/StatusMessage';
import { useContactForm } from '../hooks/useContactForm';

const Contact: React.FC = () => {
  const {
    formRef,
    formData,
    errors,
    isSubmitting,
    submitStatus,
    handleInputChange,
    handleSubmit,
  } = useContactForm();

  return (
    <div className="min-h-screen bg-alpha overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-4 md:px-8 py-20 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, #248a61 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
            animate={{
              backgroundPosition: ['0px 0px', '50px 50px'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-block text-zigma text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Get In Touch
            </motion.span>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-tango mb-6 font-barlow leading-tight">
              Let's Talk
            </h1>
            
            <p className="text-lg md:text-xl text-tango/70 max-w-2xl mx-auto leading-relaxed font-poppins">
              Ready to bring your vision to life? We'd love to hear about your project 
              and discuss how we can help you create compelling video content.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative px-4 md:px-8 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Left Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative bg-beta/5 border border-beta/10 rounded-3xl p-6 md:p-8 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-beta/5 via-transparent to-zigma/5 pointer-events-none rounded-3xl" />
              
              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-bold text-tango mb-2 font-barlow">
                  Send us a Message
                </h2>
                <p className="text-tango/60 text-sm md:text-base font-poppins mb-6">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <StatusMessage 
                    status="success" 
                    message="Message sent successfully! We'll get back to you soon." 
                  />
                )}
                
                {submitStatus === 'error' && (
                  <StatusMessage 
                    status="error" 
                    message="Failed to send message. Please try again or contact us directly." 
                  />
                )}

                {/* Contact Form */}
                <ContactForm
                  formRef={formRef}
                  formData={formData}
                  errors={errors}
                  isSubmitting={isSubmitting}
                  submitStatus={submitStatus}
                  onInputChange={handleInputChange}
                  onSubmit={handleSubmit}
                />
              </div>
            </motion.div>

            {/* Right Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Contact Details */}
              <div className="bg-beta/5 border border-beta/10 rounded-3xl p-6 md:p-8 backdrop-blur-sm">
                <h3 className="text-xl md:text-2xl font-bold text-tango mb-6 font-barlow">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  {/* Email */}
                  <a 
                    href="mailto:nooziproductions@gmail.com"
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-beta/10 border border-beta/20 flex items-center justify-center group-hover:bg-beta/20 transition-all duration-300">
                      <Mail className="w-5 h-5 text-beta" />
                    </div>
                    <div>
                      <p className="text-sm text-tango/50 uppercase tracking-wider mb-1 font-poppins">Email</p>
                      <p className="text-tango group-hover:text-beta transition-colors font-poppins">
                        nooziproductions@gmail.com
                      </p>
                    </div>
                  </a>

                  {/* Phone */}
                  <a 
                    href="tel:+919495885632"
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-beta/10 border border-beta/20 flex items-center justify-center group-hover:bg-beta/20 transition-all duration-300">
                      <Phone className="w-5 h-5 text-beta" />
                    </div>
                    <div>
                      <p className="text-sm text-tango/50 uppercase tracking-wider mb-1 font-poppins">Phone</p>
                      <p className="text-tango group-hover:text-beta transition-colors font-poppins">
                        +91 94958 85632
                      </p>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-beta/10 border border-beta/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-beta" />
                    </div>
                    <div>
                      <p className="text-sm text-tango/50 uppercase tracking-wider mb-1 font-poppins">Location</p>
                      <p className="text-tango font-poppins">
                        Kozhikode, Kerala, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-beta/5 border border-beta/10 rounded-3xl p-6 md:p-8 backdrop-blur-sm">
                <h3 className="text-xl md:text-2xl font-bold text-tango mb-6 font-barlow">
                  Quick Connect
                </h3>
                
                <div className="space-y-4">
                  <a
                    href="https://wa.me/919495885632?text=Hello!%20I%20would%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-beta text-alpha rounded-full font-semibold text-sm uppercase tracking-wider hover:bg-beta/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    WhatsApp Us
                  </a>

                  <a
                    href="tel:+919495885632"
                    className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-transparent border-2 border-beta text-beta rounded-full font-semibold text-sm uppercase tracking-wider hover:bg-beta hover:text-alpha transition-all duration-300 hover:scale-105"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-beta/5 border border-beta/10 rounded-3xl p-6 md:p-8 backdrop-blur-sm">
                <h3 className="text-xl md:text-2xl font-bold text-tango mb-4 font-barlow">
                  Business Hours
                </h3>
                <div className="space-y-2 text-sm font-poppins">
                  <div className="flex justify-between">
                    <span className="text-tango/60">Monday - Friday</span>
                    <span className="text-tango">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-tango/60">Saturday</span>
                    <span className="text-tango">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-tango/60">Sunday</span>
                    <span className="text-tango/50">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
