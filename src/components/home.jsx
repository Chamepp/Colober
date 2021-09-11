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

    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Sitesoch</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get Help</h4>
            <ul>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Order Status</a></li>
              <li><a href="#">Payment Options</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Address</h4>
            <ul>
              <li><a href="#">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                </svg>
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                </svg>
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>


  </div>
</div>

        );
    }
}
 
export default home;