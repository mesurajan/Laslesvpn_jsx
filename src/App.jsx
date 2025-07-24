import React from 'react';
import './App.css'
import Logo from './assets/images/logo.png'
import home from './assets/images/home_image.png'
import image02 from './assets/images/image02.png'
import location from './assets/images/location.png'
import servers from './assets/images/servers.png'
import user from './assets/images/user.png'

function App() {
  return (
    <div className="main">
      <section className="hero-header">
        <div className="hero-header__content">
          <header className="header">
            <div className="header__logo">

                <img src={Logo} alt="Logo" className="header__logo" />
            </div>

            <nav className="header__nav">
              <ul className="header__nav-list">
                <li><a href="#about">About</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#help">Help</a></li>
              </ul>
            </nav>

            <div className="header__actions">
              <a href="#sign-in" className="header__button">Sign in</a>
              <a href="#sign-out" className="header__button header__button--secondary">Sign up</a>
            </div>
          </header>
        </div>
      </section>

      <section id="about" className="home">
        <div className="home__content">
          <div className="home__text">
            <h1 className="home__title">Want anything to be easy with LaslesVPN.</h1>
            <p className="home__description">
              Provide a network for all your needs with ease and fun using LaslesVPN. Discover interesting features from us.
            </p>
            <button className="home__button"><strong>Get Started</strong></button>
          </div>

          <div className="home__image">
            <img src={home} alt="hero" className="home__image" />
          </div>
        </div>
      </section>

      <section className="user-num">
        <div className="user-number">
          <div className="user-num-first">
            <div className="user-num-img">
              
                <img src={user} alt="Users" className="user-num-img" />
            </div>
            <div className="user-num-text">
              <p><strong className="bold">90+</strong><br />Users</p>
            </div>
          </div>

          <div className="user-num-first">
            <div className="user-num-img">
                <img src={location} alt="Locations" className="user-num-img" />
            </div>
            <div className="user-num-text">
              <p><strong className="bold">30+</strong><br />Locations</p>
            </div>
          </div>

          <div className="user-num-first">
            <div className="user-num-img">
                <img src={servers} alt="Servers" className="user-num-img" />
            </div>
            <div className="user-num-text">
              <p><strong className="bold">50+</strong><br />Servers</p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <div className="feature__content">
          <div className="feature__image-02">
            <img src={image02} alt="Feature" className="featur_image-02" />
          </div>

          <div className="feature__text">
            <h1 className="feature__title"><strong>We Provide many features you can use</strong></h1>
            <p className="feature__description">
              You can explore the features that we provide with fun and have their own functions each feature.
            </p>
            <ul className="features-list">
              <li className="features-list-content">Powerful online Protection</li>
              <li className="features-list-content">Internet without borders</li>
              <li className="features-list-content">Supercharged VPN</li>
              <li className="features-list-content">No specific time limits</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
