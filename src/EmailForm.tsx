import React, { useState } from 'react';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
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
      const templateParams = {
        name: data.name,
        email: data.email,
        message: data.message,
      };

      const response: EmailJSResponseStatus = await emailjs.send(
        'service_izxgolt',
        'template_2r8i3sa',
        templateParams,
        'MukNuw5w6dCT3y3ZM'
      );

      console.log('Email sent successfully:', response);
      setIsSent(true);
      reset(); // Clear form fields
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className="font-Cousine">
        
      <h1 className="text-3xl mt-4 text-gray-300 text-center">Get In Touch With Me</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-8">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-300">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Name is required' })}
            className="w-full p-2 mt-1 rounded-lg bg-gray-900 text-gray-300"
          />
          {errors.name && <span className="text-red-500">{errors.name.message}</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register('email', { required: 'Email is required', pattern: /^\S+@\S+$/i })}
            className="w-full p-2 mt-1 rounded-lg bg-gray-900 text-gray-300"
          />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            {...register('message', { required: 'Message is required' })}
            rows={4}
            className="w-full p-2 mt-1 rounded-lg bg-gray-900 text-gray-300"
          />
          {errors.message && <span className="text-red-500">{errors.message.message}</span>}
        </div>
        <button
          type="submit"
          className="bg-gray-500 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-600"
        >
          Submit
        </button>
        {isSent && <p className="mt-4 text-green-500">Email sent successfully!</p>}
      </form>
    </div>
  );
};

export default EmailForm;
