import React, { Component } from "react";

function About() {
  return (
    <div>
      <section className="resume-section" id="about">
        <div className="resume-section-content">
          <h1 className="mb-0">
            Muhamad
            <span className="text-primary">Irsad</span>
          </h1>
          <div className="subheading mb-5">
            No.8 Jln Mariwati · Canjur Jabar, CO 54235 · (62) 585-8468 ·
            <a href="mailto:proirsad21@gmail.com">proirsad21@gmail.com</a>
          </div>
          <p className="lead mb-5">
            I am a junior programmer, taking a MERN fullstack development
            programmer class on a job distribution platform under the guidance
            of a competent and experienced mentor in eduwork
          </p>
          <div className="social-icons">
            <a className="social-icon" href="#!">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a className="social-icon" href="#!">
              <i className="fab fa-github"></i>
            </a>
            <a className="social-icon" href="#!">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="social-icon" href="#!">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </section>
      <hr className="m-0" />
    </div>
  );
}

export default About;
