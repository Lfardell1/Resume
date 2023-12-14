import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import EmailForm from './EmailForm';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data); // Replace with your actual submission logic
  };

  return (
    <EmailForm />
  );
};

export default contact;
