import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { useContext } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';

const SocialLogin = () => {
  const { googleLogin, githubLogin } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state || '/';

  const handleSocialLogin = async socialProvider => {
    try {
      const result = await socialProvider();
      const { data } = await axios.post(
        'https://assignment-11-server-pink-eight.vercel.app/jwt',
        {
          email: result?.user?.email,
        },
        { withCredentials: true }
      );
      data;
      if (result.user) {
        toast.success('Login successful!');
        navigate(from);
      } else {
        toast.error('Social login failed. Please try again.'); // Display error message
      }
    } catch (error) {
      toast.error('An error occurred during social login.'); // Display error message
    }
  };
  return (
    <>
      <div className="divider"> continue with</div>
      <div className="flex  flex-col justify-center gap-5">
        <button
          onClick={() => handleSocialLogin(googleLogin)}
          className="btn   rounded-full btn-outline text-lg"
        >
          <FcGoogle className="text-2xl" />{' '}
        </button>
        <button
          onClick={() => handleSocialLogin(githubLogin)}
          className="btn  btn-outline rounded-full text-lg"
        >
          <FaGithub className="text-2xl" />{' '}
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
