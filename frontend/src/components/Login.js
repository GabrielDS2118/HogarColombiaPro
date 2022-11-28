import React from 'react';
import Axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getError } from '../utils';
import { HouseContext } from './HouseContext';

const Login = () => {
  const { user, setUser } = useContext(HouseContext);

  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    try {
      const { data } = await Axios.post(
        'http://localhost:5000/api/users/sigin',
        {
          email,
          password,
        }
      );
      localStorage.setItem('userInfo', JSON.stringify(data));
      setUser(data);
      console.log(user);
      navigate(redirect || '/');
    } catch (err) {
      // toast.error('Hola');
      alert(err.response.data.message);
      console.log(err.response.data.message);
    }
  };

  useEffect(() => {
    if (user) {
      navigate(redirect);
    }
  }, [navigate, redirect, user]);

  return (
    <div className="w-screen h-3/4 flex justify-center items-center">
      <form className=" w-96 h-96" onSubmit={submitHandler}>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
        </div>
        <div class="flex items-center justify-between">
          <button
            className="border border-violet-700 text-violet-700 hover:border-purple-600 hover:text-purple-600 rounded p-4 text-sm w-full transition"
            type="submit"
          >
            Sign In
          </button>
          {/* <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a> */}
        </div>
      </form>
    </div>
  );
};

export default Login;
