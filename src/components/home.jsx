import React, { Component } from 'react';
import '../style/style.css';
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
import IconOne from '../files/telescope.svg';
import IconTwo from '../files/wallet.svg';
import IconThree from '../files/fire.svg';



class home extends React.Component {
    render() {
        return (
            <div>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="style.css" />
  <title>Colober</title>
  <header>
    <nav className="navbar">
      <img className="logo" src={Logo} />
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#about">Jobs</a></li>
        <li><a href="#news">News</a></li>
      </ul>
      <h1 className="contact">Contact Us</h1>
    </nav>
  </header>
  <div className="greet">
    <main className="main">
      <div className="section-one">
        <div className="welcome">
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
            <img src={GoogleLogo} width={35} height={35} />
            <img src={LinkedinLogo} width={35} height={35} />
            <img src={NikeLogo} width={35} height={35} />
            <img src={PumaLogo} width={35} height={35} /> <br />
            <img src={FacebookLogo} width={35} height={35} />
            <img src={MicrosoftLogo} width={35} height={35} />
            <img src={NetflixLogo} width={35} height={35} />
            <img src={TwitterLogo} width={35} height={35} />
          </div>
        </div>
        <div style={{display: 'flex', float: 'right', marginLeft: '200px', marginTop: '30px'}}>
          <img src={ImageOne} width={950} height={700} />
        </div>
      </div>
      <div className="section-two">
        <div className="info-container">
          <div className="info-cards" style={{clear: 'right'}}>
            <div className="info-card">
              <div className="info-card-img">
                <img src={IconOne} width={70} height={70} />
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
                <img src={IconTwo} width={70} height={70} />
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
                <img src={IconThree} width={70} height={70} />
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
          <img className="second-img" src={ImageTwo} />
        </div>

        <div className="section-three">
          <div className="container-three" style={{display: 'flex', clear: 'right'}}>
            <img src={ImageThree} />
            <div>
              <h1>A Modern Lead.</h1>
              <div className="lead-reason">
                <svg xmlns="http://www.w3.org/2000/svg" width={35} height={35} fill="#85F3FF" className="bi bi-check-all" viewBox="0 0 16 16">
                  <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
                </svg>
                <h3>Best Platforms Provided</h3>
              </div>
              <div className="lead-reason">
                <svg xmlns="http://www.w3.org/2000/svg" width={35} height={35} fill="#C6B0FF" className="bi bi-check-all" viewBox="0 0 16 16">
                  <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
                </svg>
                <h3>High Performance and Speed</h3>
              </div>
              <div className="lead-reason">
                <svg xmlns="http://www.w3.org/2000/svg" width={35} height={35} fill="#3D79DA" className="bi bi-check-all" viewBox="0 0 16 16">
                  <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
                </svg>
                <h3>Great Work and Quality</h3>
              </div>
              <div className="lead-reason">
                <svg xmlns="http://www.w3.org/2000/svg" width={35} height={35} fill="#FFA3B3" className="bi bi-check-all" viewBox="0 0 16 16">
                  <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
                </svg>
                <h3>Nice Analytics and Data</h3>
              </div>
            </div>
          </div>
      </div>

      </div>
    </main>
  </div>
</div>

        );
    }
}
 
export default home;