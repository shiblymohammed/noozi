import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <motion.div
      className="space-y-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="flex items-center gap-3 text-tango/70 hover:text-tango transition-colors duration-200 cursor-pointer">
        <div className="p-2 rounded-lg bg-beta/10 border border-beta/20">
          <Mail className="w-4 h-4 text-beta" />
        </div>
        <span className="font-poppins text-sm">nooziproductions@gmail.com</span>
      </div>
      
      <div className="flex items-center gap-3 text-tango/70 hover:text-tango transition-colors duration-200 cursor-pointer">
        <div className="p-2 rounded-lg bg-beta/10 border border-beta/20">
          <Phone className="w-4 h-4 text-beta" />
        </div>
        <span className="font-poppins text-sm">+91 62827 63376</span>
      </div>
      
      <div className="flex items-center gap-3 text-tango/70 hover:text-tango transition-colors duration-200 cursor-pointer">
        <div className="p-2 rounded-lg bg-beta/10 border border-beta/20">
          <MapPin className="w-4 h-4 text-beta" />
        </div>
        <span className="font-poppins text-sm">Kozhikode, Kerala, India</span>
      </div>
    </motion.div>
  );
};

export default ContactInfo;