import React, { Component } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import VanillaTilt from 'vanilla-tilt';
import Navbar from '../components/materials/navbar';
import Footer from '../components/materials/footer';
import ImageOne from '../files/battery.png';




class service extends React.Component {

  

    componentDidMount() {
        AOS.init({});
        const elements = document.querySelectorAll(".js-tilt");
        VanillaTilt.init(elements);
        document.getElementById("open-popup-btn").addEventListener("click",function(){
          document.getElementsByClassName("popup")[0].classList.add("active");
        });
      
        document.getElementById("dismiss-popup-btn").addEventListener("click",function(){
            document.getElementsByClassName("popup")[0].classList.remove("active");
        });

        document.getElementById("open-popup-btn-2").addEventListener("click",function(){
          document.getElementsByClassName("popup-2")[0].classList.add("active");
        });

        document.getElementById("dismiss-popup-btn-2").addEventListener("click",function(){
          document.getElementsByClassName("popup-2")[0].classList.remove("active");
        });

        document.getElementById("open-popup-btn-3").addEventListener("click",function(){
          document.getElementsByClassName("popup-3")[0].classList.add("active");
        });

        document.getElementById("dismiss-popup-btn-3").addEventListener("click",function(){
          document.getElementsByClassName("popup-3")[0].classList.remove("active");
        });

        document.getElementById("open-popup-btn-4").addEventListener("click",function(){
          document.getElementsByClassName("popup-4")[0].classList.add("active");
        });

        document.getElementById("dismiss-popup-btn-4").addEventListener("click",function(){
          document.getElementsByClassName("popup-4")[0].classList.remove("active");
        });

        document.getElementById("open-popup-btn-5").addEventListener("click",function(){
          document.getElementsByClassName("popup-5")[0].classList.add("active");
        });

        document.getElementById("dismiss-popup-btn-5").addEventListener("click",function(){
          document.getElementsByClassName("popup-5")[0].classList.remove("active");
        });

        document.getElementById("open-popup-btn-6").addEventListener("click",function(){
          document.getElementsByClassName("popup-6")[0].classList.add("active");
        });

        document.getElementById("dismiss-popup-btn-6").addEventListener("click",function(){
          document.getElementsByClassName("popup-6")[0].classList.remove("active");
        });

        document.getElementById("open-popup-btn-7").addEventListener("click",function(){
          document.getElementsByClassName("popup-7")[0].classList.add("active");
        });

        document.getElementById("dismiss-popup-btn-7").addEventListener("click",function(){
          document.getElementsByClassName("popup-7")[0].classList.remove("active");
        });

        document.getElementById("open-popup-btn-8").addEventListener("click",function(){
          document.getElementsByClassName("popup-8")[0].classList.add("active");
        });

        document.getElementById("dismiss-popup-btn-8").addEventListener("click",function(){
          document.getElementsByClassName("popup-8")[0].classList.remove("active");
        });

        document.getElementById("open-popup-btn-9").addEventListener("click",function(){
          document.getElementsByClassName("popup-9")[0].classList.add("active");
        });

        document.getElementById("dismiss-popup-btn-9").addEventListener("click",function(){
          document.getElementsByClassName("popup-9")[0].classList.remove("active");
        });
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
  <div className="introduction" data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top-center">
    <h1>Services We Provide</h1>
    <p>
      You can check if there's time available for a specific service, you can order your service by sending an email to support@colober.com <br className="word-br" />
      with the mentioned Issue ID and your phone number. Tupport team will call you within the estimated time. Lorem Ipsum has been the industry's <br className="word-br" />
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has <br className="word-br" />
      survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised <br className="word-br" />
      in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software <br className="word-br" />
      like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
  </div>
  <div id="why_section" className="div-credentials-two">
    <div className="present-row-two row ml-1">
      {/* Card Container */}
      <div className="container">
        {/* Card One */}
        <div className="why-card js-tilt" data-tilt data-tilt-scale="1.1" data-tilt-glare data-tilt-max-glare="0.8">
          <div className="content">
            <h2>01</h2>
            <h3>Equipment</h3>
            <p>
              A dream does not become reality through magic;
              it takes sweat, determination, and hard work ...
            </p>
            <a id="open-popup-btn">+ Add</a>
          </div>
        </div>
        {/* Card Two */}
        <div className="why-card js-tilt" data-tilt data-tilt-scale="1.1" data-tilt-glare data-tilt-max-glare="0.8">
          <div className="content">
            <h2>02</h2>
            <h3>Servers</h3>
            <p>
              The two most powerful warriors are patience and time.
              Time is money
              and waits for no one ...
            </p>
            <a id="open-popup-btn-2">+ Add</a>
          </div>
        </div>
        {/* Card Three */}
        <div className="why-card js-tilt" data-tilt data-tilt-scale="1.1" data-tilt-glare data-tilt-max-glare="0.8">
          <div className="content">
            <h2>03</h2>
            <h3>Hosts</h3>
            <p>
              Success consists of going
              from failure to failure
              without loss of enthusiasm and excitment ...
            </p>
            <a id="open-popup-btn-3">+ Add</a>
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
            <h3>Domains</h3>
            <p>
              A dream does not become reality through magic;
              it takes sweat, determination, and hard work ...
            </p>
            <a id="open-popup-btn-4">+ Add</a>
          </div>
        </div>
        {/* Card Two */}
        <div className="why-card js-tilt" data-tilt data-tilt-scale="1.1" data-tilt-glare data-tilt-max-glare="0.8">
          <div className="content">
            <h2>05</h2>
            <h3>AI Issues</h3>
            <p>
              The two most powerful warriors are patience and time.
              Time is money
              and waits for no one ...
            </p>
            <a id="open-popup-btn-5">+ Add</a>
          </div>
        </div>
        {/* Card Three */}
        <div className="why-card js-tilt" data-tilt data-tilt-scale="1.1" data-tilt-glare data-tilt-max-glare="0.8">
          <div className="content">
            <h2>06</h2>
            <h3>Admin System</h3>
            <p>
              Success consists of going
              from failure to failure
              without loss of enthusiasm and excitment ...
            </p>
            <a id="open-popup-btn-6">+ Add</a>
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
            <h3>Traffic Monitoring</h3>
            <p>
              A dream does not become reality through magic;
              it takes sweat, determination, and hard work ...
            </p>
            <a id="open-popup-btn-7">+ Add</a>
          </div>
        </div>
        {/* Card Two */}
        <div className="why-card js-tilt" data-tilt data-tilt-scale="1.1" data-tilt-glare data-tilt-max-glare="0.8">
          <div className="content">
            <h2>08</h2>
            <h3>Security</h3>
            <p>
              The two most powerful warriors are patience and time.
              Time is money
              and waits for no one ...
            </p>
            <a id="open-popup-btn-8">+ Add</a>
          </div>
        </div>
        {/* Card Three */}
        <div className="why-card js-tilt" data-tilt data-tilt-scale="1.1" data-tilt-glare data-tilt-max-glare="0.8">
          <div className="content">
            <h2>09</h2>
            <h3>Subdomains</h3>
            <p>
              Success consists of going
              from failure to failure
              without loss of enthusiasm and excitment ...
            </p>
            <a id="open-popup-btn-9">+ Add</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="popup center">
    <div className="icon">
      <i className="fa fa-check" />
    </div>
    <div className="title">
      Success!!
    </div>
    <div className="description">
      Technicians are available for helping <br /> you with this issue 
      Please send an email to our support team with your issue code <br /> <br />
      Section Number: +1 {Math.floor(Math.random() * 1000)} {Math.floor(Math.random() * 1000)} <br />
      Issue Code: {Math.floor(Math.random() * 1000)} <br />
      Calling Within: {Math.floor(Math.random() * 100)} Minutes
    </div>
    <div className="dismiss-btn">
      <button id="dismiss-popup-btn">Dismiss</button>
    </div>
  </div>
  <div className="popup-2 center">
    <div className="icon">
      <i className="fa fa-check" />
    </div>
    <div className="title">
      Sorry
    </div>
    <div className="description">
      We are not able to get your request for now, as this service section is busy and already full,
      you can try again within the next 24 Hours.
    </div>
    <div className="dismiss-btn-2">
      <button id="dismiss-popup-btn-2">Dismiss</button>
    </div>
  </div>
  <div className="popup-3 center">
    <div className="icon">
      <i className="fa fa-check" />
    </div>
    <div className="title">
      Success!!
    </div>
    <div className="description">
      Technicians are available for helping <br /> you with this issue 
      Please send an email to our support team with your issue code <br /> <br />
      Section Number: +1 {Math.floor(Math.random() * 1000)} {Math.floor(Math.random() * 1000)} <br />
      Issue Code: {Math.floor(Math.random() * 1000)} <br />
      Calling Within: {Math.floor(Math.random() * 100)} Minutes
    </div>
    <div className="dismiss-btn-3">
      <button id="dismiss-popup-btn-3">Dismiss</button>
    </div>
  </div>
  <div className="popup-4 center">
    <div className="icon">
      <i className="fa fa-check" />
    </div>
    <div className="title">
      Success!!
    </div>
    <div className="description">
      Technicians are available for helping <br /> you with this issue 
      Please send an email to our support team with your issue code <br /> <br />
      Section Number: +1 {Math.floor(Math.random() * 1000)} {Math.floor(Math.random() * 1000)} <br />
      Issue Code: {Math.floor(Math.random() * 1000)} <br />
      Calling Within: {Math.floor(Math.random() * 100)} Minutes
    </div>
    <div className="dismiss-btn-4">
      <button id="dismiss-popup-btn-4">Dismiss</button>
    </div>
  </div>
  <div className="popup-5 center">
    <div className="icon">
      <i className="fa fa-check" />
    </div>
    <div className="title">
      Success!!
    </div>
    <div className="description">
      Technicians are available for helping <br /> you with this issue 
      Please send an email to our support team with your issue code <br /> <br />
      Section Number: +1 {Math.floor(Math.random() * 1000)} {Math.floor(Math.random() * 1000)} <br />
      Issue Code: {Math.floor(Math.random() * 1000)} <br />
      Calling Within: {Math.floor(Math.random() * 100)} Minutes
    </div>
    <div className="dismiss-btn-5">
      <button id="dismiss-popup-btn-5">Dismiss</button>
    </div>
  </div>
  <div className="popup-6 center">
    <div className="icon">
      <i className="fa fa-check" />
    </div>
    <div className="title">
      Success!!
    </div>
    <div className="description">
      Technicians are available for helping <br /> you with this issue 
      Please send an email to our support team with your issue code <br /> <br />
      Section Number: +1 {Math.floor(Math.random() * 1000)} {Math.floor(Math.random() * 1000)} <br />
      Issue Code: {Math.floor(Math.random() * 1000)} <br />
      Calling Within: {Math.floor(Math.random() * 100)} Minutes
    </div>
    <div className="dismiss-btn-6">
      <button id="dismiss-popup-btn-6">Dismiss</button>
    </div>
  </div>
  <div className="popup-7 center">
    <div className="icon">
      <i className="fa fa-check" />
    </div>
    <div className="title">
      Success!!
    </div>
    <div className="description">
      Technicians are available for helping <br /> you with this issue 
      Please send an email to our support team with your issue code <br /> <br />
      Section Number: +1 {Math.floor(Math.random() * 1000)} {Math.floor(Math.random() * 1000)} <br />
      Issue Code: {Math.floor(Math.random() * 1000)} <br />
      Calling Within: {Math.floor(Math.random() * 100)} Minutes
    </div>
    <div className="dismiss-btn-7">
      <button id="dismiss-popup-btn-7">Dismiss</button>
    </div>
  </div>
  <div className="popup-8 center">
    <div className="icon">
      <i className="fa fa-check" />
    </div>
    <div className="title">
      Success!!
    </div>
    <div className="description">
      Technicians are available for helping <br /> you with this issue 
      Please send an email to our support team with your issue code <br /> <br />
      Section Number: +1 {Math.floor(Math.random() * 1000)} {Math.floor(Math.random() * 1000)} <br />
      Issue Code: {Math.floor(Math.random() * 1000)} <br />
      Calling Within: {Math.floor(Math.random() * 100)} Minutes
    </div>
    <div className="dismiss-btn-8">
      <button id="dismiss-popup-btn-8">Dismiss</button>
    </div>
  </div>
  <div className="popup-9 center">
    <div className="icon">
      <i className="fa fa-check" />
    </div>
    <div className="title">
      Success!!
    </div>
    <div className="description">
      Technicians are available for helping <br /> you with this issue 
      Please send an email to our support team with your issue code <br /> <br />
      Section Number: +1 {Math.floor(Math.random() * 1000)} {Math.floor(Math.random() * 1000)} <br />
      Issue Code: {Math.floor(Math.random() * 1000)} <br />
      Calling Within: {Math.floor(Math.random() * 100)} Minutes
    </div>
    <div className="dismiss-btn-9">
      <button id="dismiss-popup-btn-9">Dismiss</button>
    </div>
  </div>
  <Footer />
</div>

        );
    }
}
 
export default service;