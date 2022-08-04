import React from "react";
import { NavLink } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <>
      <main className="">
        <section className="padding-top flex-row d-flex height1000px">
          <div className=" v-center text-center font-large width33p">
            Welcome To{" "}
            <div>
              <span className="red">UNI</span>SEARCH
            </div>
          </div>

          <img
            className="bubbles "
            alt="boy"
            src={require("./images/Bubbles.png")}
          ></img>
          <div className="width33p text-center font-large v-center">
            Get Started Today!
            <div>
              <NavLink to="/login" className=" btn btn-primary">
                Login
              </NavLink>
            </div>
          </div>
        </section>
        <div className="height300px"></div>
        <section className=" ">
          <div className="font-large carosel-header text-center">
            Search Our Directorty of Over 9,000 Universities and Colleges
          </div>
          <div className="height100px"></div>
          <div className="height-carousel">
            <Carousel className=" margin-auto">
              <Carousel.Item>
                <img
                  className="d-block "
                  src={require("./images/epic-campus.jpg")}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>University of New York, Yuen Campus, Hong Kong</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block "
                  src={
                    "https://news.ucmerced.edu/sites/news.ucmerced.edu/files/news/image/hero_16.jpg"
                  }
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Moody Center for the Arts, Rice University</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block"
                  src={require("./images/Moody-Center.webp")}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>The Bloomberg Center, Cornell Tech</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block"
                  src={require("./images/Bloomberg-Center.webp")}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Energy and Technology Building, University of Bergen</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block"
                  src={require("./images/bergen.webp")}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Lassonde Studios, University of Utah</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block"
                  src={require("./images/lassonade.webp")}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>University of New York, Yuen Campus, Hong Kong</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block"
                  src={
                    "https://media.architecturaldigest.com/photos/58ac753f5bf3275151855388/master/w_2364,h_1330,c_limit/3%20-%20West%20Campus%20Union%20-%20Credit%20James%20Ewing.jpg"
                  }
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>University of New York, Yuen Campus, Hong Kong</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
