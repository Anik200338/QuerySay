import { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import Lottie from 'lottie-react';
import faq from '../../public/faq.json';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
  const { logout, user } = useContext(AuthContext);
  const [theme, settheme] = useState(
    () => localStorage.getItem('theme') || 'light'
  );
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  const handleToggle = e => {
    const newTheme = e.target.checked ? 'dark' : 'light';
    settheme(newTheme);
  };

  const navlink = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'font-bold ' : ' ')}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allQueries"
          className={({ isActive }) => (isActive ? 'font-bold ' : '')}
        >
          {' '}
          Queries
        </NavLink>
      </li>

      {user ? (
        <li>
          <NavLink
            to="/Forme"
            className={({ isActive }) => (isActive ? 'font-bold' : '')}
          >
            {' '}
            Recommendations For Me
          </NavLink>
        </li>
      ) : (
        <></>
      )}
      {user ? (
        <li>
          <NavLink
            to="/myQueries"
            className={({ isActive }) => (isActive ? 'font-bold ' : ' ')}
          >
            {' '}
            MyQueries
          </NavLink>
        </li>
      ) : (
        <></>
      )}
      {user ? (
        <li>
          <NavLink
            to="/myreccomendetion"
            className={({ isActive }) => (isActive ? 'font-bold' : '')}
          >
            {' '}
            Myrecommendations
          </NavLink>
        </li>
      ) : (
        <></>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 h-2 shadow-2xl px-4 fixed  z-10 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navlink}
            <Link to="/login">
              <button className="btn btn-sm  btn-ghost text- lg:text-lg font-bold ">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="btn btn-sm  btn-ghost lg:text-lg font-bold ">
                Register
              </button>
            </Link>
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost text-lg lg:text-xl  font-extrabold text-[#1CB5E0]"
        >
          {' '}
          <Lottie animationData={faq} className="h-10 " /> QuerySay
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5 font-semibold">
          {navlink}
        </ul>
      </div>
      <div className="navbar-end">
        <label className="swap swap-rotate lg:pr-5">
          {/* this hidden checkbox controls the state */}
          <input
            onChange={handleToggle}
            type="checkbox"
            className="theme-controller"
            checked={theme === 'dark'}
          />

          {/* sun icon */}
          <svg
            className="swap-off text-info fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-on text-info fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
        {user ? (
          <div
            className="tooltip tooltip-left tooltip-info text-lg font-bold"
            data-tip={user?.displayName || 'user name not found'}
          >
            <button>
              {' '}
              <div className="dropdown dropdown-hover dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-16 rounded-full ">
                    <img
                      src={
                        user?.photoURL ||
                        'https://i.ibb.co/y0yrnYQ/1681283571946.jpg'
                      }
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60"
                >
                  <li>
                    <button className="btn btn-sm  btn-ghost">
                      {user?.email || 'user name not found'}
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={logout}
                      className="btn btn-sm  btn-ghost text-lg font-semibold"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </button>
          </div>
        ) : (
          <>
            <Link to="/login" className=" hidden lg:flex">
              <button className="btn btn-sm  btn-ghost text- lg:text-lg font-bold ">
                Login
              </button>
            </Link>
            <Link to="/register" className="hidden lg:flex">
              <button className="btn btn-sm  btn-ghost lg:text-lg font-bold ">
                Register
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
