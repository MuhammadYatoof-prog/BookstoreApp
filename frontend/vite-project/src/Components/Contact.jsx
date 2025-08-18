import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Contact() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Contact Form Data:', data);
    // Add API call or toast here
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-white p-8 rounded-lg shadow-lg relative">
        {/* ✕ Close Button inside modal */}
        <button
          onClick={() => navigate('/')}
          className="absolute top-4 right-4 text-gray-400 hover:text-pink-500 text-xl font-bold"
          aria-label="Close"
        >
          ✕
        </button>

        <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center">Contact Us</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-black mb-1">Name</label>
            <input
              type="text"
              placeholder="Your name"
              {...register('name', { required: 'Name is required' })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black bg-white"
            />
            {errors.name && (
              <span className="text-sm text-red-600">{errors.name.message}</span>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-black mb-1">Email</label>
            <input
              type="email"
              placeholder="Your email"
              {...register('email', { required: 'Email is required' })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black bg-white"
            />
            {errors.email && (
              <span className="text-sm text-red-600">{errors.email.message}</span>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-black mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="Your message"
              {...register('message', { required: 'Message is required' })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black bg-white resize-none"
            ></textarea>
            {errors.message && (
              <span className="text-sm text-red-600">{errors.message.message}</span>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition duration-200"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
