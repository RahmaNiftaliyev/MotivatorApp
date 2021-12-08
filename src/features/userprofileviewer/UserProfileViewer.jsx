import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUserByUsername } from '../users/usersSlice';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
  BsYoutube,
} from 'react-icons/bs';

const UserProfileViewer = () => {
  const { username } = useParams();
  const user = useSelector((state) => selectUserByUsername(state, username));

  const [dailyTasks, setDailyTasks] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);

  let renderedUser;

  if (user.user && user.user.username) {
    renderedUser = <span>{user.user.username}</span>;
  } else {
    renderedUser = <span>Fatal error</span>;
  }

  return (
    <div className="d-flex w-100 h-100 profile_container">
      <nav className="px-4 nav-content d-flex align-items-center justify-content-between">
        <div className="socials-container d-flex align-items-center">
          <div className="icon-container">
            <BsFacebook className="icon-content facebook" />
            <BsInstagram className="icon-content instagram" />
            <BsTwitter className="icon-content twitter" />
            <BsLinkedin className="icon-content linkedn" />
            <BsYoutube className="icon-content youtube" />
          </div>
        </div>
        <h2 className="mt-0">{username}</h2>
      </nav>
      <div className="containerDevider-left bg-orange"></div>
      <div className="containerDevider-right bg-wizard d-flex align-center">
        <section class="section about-section bg-transparent" id="about">
          <div class="container">
            <div class="row align-items-center flex-row-reverse">
              <div class="col-lg-6">
                <div class="about-text go-to">
                  <h3 class="dark-color">About Me</h3>
                  <h6 class="theme-color lead">
                    A Lead UX &amp; UI designer based in Canada
                  </h6>
                  <p className="text-justify">
                    I design and develop services for customers of all sizes,
                    specializing in creating stylish, modern websites, web
                    services and online stores. My passion is to design digital
                    user experiences through the bold interface and meaningful
                    interactions.
                  </p>
                  <div class="row about-list">
                    <div class="col-md-6">
                      <div class="media">
                        <label>Birthday</label>
                        <p>4th april 1998</p>
                      </div>
                      <div class="media">
                        <label>Age</label>
                        <p>22 Yr</p>
                      </div>
                      <div class="media">
                        <label>Residence</label>
                        <p>Canada</p>
                      </div>
                      <div class="media">
                        <label>Address</label>
                        <p>California, USA</p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="media">
                        <label>E-mail</label>
                        <p>info@domain.com</p>
                      </div>
                      <div class="media">
                        <label>Phone</label>
                        <p>820-885-3321</p>
                      </div>
                      <div class="media">
                        <label>Skype</label>
                        <p>skype.0404</p>
                      </div>
                      <div class="media">
                        <label>Freelance</label>
                        <p>Available</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="about-avatar">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    title=""
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-6 col-lg-3 mt-4">
                <div className="count-data text-center">
                  <Button variant="outline-primary" className="px-5 w-100">
                    Following 0
                  </Button>
                </div>
              </div>
              <div className="col-6 col-lg-3 mt-4">
                <div className="count-data text-center">
                  <Button variant="outline-primary" className="px-5 w-100">
                    Followers 0
                  </Button>
                </div>
              </div>
              <div className="col-6 col-lg-3 mt-4">
                <div className="count-data text-center">
                  <Button variant="outline-primary" className="px-5 w-100">
                    Daily tasks {dailyTasks}
                  </Button>
                </div>
              </div>
              <div className="col-6 col-lg-3 mt-4">
                <div className="count-data text-center">
                  <Button variant="outline-primary" className="px-5 w-100">
                    Completed tasks {completedTasks}
                  </Button>
                </div>
              </div>
              <div className="col-12 mt-4">
                <Button variant="outline-primary" className="px-5 w-100">
                  Edit Profile
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserProfileViewer;
