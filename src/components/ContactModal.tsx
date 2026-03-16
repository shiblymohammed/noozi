import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import ContactForm from './forms/ContactForm';
import ContactInfo from './ContactInfo';
import StatusMessage from './forms/StatusMessage';
import { useContactForm } from '../hooks/useContactForm';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const {
    formRef,
    formData,
    errors,
    isSubmitting,
    submitStatus,
    handleInputChange,
    handleSubmit,
    resetForm
  } = useContactForm();

  const handleClose = () => {
    resetForm();
    onClose();
  };

  // Auto close modal after successful submission
  useEffect(() => {
    if (submitStatus === 'success') {
      const timer = setTimeout(() => {
        handleClose();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative w-full max-w-lg bg-alpha/95 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 300,
                duration: 0.4 
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-beta/10 via-transparent to-zigma/5 pointer-events-none" />
              
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 group"
              >
                <X className="w-5 h-5 text-tango/70 group-hover:text-tango transition-colors" />
              </button>

              {/* Header */}
              <div className="relative p-8 pb-6">
                <motion.h2
                  className="text-2xl md:text-3xl font-paytone text-tango mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                >
                  Let's Talk
                </motion.h2>
                <motion.p
                  className="text-tango/60 text-sm font-poppins"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  Ready to bring your vision to life? Get in touch with us.
                </motion.p>
              </div>

              {/* Content */}
              <div className="relative px-8 pb-8">
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

                {/* Divider */}
                <motion.div
                  className="flex items-center gap-4 my-6"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <span className="text-tango/40 text-xs font-poppins uppercase tracking-wider">or</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </motion.div>

                {/* Contact Info */}
                <ContactInfo />
              </div>

              {/* Bottom Glow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-beta/30 to-transparent" />
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;