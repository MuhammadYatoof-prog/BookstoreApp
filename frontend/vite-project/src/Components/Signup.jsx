import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Login from './login';
import axios from 'axios';
import toast from 'react-hot-toast';
function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userinfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
      confirmpassword: data.confirmPassword,
    };

    try {
      const response = await axios.post('http://localhost:4001/user/signup', userinfo);
      if (response.data) {
        toast.success('Signup successfully!');
        navigate('/');

        localStorage.setItem('user', JSON.stringify(response.data.user)); // ✅ Store as string
      }
    } catch (error) {
      if (error.response) {

        toast.error(error.response.data.message);}
    }
  };

  // You can add signup logic here (e.g., API call)
  // Redirect after signup


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 relative">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md relative">
        {/* ✕ Close Button */}
        <button
          onClick={() => navigate('/')}
          className="absolute top-4 right-4 text-gray-400 hover:text-pink-500 text-xl font-bold"
          aria-label="Close"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-center mb-6 text-pink-600">Sign Up</h2>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your fullname"
              {...register('fullname', { required: 'Name is required' })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-900"
            />
            {errors.fullname && (
              <span className="text-sm text-red-600">{errors.fullname.message}</span>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register('email', { required: 'Email is required' })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-900"
            />
            {errors.email && (
              <span className="text-sm text-red-600">{errors.email.message}</span>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              {...register('password', { required: 'Password is required' })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-900"
            />
            {errors.password && (
              <span className="text-sm text-red-600">{errors.password.message}</span>
            )}
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              {...register('confirmPassword', {
                required: 'Please confirm your password',
              })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-900"
            />
            {errors.confirmPassword && (
              <span className="text-sm text-red-600">{errors.confirmPassword.message}</span>
            )}
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition duration-200"
          >
            Sign Up
          </button>
        </form>

        {/* Already Registered */}
        <p className="text-sm text-center mt-4">
          Already have an account?{' '}
          <button
            className="text-pink-500 font-semibold hover:underline"
            onClick={() => document.getElementById('my_modal_3')?.showModal()}
          >
            Login
          </button>
        </p>

        {/* Login Modal */}
        <Login />
      </div>
    </div>
  );
}

export default Signup;
