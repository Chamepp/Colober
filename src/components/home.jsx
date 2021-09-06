import React, { Component } from 'react';
import '../style/style.css';
import AOS from 'aos';
import "aos/dist/aos.css";
import Navbar from '../components/materials/navbar';
import Footer from '../components/materials/footer';
import Logo from '../files/Logo.png';
import GoogleLogo from '../files/google.svg';
import LinkedinLogo from '../files/linkedin.svg';
import NikeLogo from '../files/nike.svg';
import PumaLogo from '../files/puma.svg';
import FacebookLogo from '../files/facebook.svg';
import MicrosoftLogo from '../files/microsoft.svg';
import NetflixLogo from '../files/netflix.svg';
import TwitterLogo from '../files/twitter.svg';
import ImageOne from '../files/greet.png';
import ImageTwo from '../files/preview.png';
import ImageThree from "../files/electric.png";
import ImageFour from "../files/discount.png";
import ImageFive from "../files/hand.png";
import IconOne from '../files/telescope.svg';
import IconTwo from '../files/wallet.svg';
import IconThree from '../files/fire.svg';



class home extends React.Component {


  componentDidMount() {
    AOS.init({});
  }

    render() {
        return (
            <div>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="style.css" />
  <title>Colober</title>
  <header>
    <Navbar />
  </header>
  <div className="greet">
    <main className="main">
      <div className="section-one">
        <div className="welcome" data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top-center">
          <div className="greet">
            <h1 className="name">The Colobers.</h1> <br />
            <p className="des-p">
              Colober is a trusted lead for your company providing best <br />
              services with the best quality. Trusted by the worlds <br />
              trusted companies delivering the IT help you need via <br />
              our professional IT team.
            </p>
          </div>
          <div className="icons">
            <div>
              <img className="img-icon" src={GoogleLogo} />
              <img className="img-icon" src={LinkedinLogo} />
              <img className="img-icon" src={NikeLogo} />
              <img className="img-icon" src={PumaLogo} />
            </div>
            <div>
              <img className="img-icon" src={FacebookLogo} />
              <img className="img-icon" src={MicrosoftLogo} />
              <img className="img-icon" src={NetflixLogo} />
              <img className="img-icon" src={TwitterLogo} />
            </div>
          </div>
        </div>
        <img className="img-one" src={ImageOne} data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top-center" />
      </div>
      <div className="section-two">
        <div className="info-container">
          <div className="info-cards" data-aos="fade-up" data-aos-anchor-placement="top-center">
            <div className="info-card">
              <div className="info-card-img">
                <img className="img-svg" src={IconOne} data-aos="fade-down-right" data-aos-delay="1500" data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom" />
              </div>
              <div className="info-card-content">
                <h1>Flexibility</h1>
                <p>
                  Adapt and react to any scenario. Colober handles the complexity and removes <br />
                  the headache of scaling from small to enterprise.
                </p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-card-img">
                <img className="img-svg" src={IconTwo} data-aos="fade-down-right" data-aos-delay="1500" data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom" />
              </div>
              <div className="info-card-content">
                <h1>Professional</h1>
                <p>
                  Colober adapts to your business, not the other way around. Integrate anything <br />
                  and customize everything, without technical limitations.
                </p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-card-img">
                <img className="img-svg" src={IconThree} data-aos="fade-down-right" data-aos-delay="1500" data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom" />
              </div>
              <div className="info-card-content">
                <h1>Reliability</h1>
                <p>
                  Built upon the shared knowledge of the brands that revolutionized tech world, <br />
                  Colober is a production-grade, battle-tested tool for serious ventures.
                </p>
              </div>
            </div>
          </div>
          <img className="img-two" src={ImageTwo} data-aos="zoom-out" />
        </div>

        <br />
        <br />


        <div className="section-three">
          <div className="container-three" style={{display: 'flex', clear: 'right'}}>
            <img className="img-three" src={ImageThree}  data-aos="zoom-out" data-aos-delay="500" data-aos-duration="300" data-aos-anchor-placement="center-bottom" />
            <div>
              <h1 data-aos="fade-left" data-aos-delay="1000" data-aos-duration="300" data-aos-anchor-placement="center-bottom">A Modern Lead.</h1>
              <div className="lead-reason" data-aos="fade-left" data-aos-delay="1000" data-aos-duration="300" data-aos-anchor-placement="center-bottom">
                <svg xmlns="http://www.w3.org/2000/svg" width={35} height={35} fill="#85F3FF" className="bi bi-check-all" viewBox="0 0 16 16">
                  <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
                </svg>
                <h3>Best Platforms Provided</h3>
              </div>
              <div className="lead-reason" data-aos="fade-left" data-aos-delay="1100" data-aos-duration="300" data-aos-anchor-placement="bottom-bottom">
                <svg xmlns="http://www.w3.org/2000/svg" width={35} height={35} fill="#C6B0FF" className="bi bi-check-all" viewBox="0 0 16 16">
                  <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
                </svg>
                <h3>High Performance and Speed</h3>
              </div>
              <div className="lead-reason" data-aos="fade-left" data-aos-delay="1200" data-aos-duration="300" data-aos-anchor-placement="bottom-bottom">
                <svg xmlns="http://www.w3.org/2000/svg" width={35} height={35} fill="#3D79DA" className="bi bi-check-all" viewBox="0 0 16 16">
                  <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
                </svg>
                <h3>Great Work and Quality</h3>
              </div>
              <div className="lead-reason" data-aos="fade-left" data-aos-delay="1300" data-aos-duration="300" data-aos-anchor-placement="bottom-bottom">
                <svg xmlns="http://www.w3.org/2000/svg" width={35} height={35} fill="#FFA3B3" className="bi bi-check-all" viewBox="0 0 16 16">
                  <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
                </svg>
                <h3>Nice Analytics and Data</h3>
              </div>
            </div>
          </div>
      </div>

      <div>
      <br />
      <br />
      <br />
      <br />
      <div className="section-four">
        <div className="container-four" style={{display: 'flex', clear: 'right'}}>
          <div>
            <h1 data-aos="fade-right" data-aos-delay="1600" data-aos-duration="300" data-aos-anchor-placement="center-bottom">A Fair Offer.</h1>
            <div className="lead-reason-two" data-aos="fade-right" data-aos-delay="1000" data-aos-duration="300" data-aos-anchor-placement="center-center">
            <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="#85F3FF" class="bi bi-plus-lg" viewBox="0 0 16 16">
              <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
            </svg>
              <h3>Best Platforms Provided</h3>
            </div>
            <div className="lead-reason-two" data-aos="fade-right" data-aos-delay="1100" data-aos-duration="300" data-aos-anchor-placement="center-center">
            <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="#C6B0FF" class="bi bi-plus-lg" viewBox="0 0 16 16">
              <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
            </svg>
              <h3>High Performance and Speed</h3>
            </div>
            <div className="lead-reason-two" data-aos="fade-right" data-aos-delay="1200" data-aos-duration="300" data-aos-anchor-placement="center-center">
            <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="#3D79DA" class="bi bi-plus-lg" viewBox="0 0 16 16">
              <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
            </svg>
              <h3>Great Work and Quality</h3>
            </div>
            <div className="lead-reason-two" data-aos="fade-right" data-aos-delay="1300" data-aos-duration="300" data-aos-anchor-placement="center-center">
            <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="#FFA3B3" class="bi bi-plus-lg" viewBox="0 0 16 16">
              <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
            </svg>
              <h3>Nice Analytics and Data</h3>
            </div>
          </div>
          <img className="img-four" src={ImageFour}  data-aos="zoom-out" data-aos-delay="1600" data-aos-duration="300" data-aos-anchor-placement="center-bottom"  />
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="section-five"  data-aos="zoom-out" data-aos-duration="300" data-aos-anchor-placement="center-center">
        <h1>Got Stuck ?!</h1> <br />
        <div className="help-container">
          <div className="help-section">
            <h3>We are here to help</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <img className="img-five" src={ImageFive} />
        </div>
      </div>
    </div>

      </div>
    </main>
    <Footer />
  </div>
</div>

        );
    }
}
 
export default home;