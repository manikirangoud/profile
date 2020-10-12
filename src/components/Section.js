import React  from 'react';
import image1 from '../images/image_001.jpg';
import image2 from '../images/image_002.jpg';
import image3 from '../images/image_003.jpg';
import image4 from '../images/image_004.jpg';
import image5 from '../images/image_001.jpg';
import video1 from '../videos/video_001.mp4';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


function Section() {

  var previousIcon = <span className="btn btn-dark button-left">
    <FontAwesomeIcon
      icon={faChevronLeft}
    />
  </span>

  var NextIcon = <span className="btn btn-dark button-right">
    <FontAwesomeIcon
      icon={faChevronRight}
    />
    </span>

  return (
    <div className="vh-min-85 m-2 ml-3 mr-3 p-3 rounded"> 
      <div className="section1 section-container" id="section1">

        <div className="description col-md-4">
          <div className="panel">
            <div className="panel-heading section1">
                <h3 className="panel-title">L Music Player</h3>
                <hr/>
            </div>
            
            <div className="panel-body section1">
                <p>
                    onepagescroll.js is a lightweight JavaScript library that makes
                    it easier to create a smooth scrolling effect with a side page navigation
                    for your one-page website / single page application. Keyboard navigation and
                    touch events supported.
                </p>
            </div>
          </div>
        </div>

          <div className="video">
            <div className="left-btns">
                <div className="left-btn1"></div>
                <div className="left-btn2"></div>
                <div className="left-btn3"></div>
            </div>
            <div className="bg-1">
                <div className="notch">
                    <div className="speaker"></div>
                    <div className="sensor"></div>
                </div>
                <video controls preload="metadata">
                    <source src={video1} type="video/mp4"/>
                </video>
            </div>
            <div className="right-btns">
                <div className="right-btn1"></div>
            </div>
          </div>


          <div id="images-main" className="images-main carousel slide" data-ride="carousel">
              <div className="left-btns">
                  <div className="left-btn1"></div>
                  <div className="left-btn2"></div>
                  <div className="left-btn3"></div>
              </div>
              <div className="bg-1">
                  <div className="notch">
                      <div className="speaker"></div>
                      <div className="sensor"></div>
                  </div>

                  <div className="images carousel-inner">
                    <Carousel 
                      prevIcon={previousIcon}
                      nextIcon={NextIcon}
                      
                    >
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={image1}
                          alt="First slide"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={image2}
                          alt="Third slide"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={image3}
                          alt="Third slide"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={image4}
                          alt="Third slide"
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={image5}
                          alt="Third slide"
                        />
                      </Carousel.Item>
                    </Carousel>
                  </div>
              </div>
              <div className="right-btns">
                  <div className="right-btn1"></div>
              </div>
          </div>
        </div>
    </div>
  );
}

export default Section;
