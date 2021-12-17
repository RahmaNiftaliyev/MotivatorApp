import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUserByUsername } from '../users/usersSlice';
import { useParams } from 'react-router-dom';
import { Row, Button } from 'reactstrap';

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
      {/* left side*/}
      <div className="containerDevider-left bg-orange">
        <Row className="contact-us px-0">
          {/* !todo section begin */}

          <div class="card-hover-shadow-2x mb-3 card">
            <div class="card-header-tab card-header">
              <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
                &nbsp;Task Lists
              </div>
            </div>
            <div class="scroll-area-sm">
              <div style={{ position: 'static' }} class="ps ps--active-y">
                <div class="ps-content">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                      styles.
                      <div class="todo-indicator bg-warning"></div>
                      <div class="widget-content p-0">
                        <div class="widget-content-wrapper">
                          <div class="widget-content-left mr-2">
                            <div class="custom-checkbox custom-control">
                              <input
                                class="custom-control-input"
                                id="exampleCustomCheckbox12"
                                type="checkbox"
                              />
                              <label
                                class="custom-control-label"
                                for="exampleCustomCheckbox12"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </div>
                          <div class="widget-content-left">
                            <div class="widget-heading">
                              Call Sam For payments
                              <div class="badge badge-danger ml-2">
                                Rejected
                              </div>
                            </div>
                            <div class="widget-subheading">
                              <i>By Bob</i>
                            </div>
                          </div>
                          <div class="widget-content-right"></div>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="todo-indicator bg-focus"></div>
                      <div class="widget-content p-0">
                        <div class="widget-content-wrapper">
                          <div class="widget-content-left mr-2">
                            <div class="custom-checkbox custom-control">
                              <input
                                class="custom-control-input"
                                id="exampleCustomCheckbox1"
                                type="checkbox"
                              />
                              <label
                                class="custom-control-label"
                                for="exampleCustomCheckbox1"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </div>
                          <div class="widget-content-left">
                            <div class="widget-heading">
                              Make payment to Bluedart
                            </div>
                            <div class="widget-subheading">
                              <div>
                                By Johnny
                                <div class="badge badge-pill badge-info ml-2">
                                  NEW
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="widget-content-right"></div>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="todo-indicator bg-primary"></div>
                      <div class="widget-content p-0">
                        <div class="widget-content-wrapper">
                          <div class="widget-content-left mr-2">
                            <div class="custom-checkbox custom-control">
                              <input
                                class="custom-control-input"
                                id="exampleCustomCheckbox4"
                                type="checkbox"
                              />
                              <label
                                class="custom-control-label"
                                for="exampleCustomCheckbox4"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </div>
                          <div class="widget-content-left flex2">
                            <div class="widget-heading">Office rent</div>
                            <div class="widget-subheading">By Samino!</div>
                          </div>
                          <div class="widget-content-right"></div>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="todo-indicator bg-info"></div>
                      <div class="widget-content p-0">
                        <div class="widget-content-wrapper">
                          <div class="widget-content-left mr-2">
                            <div class="custom-checkbox custom-control">
                              <input
                                class="custom-control-input"
                                id="exampleCustomCheckbox2"
                                type="checkbox"
                              />
                              <label
                                class="custom-control-label"
                                for="exampleCustomCheckbox2"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </div>
                          <div class="widget-content-left">
                            <div class="widget-heading">
                              Office grocery shopping
                            </div>
                            <div class="widget-subheading">By Tida</div>
                          </div>
                          <div class="widget-content-right"></div>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="todo-indicator bg-success"></div>
                      <div class="widget-content p-0">
                        <div class="widget-content-wrapper">
                          <div class="widget-content-left mr-2">
                            <div class="custom-checkbox custom-control">
                              <input
                                class="custom-control-input"
                                id="exampleCustomCheckbox3"
                                type="checkbox"
                              />
                              <label
                                class="custom-control-label"
                                for="exampleCustomCheckbox3"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </div>
                          <div class="widget-content-left flex2">
                            <div class="widget-heading">
                              Ask for Lunch to Clients
                            </div>
                            <div class="widget-subheading">By Office Admin</div>
                          </div>
                          <div class="widget-content-right"></div>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="todo-indicator bg-success"></div>
                      <div class="widget-content p-0">
                        <div class="widget-content-wrapper">
                          <div class="widget-content-left mr-2">
                            <div class="custom-checkbox custom-control">
                              <input
                                class="custom-control-input"
                                id="exampleCustomCheckbox10"
                                type="checkbox"
                              />
                              <label
                                class="custom-control-label"
                                for="exampleCustomCheckbox10"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </div>
                          <div class="widget-content-left flex2">
                            <div class="widget-heading">
                              Client Meeting at 11 AM
                            </div>
                            <div class="widget-subheading">By CEO</div>
                          </div>
                          <div class="widget-content-right"></div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-end  card-footer">
              <button class="btn btn-sm">Cancel</button>
              <button class="btn btn-primary">Add Task</button>
            </div>
          </div>
          {/*MUSIC APP SECTION*/}
          <div class="container text-center d-inline-block">
            <div class="filtr-controls text-center lead text-uppercase mb-3">
              <span
                class="active d-inline-block mx-3 py-1 position-relative"
                data-filter="all"
              >
                all{' '}
              </span>
              <span
                class="d-inline-block mx-3 py-1 position-relative"
                data-filter="1"
              >
                RAP
              </span>
              <span
                class="d-inline-block mx-3 py-1 position-relative"
                data-filter="2"
              >
                Blues
              </span>
              <span
                class="d-inline-block mx-3 py-1 position-relative"
                data-filter="3"
              >
                electronic
              </span>
            </div>
          </div>

          {/* !todo section end */}
        </Row>
      </div>
      {/* left side*/}
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
                  <Button color="outline-primary" className="btn-lg px-5 w-100">
                    Following 0
                  </Button>
                </div>
              </div>
              <div className="col-6 col-lg-3 mt-4">
                <div className="count-data text-center">
                  <Button color="outline-primary" className="btn-lg px-5 w-100">
                    Followers 0
                  </Button>
                </div>
              </div>
              <div className="col-6 col-lg-3 mt-4">
                <div className="count-data text-center">
                  <Button color="outline-primary" className="btn-lg px-5 w-100">
                    Daily tasks {dailyTasks}
                  </Button>
                </div>
              </div>
              <div className="col-6 col-lg-3 mt-4">
                <div className="count-data text-center">
                  <Button
                    color="outline-primary"
                    className="btn-lg px-5 w-100 unwrap_content"
                  >
                    Completed tasks {completedTasks}
                  </Button>
                </div>
              </div>
              <div className="col-12 mt-4">
                <Button color="outline-primary" className="btn-lg px-5 w-100">
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
