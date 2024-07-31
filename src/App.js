import { message } from 'antd';
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./carousel.css";

import Image3 from "./image2.jpg";
import Image7 from "./mobile.png";
import Image8 from "./mobile1.png";
import Image9 from "./mobile2.png";
import Image10 from "./mobile3.png";
import Image11 from "./mobile4.png";
import DataImage from "./data.PNG";
import Logo from "./svf.svg";
import BigImage from "./bigimage.PNG";
import Hero from "./sliderrasm.jpg";
import AboutImage from "./Frame 1 (1).png";
import emailjs from "@emailjs/browser";
import Ios from './app.png'
import Android from './play.png'
import "./main.scss";

function App() {
  const [active, setActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    emailjs.init("BdhviiSTDPm4S-3Kl");
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_dfybnm7', // Replace with your EmailJS service ID
        'template_ao7o2ki', // Replace with your EmailJS template ID
        formData,
        'BdhviiSTDPm4S-3Kl'
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          messageApi.info('Message sent successfully');
        },
        (err) => {
          console.log('FAILED...', err);
          alert('Failed to send message. Please try again later.');
        }
      );
  };
  if (isModalOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
  return (
    <div className="App">
      {contextHolder}
      {isModalOpen ?
        <div className="modal-wrapper-custome" onClick={() => setIsModalOpen(false)}>
          <div className="modal-wrapper-custome-inner">
            <a href="#home">
              <img src={Ios} alt="" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.premiumeld.mobile">
              <img src={Android} alt="" />
            </a>
          </div>
        </div>
        : null}
      <header>
        <div className="container">
          <div className="inner">
            <div className="logo">
              <img src={Logo} alt="logo" />
            </div>
            <div className={`links ${active ? "active" : ""}`}>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#service">Service</a>
                </li>
                <li>
                  <a href="#drive">For Driver</a>
                </li>
                <li>
                  <a href="#contact">Contact Us</a>
                </li>
              </ul>
              <button className="x-btn" onClick={() => setActive(false)}>
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 16 16"
                  version="1.1"
                  id="svg8"
                >
                  <rect
                    transform="rotate(45)"
                    ry="0"
                    y="-1"
                    x="4.3137083"
                    height="2"
                    width="14"
                    id="rect1006"
                  />
                  <rect
                    transform="rotate(-45)"
                    ry="0"
                    y="10.313708"
                    x="-7"
                    height="2"
                    width="14"
                    id="rect1006-5"
                  />
                </svg>
              </button>
            </div>
            <button className="hamburger" onClick={() => setActive(true)}>
              <svg
                fill="#000000"
                width="20px"
                height="20px"
                viewBox="0 0 1920 1920"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1920 1411.412v225.882H0v-225.882h1920Zm0-564.706v225.882H0V846.706h1920ZM1920 282v225.882H0V282h1920Z"
                  fill-rule="transparent"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <section className="car-section">
        <Carousel
          interval={null}
          indicators={false}
          prevIcon={false}
          nextIcon={false}
        >
          <Carousel.Item>
            <ExampleCarouselImage
              text="First Slide 1"
              style={{ height: "800px" }}
            />
            <img className="car-image" src={Hero} alt="sa" />
            <Carousel.Caption style={{ bottom: "40%", zIndex: "10" }}>
              <h3 className="carousel-h3">
                PREMIUM ELD <br /> IN USA
              </h3>
              <button
                onClick={() => setIsModalOpen(true)}
                className="carousel-btn"
              >
                Download
              </button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage
              text="First Slide 1"
              style={{ height: "800px" }}
            />
            <img className="car-image" src={Hero} alt="sa" />
            <Carousel.Caption style={{ bottom: "40%", zIndex: "10" }}>
              <h3 className="carousel-h3">
                PREMIUM ELD <br /> IN USA
              </h3>
              <button
                onClick={() => setIsModalOpen(true)}
                className="carousel-btn"
              >
                Download
              </button>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
      </section>
      <section>
        <div className="about-us" id="#about">
          <div className="container">
            <div className="inner">
              <div className="top">
                <div className="blocks" data-aos="fade-right">
                  <div className="left">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      fill="currentColor"
                      className="bi bi-truck"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                    </svg>
                  </div>
                  <div className="right">
                    <h3>Interface and its advantages</h3>
                    <p>
                      PREMIUM ELD has developed the most user-friendly
                      interface for both truckers and truck drivers, which has
                      a high potential among other analogues.
                    </p>
                  </div>
                </div>
                <div className="blocks" data-aos="fade-left">
                  <div className="left">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      fill="white"
                      className="bi bi-phone"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                      <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                    </svg>
                  </div>
                  <div className="right">
                    <h3>Interface and its advantages</h3>
                    <p>
                      PREMIUM ELD has developed the most user-friendly
                      interface for both truckers and truck drivers, which has
                      a high potential among other analogues.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bottom">
                <div
                  className="left"
                  data-aos="fade-up"
                  data-aos-duration="500"
                >
                  <h1>About us</h1>
                  <p>
                    PREMIUM ELD provides truck drivers with a simple way to
                    record all performance indicators.
                    <br />
                    <br />
                    Reduce the risk with PREMIUM ELD warnings about
                    violations. PREMIUM LED is approved by FM CSA and supports
                    DOT rules.
                    <br />
                    <br />
                    Comply with regulatory requirements and use additional
                    features such as real-time GPS tracking and mileage
                    calculation according to IFTA.
                  </p>
                  <button>
                    <a href="https://t.me/Premiumeld_manager">
                      Reach Our Expert Team
                    </a>
                  </button>
                </div>
                <div
                  className="right"
                  data-aos="fade-up"
                  data-aos-duration="500"
                >
                  <img src={AboutImage} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-item">
        <div className="container">
          <div className="inner">
            <div
              className="top"
              data-aos="fade-up"
              data-aos-anchor-placement="center-center"
            >
              <h1>Interface and its advantages</h1>
              <button onClick={() => setIsModalOpen(true)}>Download</button>
            </div>
            <p>
              PREMIUM ELD has developed the most user-friendly interface for
              both truckers and <br />
              truck drivers, which has a high potential among other analogues.
              <br />
              For example, you can view the hours spent driving and relax in
              time, pay attention to the fact that the application calculates
              the distance traveled.
            </p>
          </div>
          <div className="cards">
            <div className="block" data-aos="zoom-in">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="#000"
                className="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <h3>Efficient Freight Management</h3>
              <p>
                Our mobile application provides efficient freight management
                for long-haul truckers. With features such as load tracking,
                dispatch management, and document management, truckers can
                easily manage their freight and improve their overall
                productivity.
              </p>
            </div>
            <div className="block" data-aos="zoom-in">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-cursor-fill"
                viewBox="0 0 16 16"
              >
                <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
              </svg>
              <h3>Real-Time GPS Tracking</h3>
              <p>
                Our mobile application provides real-time GPS tracking,
                allowing truckers to track their cargo in real-time. This
                feature helps truckers to monitor their cargo and ensure that
                it arrives at its destination on time, while also improving
                safety and security.
              </p>
            </div>
            <div className="block" data-aos="zoom-in">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-graph-up-arrow"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"
                />
              </svg>
              <h3>Analytics and Reporting</h3>
              <p>
                Our mobile application provides advanced analytics and
                reporting features that help truckers to optimize their routes
                and improve their overall performance. With features such as
                fuel consumption tracking and route optimization, truckers can
                save time and money, while also reducing their carbon
                footprint.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="toggle-section">
        <div className="container">
          <div className="inner">
            <div className="left">
              <h1>WHAT PROBLEMS DO TRUCKERS FACE IN AMERICA</h1>
              <h3>The most common truck driver problems</h3>
              <div className="toggle">
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>1. Truck Parking</Accordion.Header>
                    <Accordion.Body>
                      Finding places to park trucks can be a time-consuming
                      process.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header>2. Lack of sleep</Accordion.Header>
                    <Accordion.Body>
                      Driving at night, driving long distances, and driving
                      for three or more hours at a time are all factors that
                      contribute to sleep deprivation.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      3. Expensive road tolls
                    </Accordion.Header>
                    <Accordion.Body>
                      Road tolls are very expensive for the truck driver
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
            <div className="right">
              <img src={Image3} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="phone-block">
        <div className="container">
          <div className="inner">
            <div className="top">
              <div className="left">
                <h2>People Say About Our Company</h2>
                <p>
                  Transmax is the world’s driving worldwide coordinations
                  supplier — we uphold industry and exchange the worldwide
                  trade.
                </p>
                <button onClick={() => setIsModalOpen(true)}>Download</button>
              </div>
              <div className="right">
                <img src={DataImage} alt="" />
              </div>
            </div>
            <div className="medium">
              <img alt="image" src={BigImage} />
            </div>
            <div className="bottom">
              <div className="left">
                <img src={Image7} alt="" />
              </div>
              <div className="right">
                <div className="top">
                  <h1>
                    Our device and cables PT-30 device 9 pin 6 pin 16 pin
                    heavy duty or 16 pin light medium
                  </h1>
                </div>
                <div className="bottom">
                  <img src={Image8} alt="" />
                  <img src={Image9} alt="" />
                  <img src={Image10} alt="" />
                  <img src={Image11} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="last-section">
        <div className="container">
          <div className="inner">
            <div className="left">
              <h1>Consultation</h1>
              <form onSubmit={handleSubmit}>
                <input
                  value={formData.name} onChange={handleChange}
                  placeholder="Name"
                  required
                  type="name"
                  name="name"
                  id=""
                />
                <input
                  value={formData.email} onChange={handleChange}
                  type="email"
                  required
                  placeholder="Email"
                  name="email"
                  id=""
                />
                <input
                  value={formData.message} onChange={handleChange}
                  type="text"
                  required
                  name="message"
                  id=""
                  placeholder="Phone"
                />
                <button>Send</button>
              </form>
            </div>
            <div className="right">
              <h1>Map</h1>
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d288849.7573506723!2d-74.21727223680148!3d40.70442114822378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1721236116691!5m2!1sen!2s"
                  width="600"
                  height="450"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="inner">
            <div className="block">
              <div className="logo">
                <img src={Logo} alt="" />
              </div>
              <p>
                PREMIUM ELD is a logbook in which every detail is thought out
                and perfected
                <br />
                <br />
                technical support in multiple languages:
              </p>
            </div>
            <div className="block">
              <span>our socials </span>
              <ul>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#0D314F"
                    className="bi bi-telegram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                  </svg>
                  <a href="https://t.me/Premiumeld_manager">Telegram</a>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#0D314F"
                    className="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                  </svg>
                  <a href="">Facebook</a>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#0D314F"
                    className="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                  </svg>
                  <a href="https://instagram.com/ Premium_eld">Instagram</a>
                </li>
              </ul>
            </div>
            <div className="block">
              <span>contact us </span>
              <ul>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#0D314F"
                    className="bi bi-envelope"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                  </svg>
                  <a href="mail:info@premiumeld.com">info@premiumeld.com</a>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#0D314F"
                    className="bi bi-person-lines-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
                  </svg>
                  <a href="">contact us</a>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#0D314F"
                    className="bi bi-telephone-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                    />
                  </svg>
                  <a href="tel:+19292141771">Tel: +19292141771</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap&v=weekly&language=en&region=EN"
        defer
      ></script>
      <script
        src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossOrigin="anonymous"
      ></script>
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <script>AOS.init();</script>
      <script></script>
    </div>
  );
}

export default App;