import React, { Component } from 'react';
import VanillaTilt from 'vanilla-tilt';
import Navbar from '../components/materials/navbar';
import Footer from '../components/materials/footer';
import ImageOne from '../files/battery.png';


class service extends React.Component {

    componentDidMount() {
        const elements = document.querySelectorAll(".js-tilt");
        VanillaTilt.init(elements);
    }

    render() { 
        return (
            <div>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="style.css" />
  <title>Colobert</title>
  <header>
    <Navbar />
  </header>
  <div className="introduction">
    <h1>Services We Provide</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy <br />
      text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has <br />
      survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised <br />
      in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software <br />
      like Aldus PageMaker including versions of Lorem Ipsum.</p>
  </div>
  <div id="why_section" className="div-credentials-two">
    <div className="present-row-two row ml-1">
      {/* Card Container */}
      <div className="container">
        {/* Card One */}
        <div className="why-card js-tilt" data-tilt data-tilt-scale="1.1" data-tilt-glare data-tilt-max-glare="0.8">
          <div className="content">
            <h2>01</h2>
            <h3>Hard Work</h3>
            <p>
              A dream does not become reality through magic;
              it takes sweat, determination, and hard work ...
            </p>
            <a href="#why_section">+ Add</a>
          </div>
        </div>
        {/* Card Two */}
        <div className="why-card js-tilt" data-tilt data-tilt-scale="1.1" data-tilt-glare data-tilt-max-glare="0.8">
          <div className="content">
            <h2>02</h2>
            <h3>On Time</h3>
            <p>
              The two most powerful warriors are patience and time.
              Time is money
              and waits for no one ...
            </p>
            <a href="#why_section">+ Add</a>
          </div>
        </div>
        {/* Card Three */}
        <div className="why-card js-tilt" data-tilt data-tilt-scale="1.1" data-tilt-glare data-tilt-max-glare="0.8">
          <div className="content">
            <h2>03</h2>
            <h3>Enthusiasm</h3>
            <p>
              Success consists of going
              from failure to failure
              without loss of enthusiasm and excitment ...
            </p>
            <a href="#why_section">+ Add</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="why_section" className="div-credentials-two">
    <div className="present-row-two row ml-1">
      {/* Card Container */}
      <div className="container">
        {/* Card One */}
        <div className="why-card js-tilt" data-tilt data-tilt-scale="1.1" data-tilt-glare data-tilt-max-glare="0.8">
          <div className="content">
            <h2>04</h2>
            <h3>Hard Work</h3>
            <p>
              A dream does not become reality through magic;
              it takes sweat, determination, and hard work ...
            </p>
            <a href="#why_section">+ Add</a>
          </div>
        </div>
        {/* Card Two */}
        <div className="why-card js-tilt" data-tilt data-tilt-scale="1.1" data-tilt-glare data-tilt-max-glare="0.8">
          <div className="content">
            <h2>05</h2>
            <h3>On Time</h3>
            <p>
              The two most powerful warriors are patience and time.
              Time is money
              and waits for no one ...
            </p>
            <a href="#why_section">+ Add</a>
          </div>
        </div>
        {/* Card Three */}
        <div className="why-card js-tilt" data-tilt data-tilt-scale="1.1" data-tilt-glare data-tilt-max-glare="0.8">
          <div className="content">
            <h2>06</h2>
            <h3>Enthusiasm</h3>
            <p>
              Success consists of going
              from failure to failure
              without loss of enthusiasm and excitment ...
            </p>
            <a href="#why_section">+ Add</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="why_section" className="div-credentials-two">
    <div className="present-row-two row ml-1">
      {/* Card Container */}
      <div className="container">
        {/* Card One */}
        <div className="why-card js-tilt" data-tilt data-tilt-scale="1.1" data-tilt-glare data-tilt-max-glare="0.8">
          <div className="content">
            <h2>07</h2>
            <h3>Hard Work</h3>
            <p>
              A dream does not become reality through magic;
              it takes sweat, determination, and hard work ...
            </p>
            <a href="#why_section">+ Add</a>
          </div>
        </div>
        {/* Card Two */}
        <div className="why-card js-tilt" data-tilt data-tilt-scale="1.1" data-tilt-glare data-tilt-max-glare="0.8">
          <div className="content">
            <h2>08</h2>
            <h3>On Time</h3>
            <p>
              The two most powerful warriors are patience and time.
              Time is money
              and waits for no one ...
            </p>
            <a href="#why_section">+ Add</a>
          </div>
        </div>
        {/* Card Three */}
        <div className="why-card js-tilt" data-tilt data-tilt-scale="1.1" data-tilt-glare data-tilt-max-glare="0.8">
          <div className="content">
            <h2>09</h2>
            <h3>Enthusiasm</h3>
            <p>
              Success consists of going
              from failure to failure
              without loss of enthusiasm and excitment ...
            </p>
            <a href="#why_section">+ Add</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</div>

        );
    }
}
 
export default service;