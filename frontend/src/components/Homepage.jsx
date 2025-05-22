import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Homepage.css";
const Homepage = () => {
  return (
    <div className="overflow">
      <div className="backimg">
        <Container>
          <Row className="colposi">
            <Col>
              <div className="head1">The Best Doctor</div>
              <div className="head2"> Gives The Least </div>
              <div className="head3">Medicine</div>

              <div className="para1">
                Effortlessly book doctor appointments online. Convenient, quick,
                and reliable service for your healthcare needs. Your well-being
                is just a click away.
              </div>

              <div>
                <button className="button1"> Book An Appointment</button>
                <button className="button1 buttonspace"> Call Now</button>
              </div>
            </Col>
            <Col>
              <img className="img2" src="/images/2.png" alt="" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="backcolor3">
        <div className="body1">
          <div className="searchbar">
            <input type="datetime-local" className="dateandtime" />
            <div class="coolinput">
              <input
                type="text"
                placeholder="Search Doctors Here"
                name="input"
                class="input"
              />
            </div>
            <div>
              <button className="button3">Search</button>
            </div>
          </div>
        </div>
        <br />
        <br />

        <h1 className="head4">How It Works!</h1>
        <div className="para2div">
          <p className="para2 text-center">
            Discover, book, and experience persionilised healthcare effortlessly
            with our user-friendly Doctor Appointment Website
          </p>
        </div>
        <br />
        <br />

        <div>
          <Container>
            <Row>
              <Col className="colposi">
                <div class="card1">
                  <div class="card1-image">
                    <img className="img3" src="/images/3.png" alt="" />
                  </div>
                  <div class="category text-center"> Find A Doctor </div>
                  <div class="heading text-center">
                    {" "}
                    Discover skilled Doctor based on specialisation and location
                  </div>
                </div>
              </Col>
              <Col className="colposi">
                <div class="card1">
                  <div class="card1-image">
                    <img className="img4" src="/images/4.png" alt="" />
                  </div>
                  <div class="category text-center"> Book Appointment </div>
                  <div class="heading text-center">
                    {" "}
                    Efficiently schedule doctor appointments, timely healthcare.
                  </div>
                </div>
              </Col>
              <Col className="colposi">
                <div class="card1">
                  <div class="card1-image">
                    <img className="img5" src="/images/5.png" alt="" />
                  </div>
                  <div class="category text-center"> Get Services </div>
                  <div class="heading text-center">
                    {" "}
                    Recieve personlised healthcare services tailored to your
                    needs.
                  </div>
                </div>
              </Col>
            </Row>
            <section class="dots-container dot-position ">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </section>
            <section class="dots-container dot-position2 ">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </section>
          </Container>
        </div>
      </div>
      <div className="medicinepart">
        <br />
        <br />
        <br />
        <span className="head4">We Care For Your Health</span>
        <br />

        <section className="designpart">
          <section className="designpart1">
            <Container>
              <Row className="colposi">
                <Col className="pcolposi">
                  <div className="phead1">Assured Quality</div>
                  <div className="phead2"> Pharamccutical Productds </div>

                  <div>
                    <br />
                    <button className="button1"> Shop Now</button>
                  </div>
                </Col>
                <Col>
                  <img className="img6" src="/images/7.png" alt="" />
                </Col>
              </Row>
            </Container>
          </section>
        </section>
        <img src="" alt="" />
      </div>
      <br />
      <br />
      <div className="section4">
        <div className="container">
          <div className="row">
            <div className="col-4 innerpart">
              <span className="head7">Working For </span>
              <br />
              <span className="head7">Your Better </span>
              <br />
              <span className="head7"> Health </span>
              <br />

              <br />
              <br />

              <span className="subhead">Take care of your health on time</span>
              <br />
              <br />
              <button className="button3">All Services</button>
            </div>
            <div className="col-4 itemincol">
              <div className="detailpart">
                <div className="headinginside">Medication Therapy</div>
                <div className="headinginside">Managment</div>
                <br />
                <div>We offer medication therapy</div>
                <div>managment to help you get the</div>
                <div>best result from your medication</div>
              </div>
            </div>
            <div className="col-4 itemincol">
              <div className="detailpart">
                <div className="headinginside">Nutrition Strategies </div>

                <br />
                <div>
                  Discuss the role of balanced nutrition in promoting better
                  health. Highlight the importance of a well-rounded diet,
                  including essential nutrients, vitamins, and minerals
                </div>
              </div>
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col-4 itemincol">
              <div className="detailpart">
                <div className="headinginside">
                  Stress Management Techniques{" "}
                </div>

                <br />
                <div>
                  Examine the impact of stress on physical health and mental
                  well-being. Provide effective strategies and coping mechanisms
                  for managing stress
                </div>
              </div>
            </div>
            <div className="col-4 itemincol">
              <div className="detailpart">
                <div className="headinginside">
                  The Importance of Regular Exercise
                </div>

                <br />
                <div>
                  Explore the various benefits of incorporating regular physical
                  activity into daily routines, including improved
                  cardiovascular health
                </div>
              </div>
            </div>
            <div className="col-4 itemincol">
              <div className="detailpart">
                <div className="headinginside">
                  Building Stronger Social Connections
                </div>

                <br />
                <div>
                  Explore the relationship between social connections and mental
                  well-being. Discuss the impact of loneliness and isolation on
                  health
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>


    </div>
  );
};

export default Homepage;
