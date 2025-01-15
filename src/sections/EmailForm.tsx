import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const EmailForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const [isSent, setIsSent] = useState(false);

  const onSubmit = async (data: FormValues) => {
    try {
      await emailjs.send(
        'service_izxgolt',
        'template_2r8i3sa',
        data,
        'MukNuw5w6dCT3y3ZM'
      );
      setIsSent(true);
      reset();
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-slate-300 mb-2 font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register('name', { required: 'Name is required' })}
          className="w-full p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 
            text-slate-100 placeholder-slate-500
            focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
            transition-colors duration-300"
          placeholder="Your name"
        />
        {errors.name && (
          <span className="text-red-400 text-sm mt-1">
            {errors.name.message}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-slate-300 mb-2 font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register('email', { 
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Please enter a valid email'
            }
          })}
          className="w-full p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 
            text-slate-100 placeholder-slate-500
            focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
            transition-colors duration-300"
          placeholder="your.email@example.com"
        />
        {errors.email && (
          <span className="text-red-400 text-sm mt-1">
            {errors.email.message}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-slate-300 mb-2 font-medium">
          Message
        </label>
        <textarea
          id="message"
          {...register('message', { required: 'Message is required' })}
          rows={4}
          className="w-full p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 
            text-slate-100 placeholder-slate-500
            focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
            transition-colors duration-300"
          placeholder="Your message here..."
        />
        {errors.message && (
          <span className="text-red-400 text-sm mt-1">
            {errors.message.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        className="w-full py-3 px-6 rounded-lg bg-blue-600 text-white 
          hover:bg-blue-700 active:bg-blue-800
          transition-colors duration-300"
      >
        Send Message
      </button>

      {isSent && (
        <p className="text-emerald-400 text-center font-medium">
          Message sent successfully!
        </p>
      )}
    </form>
  );
};

export default EmailForm;
