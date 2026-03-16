import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle } from 'lucide-react';

interface StatusMessageProps {
  status: 'success' | 'error';
  message: string;
}

const StatusMessage: React.FC<StatusMessageProps> = ({ status, message }) => {
  const isSuccess = status === 'success';
  
  return (
    <motion.div
      className={`mb-6 p-4 border rounded-lg flex items-center gap-3 ${
        isSuccess 
          ? 'bg-green-500/10 border-green-500/20' 
          : 'bg-red-500/10 border-red-500/20'
      }`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {isSuccess ? (
        <CheckCircle className="w-5 h-5 text-green-400" />
      ) : (
        <AlertCircle className="w-5 h-5 text-red-400" />
      )}
      <span className={`font-poppins text-sm ${
        isSuccess ? 'text-green-400' : 'text-red-400'
      }`}>
        {message}
      </span>
    </motion.div>
  );
};

export default StatusMessage;