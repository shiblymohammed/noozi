// EmailJS Configuration
// Replace these values with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY', // Replace with your EmailJS public key
};

// Template variables that will be sent to EmailJS
// Make sure your EmailJS template includes these variable names:
// - {{from_name}} - sender's name
// - {{from_email}} - sender's email
// - {{subject}} - email subject
// - {{message}} - email message
// - {{to_name}} - your name/company name (optional)