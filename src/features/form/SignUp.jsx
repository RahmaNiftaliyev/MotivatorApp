import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllUsers, addUsers } from './../users/usersSlice';
import { useNavigate } from 'react-router-dom';
import { unwrapResult } from '@reduxjs/toolkit';
import alertify from 'alertifyjs';

const SignUp = () => {
  const users = useSelector(selectAllUsers);

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);

  let isActive = [email, username, password, checked].every(Boolean);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    if (email && username && password) {
      try {
        const result = dispatch(
          addUsers({
            email,
            username,
            password,
          }),
        );
        const response = unwrapResult(result);
        alertify.success(`welcome to motivator ${username}!`);
        navigate(`/${username}`);
      } catch (err) {
        throw new Error(err);
      } finally {
        setEmail('');
        setUsername('');
        setPassword('');
      }
    }
    e.preventDefault();
  };

  return (
    <div>
      <div className="d-flex">
        <div className="containerDevider-left bg-signIn d-flex  flex-column align-items-center">
          <h1>Welcome To Motivator&nbsp;&#127947;</h1>
          <div className="slide-in-blurred-top vertical-centerer d-flex flex-column justify-content-center align-items-center">
            <form className="contact-us">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <p className="mt-5 text-muted d-flex">
                <input
                  type="checkbox"
                  id="i"
                  checked={checked}
                  onChange={() => {
                    setChecked(!checked);
                  }}
                />

                <label htmlFor="i" className="checkbox">
                  <div className="checkbox__inner">
                    <div className="green__ball"></div>
                  </div>
                </label>
                <div className="checkbox__text ps-3">
                  Creating an account means you’re okay with our{' '}
                  <Link to="/">Terms of Service</Link> , <br />
                  <Link to="/">Privacy Policy</Link>, and our default
                  <Link to="/"> Notification Settings.</Link>
                </div>
              </p>

              <button
                type="button"
                onClick={submitHandler}
                disabled={!isActive}
              >
                CREATE ACCOUNT
              </button>

              <div className="p-4 text-center">
                <Link to="/">Already have an account?</Link>
              </div>
            </form>
          </div>
        </div>

        {/*    --- PAGE IMAGE ---    */}
        <div className="containerDevider-right  signInImg"></div>
      </div>
    </div>
  );
};

export default SignUp;
