import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userinfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const response = await axios.post('http://localhost:4001/user/login', userinfo);
      if (response.data) {
        toast.success('Login successfully!');
        document.getElementById('my_modal_3').close()
        setTimeout(() => {
          window.location.reload();
          localStorage.setItem('user', JSON.stringify(response.data));

        }, 3000);
        navigate('/');
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
        setTimeout(() => { }, 3000);
      }
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box px-5 py-6 max-w-sm mx-auto relative">
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3"
            onClick={() => document.getElementById('my_modal_3').close()}

          >
            ✕
          </button>

          <h3 className="font-bold text-xl text-center mb-4">Login</h3>

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label mb-1">
                <span className="label-text text-xl font-medium text-gray-700">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input-bordered border border-gray-500 rounded-md w-full text-sm px-3 py-2"
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-sm text-red-600">Email is required</span>}
            </div>

            <div className="form-control">
              <label className="label mb-1">
                <span className="label-text text-xl font-medium text-gray-700">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input-bordered border border-gray-500 w-full rounded-md text-sm px-3 py-2"
                {...register("password", { required: true })}
              />
              {errors.password && <span className="text-sm text-red-600">Password is required</span>}
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="btn btn-sm bg-pink-500 text-white hover:bg-pink-700 duration-200 px-4"
              >
                Login
              </button>
            </div>
          </form>

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
