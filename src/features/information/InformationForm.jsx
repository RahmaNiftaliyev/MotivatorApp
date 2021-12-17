import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAllUsers, selectUserByUsername } from '../users/usersSlice';
import { Navigate, Routes, Route } from 'react-router-dom';
import {
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
} from 'reactstrap';
import styles from './information.module.css';

const InformationForm = () => {
  const users = useSelector(selectAllUsers);
  const { username } = useParams();
  const activatedUser = useSelector((state) =>
    selectUserByUsername(state, username),
  );

  return (
    <div className="bg-wizard">
      <Row>
        <Col xs="2" className="p-0 m-0">
          <aside className={`${styles.aside} bg-wizard `}>
            <nav id="sidebar">
              <div className="user-avatar d-flex justify-content-center ">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  width="180"
                />
              </div>
              <div className="p-4">
                <h1 className="d-flex justify-content-center w-100">
                  <a href="index.html" className="logo">
                    Bio
                  </a>
                </h1>
                <ul className="list-unstyled components mb-5">
                  <li className="bioLinks py-2">
                    <a href="#">
                      <span className="fa fa-home mr-3"></span> Home
                    </a>
                  </li>
                  <li className="bioLinks py-2">
                    <a href="#">
                      <span className="fa fa-user mr-3"></span> About
                    </a>
                  </li>
                  <li className="bioLinks py-2">
                    <a href="#">
                      <span className="fa fa-briefcase mr-3"></span> Works
                    </a>
                  </li>
                  <li className="bioLinks py-2">
                    <a href="#">
                      <span className="fa fa-sticky-note mr-3"></span> Blog
                    </a>
                  </li>
                  <li className="bioLinks py-2">
                    <a href="#">
                      <span className="fa fa-suitcase mr-3"></span> Gallery
                    </a>
                  </li>
                  <li className="bioLinks py-2">
                    <a href="#">
                      <span className="fa fa-cogs mr-3"></span> Services
                    </a>
                  </li>
                  <li className="bioLinks py-2">
                    <a href="#">
                      <span className="fa fa-paper-plane mr-3"></span> Contacts
                    </a>
                  </li>
                </ul>
                <div className="mb-5">
                  <form action="#" className="subscribe-form">
                    <div className="form-group d-flex">
                     <button className="bioSubmit w-100">Save</button>
                    </div>
                  </form>
                </div>
                <div className="footer"></div>
              </div>
            </nav>
          </aside>
        </Col>
        <Col xs="10" className="p-0 m-0">
          <main className={`${styles.main} bg-orange`}>

            <div className="bootstrap_calendar">
<div className="container mt-0 py-5">

  <header className="text-center text-white mb-5">
    <h1 className="display-1">Bootstrap Calendar</h1>
  </header>



  <div className="calendar shadow bg-white p-5">
    <div className="d-flex align-items-center"><i className="fa fa-calendar fa-3x mr-3"></i>
      <h2 className="month font-weight-bold mb-0 text-uppercase">December 2019</h2>
    </div>
    <p className="font-italic text-muted mb-5">No events for this day.</p>
    <ol className="day-names list-unstyled">
      <li className="font-weight-bold text-uppercase">Sun</li>
      <li className="font-weight-bold text-uppercase">Mon</li>
      <li className="font-weight-bold text-uppercase">Tue</li>
      <li className="font-weight-bold text-uppercase">Wed</li>
      <li className="font-weight-bold text-uppercase">Thu</li>
      <li className="font-weight-bold text-uppercase">Fri</li>
      <li className="font-weight-bold text-uppercase">Sat</li>
    </ol>

    <ol className="days list-unstyled">
      <li>
        <div className="date">1</div>
        <div className="event bg-success">Event with Long Name</div>
      </li>
      <li>
        <div className="date">2</div>
      </li>
      <li>
        <div className="date">3</div>
      </li>
      <li>
        <div className="date">4</div>
      </li>
      <li>
        <div className="date">5</div>
      </li>
      <li>
        <div className="date">6</div>
      </li>
      <li>
        <div className="date">7</div>
      </li>
      <li>
        <div className="date">8</div>
      </li>
      <li>
        <div className="date">9</div>
      </li>
      <li>
        <div className="date">10</div>
      </li>
      <li>
        <div className="date">11</div>
      </li>
      <li>
        <div className="date">12</div>
      </li>
      <li>
        <div className="date">13</div>
        <div className="event all-day begin span-2 bg-warning">Event Name</div>
      </li>
      <li>
        <div className="date">14</div>
      </li>
      <li>
        <div className="date">15</div>
        <div className="event all-day end bg-success">Event Name</div>
      </li>
      <li>
        <div className="date">16</div>
      </li>
      <li>
        <div className="date">17</div>
      </li>
      <li>
        <div className="date">18</div>
      </li>
      <li>
        <div className="date">19</div>
      </li>
      <li>
        <div className="date">20</div>
      </li>
      <li>
        <div className="date">21</div>
        <div className="event bg-primary">Event Name</div>
        <div className="event bg-success">Event Name</div>
      </li>
      <li>
        <div className="date">22</div>
        <div className="event bg-info">Event with Longer Name</div>
      </li>
      <li>
        <div className="date">23</div>
      </li>
      <li>
        <div className="date">24</div>
      </li>
      <li>
        <div className="date">25</div>
      </li>
      <li>
        <div className="date">26</div>
      </li>
      <li>
        <div className="date">27</div>
      </li>
      <li>
        <div className="date">28</div>
      </li>
      <li>
        <div className="date">29</div>
      </li>
      <li>
        <div className="date">30</div>
      </li>
      <li>
        <div className="date">31</div>
      </li>
      <li className="outside">
        <div className="date">1</div>
      </li>
      <li className="outside">
        <div className="date">2</div>
      </li>
      <li className="outside">
        <div className="date">3</div>
      </li>
      <li className="outside">
        <div className="date">4</div>
      </li>
    </ol>
  </div>
</div>
</div>

          </main>
        </Col>
      </Row>
    </div>
  );
};

export default InformationForm;
