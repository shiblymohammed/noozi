// Validation utility functions and constants

export const VALIDATION_RULES = {
  name: {
    minLength: 2,
    maxLength: 50,
    pattern: /^[a-zA-Z\s'-]+$/,
    message: {
      required: 'Name is required',
      minLength: 'Name must be at least 2 characters',
      maxLength: 'Name must be less than 50 characters',
      pattern: 'Name can only contain letters, spaces, hyphens, and apostrophes'
    }
  },
  email: {
    maxLength: 254,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    usernameMaxLength: 64,
    domainMaxLength: 253,
    message: {
      required: 'Email is required',
      maxLength: 'Email address is too long',
      pattern: 'Please enter a valid email address',
      usernameLength: 'Email username is too long',
      domainLength: 'Email domain is too long'
    }
  },
  subject: {
    minLength: 3,
    maxLength: 100,
    message: {
      required: 'Subject is required',
      minLength: 'Subject must be at least 3 characters',
      maxLength: 'Subject must be less than 100 characters'
    }
  },
  message: {
    minLength: 10,
    maxLength: 1000,
    message: {
      required: 'Message is required',
      minLength: 'Message must be at least 10 characters',
      maxLength: 'Message must be less than 1000 characters'
    }
  }
};

// Sanitize input to prevent XSS
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .trim();
};

// Check for suspicious patterns (basic spam detection)
export const containsSuspiciousContent = (text: string): boolean => {
  const suspiciousPatterns = [
    /https?:\/\/[^\s]+/gi, // URLs (might be spam)
    /\b(viagra|casino|lottery|winner|congratulations)\b/gi, // Common spam words
    /(.)\1{10,}/gi, // Repeated characters (like aaaaaaaaaa)
    /[^\w\s@.-]/gi // Special characters beyond normal punctuation
  ];
  
  return suspiciousPatterns.some(pattern => pattern.test(text));
};

// Validate individual fields
export const validateField = (name: string, value: string): string | undefined => {
  const sanitizedValue = sanitizeInput(value);
  
  switch (name) {
    case 'name':
      if (!sanitizedValue) return VALIDATION_RULES.name.message.required;
      if (sanitizedValue.length < VALIDATION_RULES.name.minLength) 
        return VALIDATION_RULES.name.message.minLength;
      if (sanitizedValue.length > VALIDATION_RULES.name.maxLength) 
        return VALIDATION_RULES.name.message.maxLength;
      if (!VALIDATION_RULES.name.pattern.test(sanitizedValue)) 
        return VALIDATION_RULES.name.message.pattern;
      break;
      
    case 'email':
      if (!sanitizedValue) return VALIDATION_RULES.email.message.required;
      if (sanitizedValue.length > VALIDATION_RULES.email.maxLength) 
        return VALIDATION_RULES.email.message.maxLength;
      if (!VALIDATION_RULES.email.pattern.test(sanitizedValue)) 
        return VALIDATION_RULES.email.message.pattern;
      
      const emailParts = sanitizedValue.split('@');
      if (emailParts[0]?.length > VALIDATION_RULES.email.usernameMaxLength) 
        return VALIDATION_RULES.email.message.usernameLength;
      if (emailParts[1]?.length > VALIDATION_RULES.email.domainMaxLength) 
        return VALIDATION_RULES.email.message.domainLength;
      break;
      
    case 'subject':
      if (!sanitizedValue) return VALIDATION_RULES.subject.message.required;
      if (sanitizedValue.length < VALIDATION_RULES.subject.minLength) 
        return VALIDATION_RULES.subject.message.minLength;
      if (sanitizedValue.length > VALIDATION_RULES.subject.maxLength) 
        return VALIDATION_RULES.subject.message.maxLength;
      if (containsSuspiciousContent(sanitizedValue)) 
        return 'Subject contains invalid content';
      break;
      
    case 'message':
      if (!sanitizedValue) return VALIDATION_RULES.message.message.required;
      if (sanitizedValue.length < VALIDATION_RULES.message.minLength) 
        return VALIDATION_RULES.message.message.minLength;
      if (sanitizedValue.length > VALIDATION_RULES.message.maxLength) 
        return VALIDATION_RULES.message.message.maxLength;
      if (containsSuspiciousContent(sanitizedValue)) 
        return 'Message contains invalid content';
      break;
  }
  
  return undefined;
};