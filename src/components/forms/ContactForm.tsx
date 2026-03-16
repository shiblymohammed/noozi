import React from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import FormInput from './FormInput';
import FormTextarea from './FormTextarea';
import type { FormData, FormErrors } from '../../hooks/useContactForm';

interface ContactFormProps {
  formRef: React.RefObject<HTMLFormElement | null>;
  formData: FormData;
  errors: FormErrors;
  isSubmitting: boolean;
  submitStatus: 'idle' | 'success' | 'error';
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({
  formRef,
  formData,
  errors,
  isSubmitting,
  submitStatus,
  onInputChange,
  onSubmit
}) => {
  return (
    <motion.form
      ref={formRef}
      onSubmit={onSubmit}
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormInput
          name="name"
          value={formData.name}
          onChange={onInputChange}
          placeholder="Your Name"
          error={errors.name}
          maxLength={50}
          showCounter={true}
        />
        <FormInput
          type="email"
          name="email"
          value={formData.email}
          onChange={onInputChange}
          placeholder="Email Address"
          error={errors.email}
          maxLength={254}
          showCounter={true}
        />
      </div>
      
      <FormInput
        name="subject"
        value={formData.subject}
        onChange={onInputChange}
        placeholder="Subject"
        error={errors.subject}
        maxLength={100}
        showCounter={true}
      />
      
      <FormTextarea
        name="message"
        value={formData.message}
        onChange={onInputChange}
        placeholder="Tell us about your project..."
        error={errors.message}
        maxLength={1000}
        showCounter={true}
      />

      <motion.button
        type="submit"
        disabled={isSubmitting || submitStatus === 'success'}
        className={`w-full mt-6 flex items-center justify-center gap-2 font-poppins font-medium text-sm px-6 py-3 rounded-lg shadow-lg transition-all duration-200 group ${
          isSubmitting || submitStatus === 'success'
            ? 'bg-gray-500 cursor-not-allowed'
            : 'bg-beta hover:bg-beta/90 hover:shadow-beta/40'
        } text-white shadow-beta/25`}
        whileHover={isSubmitting || submitStatus === 'success' ? {} : { scale: 1.02 }}
        whileTap={isSubmitting || submitStatus === 'success' ? {} : { scale: 0.98 }}
      >
        {isSubmitting ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : submitStatus === 'success' ? (
          <>
            <CheckCircle className="w-4 h-4" />
            Sent Successfully!
          </>
        ) : (
          <>
            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            Send Message
          </>
        )}
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;