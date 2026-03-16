import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';
import { validateField, sanitizeInput, VALIDATION_RULES } from '../utils/validation';

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const useContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [lastSubmitTime, setLastSubmitTime] = useState<number>(0);

  // Rate limiting: prevent submissions within 30 seconds
  const RATE_LIMIT_MS = 30000;

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validate each field using the utility function
    Object.keys(formData).forEach(fieldName => {
      const error = validateField(fieldName, formData[fieldName as keyof FormData]);
      if (error) {
        newErrors[fieldName as keyof FormErrors] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Sanitize and apply character limits during typing
    let processedValue = sanitizeInput(value);
    const maxLength = VALIDATION_RULES[name as keyof typeof VALIDATION_RULES]?.maxLength;
    
    if (maxLength && processedValue.length > maxLength) {
      processedValue = processedValue.slice(0, maxLength);
    }

    setFormData(prev => ({
      ...prev,
      [name]: processedValue
    }));

    // Real-time validation for better UX
    if (errors[name as keyof FormErrors]) {
      const error = validateField(name, processedValue);
      if (!error) {
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors[name as keyof FormErrors];
          return newErrors;
        });
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Rate limiting check
    const now = Date.now();
    if (now - lastSubmitTime < RATE_LIMIT_MS) {
      setErrors({ message: `Please wait ${Math.ceil((RATE_LIMIT_MS - (now - lastSubmitTime)) / 1000)} seconds before submitting again` });
      return;
    }
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

      if (!formRef.current) {
        throw new Error('Form reference not found');
      }

      await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        formRef.current,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setSubmitStatus('success');
      setLastSubmitTime(now);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setErrors({});
    setSubmitStatus('idle');
  };

  return {
    formRef,
    formData,
    errors,
    isSubmitting,
    submitStatus,
    handleInputChange,
    handleSubmit,
    resetForm
  };
};