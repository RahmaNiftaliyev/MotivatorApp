import React, { useState } from 'react';
import { selectAllUsers } from './features/users/usersSlice';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SignIn from './features/form/SignIn';
import SignUp from './features/form/SignUp';
import UserProfileViewer from './features/userprofileviewer/UserProfileViewer';
import InformationForm from './features/information/InformationForm';
import Chat from './features/chat/Chat';

const App = () => {
  const isMain = useSelector(selectAllUsers).length > 0 ? true : false;

  return (
    <div>
      <Routes>
        <React.Fragment>
          <Route exact path="/" element={isMain ? <SignIn /> : <SignUp />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/information" element={<InformationForm />} />
          <Route path="/:username" element={<UserProfileViewer />} />
        </React.Fragment>
      </Routes>
    </div>
  );
};

export default App;
