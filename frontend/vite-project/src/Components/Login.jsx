import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Login Data:', data);
    document.getElementById('my_modal_3').close(); // Optional: close modal on submit
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box px-5 py-6 max-w-sm mx-auto relative">
          {/* Close Button */}
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3"
            onClick={() => document.getElementById('my_modal_3').close()}
          >
            ✕
          </button>

          {/* Modal Content */}
          <h3 className="font-bold text-xl text-center mb-4">Login</h3>

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {/* Email Input */}
            <div className="form-control">
              <label className="label mb-1">
                <span className="label-text text-xl font-medium text-gray-700">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className=" input-bordered  border border-gray-500  rounded-md w-full text-sm px-3 py-2"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-600">Email is required</span>
              )}
            </div>

            {/* Password Input */}
            <div className="form-control">
              <label className="label mb-1">
                <span className="label-text text-xl font-medium text-gray-700">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input-bordered border border-gray-500 w-full rounded-md  text-sm px-3 py-2"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-sm text-red-600">Password is required</span>
              )}
            </div>

            {/* Login Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="btn btn-sm bg-pink-500 text-white hover:bg-pink-700 duration-200 px-4"
              >
                Login
              </button>
            </div>
          </form>

          {/* Sign Up Prompt */}
          <p className="text-sm text-center mt-4">
            Not registered yet?{' '}
            <Link to="/signup" className="text-pink-500 font-semibold hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
