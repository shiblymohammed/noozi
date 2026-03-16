import React from 'react';

interface FormTextareaProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  rows?: number;
  error?: string;
  maxLength?: number;
  showCounter?: boolean;
}

const FormTextarea: React.FC<FormTextareaProps> = ({
  name,
  value,
  onChange,
  placeholder,
  rows = 4,
  error,
  maxLength,
  showCounter = false
}) => {
  return (
    <div>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        maxLength={maxLength}
        className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-tango placeholder-tango/40 font-poppins text-sm focus:outline-none focus:bg-white/10 transition-all duration-200 resize-none ${
          error 
            ? 'border-red-500/50 focus:border-red-500' 
            : 'border-white/10 focus:border-beta/50'
        }`}
      />
      <div className="flex justify-between items-center mt-1">
        <div>
          {error && (
            <p className="text-red-400 text-xs font-poppins">{error}</p>
          )}
        </div>
        {showCounter && maxLength && (
          <span className={`text-xs font-poppins ${
            value.length > maxLength * 0.9 
              ? value.length === maxLength 
                ? 'text-red-400' 
                : 'text-yellow-400'
              : 'text-tango/40'
          }`}>
            {value.length}/{maxLength}
          </span>
        )}
      </div>
    </div>
  );
};

export default FormTextarea;