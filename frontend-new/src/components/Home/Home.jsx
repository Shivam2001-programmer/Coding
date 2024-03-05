import React from "react";
import Type from "./Type";
import { TfiPanel } from "react-icons/tfi";
import { PiPackageFill } from "react-icons/pi";
import { FiSettings } from "react-icons/fi";
import { MdCreditCard } from "react-icons/md";
import { FaRegCheckSquare } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import "./Home.css";
import HowItWorksSection from "./HowItWorksSection";
import Carousel from "./Carousel";
import TestimonialCarousel from "./TestimonialCarousel";
const Home = () => {
  return (
    <>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 mb-5">
            <div class="all-container">
              <div>
                <div>
                  <h2
                    className=""
                    style={{ fontSize: "45px", fontWeight: "800" }}
                  >
                    Empowering Ed-techs
                    <div
                      className="d-flex gap-2"
                      style={{ alignItems: "center" }}
                    >
                      <h2
                        className=""
                        style={{ fontSize: "45px", fontWeight: "800" }}
                      >
                        to
                      </h2>
                      <h2
                        className="text-danger"
                        style={{ fontSize: "45px", fontWeight: "800" }}
                      >
                        <Type />
                      </h2>
                    </div>
                  </h2>
                  <h2
                    className="section-title"
                    style={{ fontSize: "45px", fontWeight: "800" }}
                  >
                    {" "}
                    better & beyond
                  </h2>
                  <p className="mb-4">
                    CodingJudge is B2B platform aimed at aiding ed-techs with
                    tech capabilities and automations for their enhanced
                    operations and growth!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 d-lg-block d-none">
            <img
              src="https://codingjudgeappimagesstatic.s3.ap-south-1.amazonaws.com/homepage.png"
              alt="illustration"
              class="img img-fluid"
              style={{ height: "80%", width: "90%" }}
            />
          </div>
        </div>
      </div>

      {/* <!-- topics --> */}

      <section class="section pb-0 mt-4">
        <div class="container">
          <h2 className="section-title fs-1 fw-bold ">
            Features of CodingJudge
          </h2>
          <div class="row">
            {/* <!-- topic --> */}
            <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div class="card match-height mt-3">
                <div class="card-body shadow rounded bg-white transition hover:bg-gray-200 p-3">
                  <div
                    className="card bg-danger rounded-sm d-flex justify-content-center align-items-center mt-2"
                    style={{ width: "4rem", height: "3rem" }}
                  >
                    <TfiPanel
                      style={{ color: "white", width: "2rem", height: "2rem" }}
                    />
                  </div>
                  <h5 className="card-title mb-2 fs-4 fw-bold mt-3">
                    Compile Code
                  </h5>
                  <p className="card-text">
                    Run your code against our compiler with support for over 10+
                    languages.
                  </p>
                  {/* <!-- <a href="list.html" class="stretched-link"></a> --> */}
                </div>
              </div>
            </div>
            {/* <!-- topic --> */}
            <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div class="card match-height mt-3">
                <div class="card-body  shadow rounded bg-white transition hover:bg-gray-200 p-3">
                  <div
                    className="card bg-danger rounded-sm d-flex justify-content-center align-items-center mt-2"
                    style={{ width: "4rem", height: "3rem" }}
                  >
                    <MdCreditCard
                      style={{ color: "white", width: "2rem", height: "2rem" }}
                    />
                  </div>
                  <h5 className="card-title mb-2 fs-4 fw-bold mt-3">
                    Test Code
                  </h5>
                  <p className="card-text">
                    Test the efficiency and accuracy of the code with our
                    pre-built test-cases.
                  </p>
                  {/* <!-- <a href="list.html" class="stretched-link"></a> --> */}
                </div>
              </div>
            </div>
            {/* <!-- topic --> */}
            <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div
                class="card match-height mt-3 "
                style={{ height: "13.5rem" }}
              >
                <div class="card-body shadow rounded bg-white transition hover:bg-gray-200 p-3">
                  <div
                    className="card bg-danger rounded-sm d-flex justify-content-center align-items-center mt-2"
                    style={{ width: "4rem", height: "3rem" }}
                  >
                    <PiPackageFill
                      style={{ color: "white", width: "2rem", height: "2rem" }}
                    />
                  </div>
                  <h5 className="card-title mb-2 fs-4 fw-bold mt-3">
                    Submit Code
                  </h5>
                  <p className="card-text">
                    Submit your code to log process and check your code
                    acceptance.
                  </p>
                  {/* <!-- <a href="list.html" class="stretched-link"></a> --> */}
                </div>
              </div>
            </div>
            {/* <!-- topic --> */}
            <div class="col-lg-3 col-md-4 col-sm-6 mb-4 border-0">
              <div class="card match-height mt-3">
                <div class="card-body shadow rounded bg-white transition hover:bg-gray-200 p-3">
                  <div
                    className="card bg-danger rounded-sm d-flex justify-content-center align-items-center mt-2"
                    style={{ width: "4rem", height: "3rem" }}
                  >
                    <FiSettings
                      style={{ color: "white", width: "2rem", height: "2rem" }}
                    />
                  </div>
                  <h5 className="card-title mb-2 fs-4 fw-bold mt-3">
                    Review Reports
                  </h5>
                  <p className="card-text">
                    Gauge and monitor your progress with weekly
                    reports,leaderboard and scores.
                  </p>
                  {/* <!-- <a href="list.html" class="stretched-link"></a> --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* feature #1 */}

      <div class="container mt-5">
        <div class="row align-items-center">
          <div class="col-md-6 mt-5">
            <div class="all-container">
              <div>
                <div>
                  <h4 className="heading fs-4 font-weight-bolder text-warning ">
                    #1 CodingJudge Built in content Pool
                  </h4>
                  <h1 className="fs-1 fw-bold">
                    Practice Questions and assessments across domain!
                  </h1>
                  <p className="" style={{ fontSize: "15px" }}>
                    Provide hands-on experience to your students and access
                    their skillset acorss all roles.
                  </p>

                  <div class="div-block-13">
                    <div
                      className="alert checkmarks rounded d-flex  py-4 px-2 gap-1 rounded "
                      style={{
                        backgroundColor: "rgb(238, 240, 249)",
                        alignItems: "center",
                      }}
                    >
                      <FaRegCheckSquare
                        className="mb-1 ml-4"
                        style={{ color: "rgb(129, 199, 132)" }}
                      />
                      <p
                        className="mb-0 ml-4 "
                        style={{
                          fontSize: "15px",
                          fontWeight: "600",
                          textAlign: "center",
                        }}
                      >
                        10+ Coding Languages and 50+ Technology Frameworks.
                      </p>
                    </div>
                    <div
                      className="alert checkmarks rounded d-flex  py-4 px-2 gap-1 rounded "
                      style={{
                        backgroundColor: "rgb(238, 240, 249)",
                        alignItems: "center",
                      }}
                    >
                      <FaRegCheckSquare
                        className="mb-1 ml-4"
                        style={{ color: "rgb(129, 199, 132)" }}
                      />
                      <p
                        className="mb-0 ml-4 "
                        style={{
                          fontSize: "15px",
                          fontWeight: "600",
                          textAlign: "center",
                        }}
                      >
                        In-built Test cases for auto-evaluation and tailored
                        feedback.
                      </p>
                    </div>
                    <div
                      className="alert checkmarks rounded d-flex  py-4 px-2 gap-1 rounded "
                      style={{
                        backgroundColor: "rgb(238, 240, 249)",
                        alignItems: "center",
                      }}
                    >
                      <FaRegCheckSquare
                        className="mb-1 ml-4"
                        style={{ color: "rgb(129, 199, 132)" }}
                      />
                      <p
                        className="mb-0 ml-4 "
                        style={{
                          fontSize: "15px",
                          fontWeight: "600",
                          textAlign: "center",
                        }}
                      >
                        Coding and development problems, Technical and aptitude
                        MCQs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="fs-5 fw-bold mt-3">We've Got you covered</p>
          </div>
          <div class="col-md-6">
            <div style={{ position: "relative" }}>
              <img
                src="https://assets-global.website-files.com/63bc05263541dd3206f17b98/63f21eb10314aa9fc0353275_Rectangle%2082.svg"
                loading="eager"
                alt=""
                class="right-grid-image"
                style={{
                  top: 0,
                  left: 0,
                  width: "97%",
                  height: "88%",
                  marginLeft: "24px",
                }}
              />
              <img
                src="https://codingjudgeappimagesstatic.s3.ap-south-1.amazonaws.com/static-files/Super+(2).png"
                class="z-index"
                alt=""
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "97%",
                  height: "88%",
                  marginLeft: "24px",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Feature #2 */}
      <div class="container mt-5">
        <div class="row align-items-center">
          <div class="col-md-6">
            <div style={{ position: "relative" }}>
              <img
                src="https://assets-global.website-files.com/63bc05263541dd3206f17b98/63ef1f23b6792e4ccc7b30d6_Rectangle%2025.svg"
                loading="eager"
                alt=""
                class="right-grid-image"
                style={{
                  top: 0,
                  left: 0,
                  width: "102%",
                  height: "103%",
                }}
              />
              <img
                src="https://codingjudgeappimagesstatic.s3.ap-south-1.amazonaws.com/static-files/Super+(4).png"
                class="z-index"
                alt=""
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "97%",
                  height: "80%",
                }}
              />
            </div>
          </div>
          <div class="col-md-6 mt-5">
            <div class="all-container">
              <div>
                <div>
                  <h4
                    className="heading fs-4 font-weight-bolder text-warning"
                    style={{ fontSize: "15px", marginLeft: "24px" }}
                  >
                    #2 Automated Email Reports and dashboards
                  </h4>
                  <h1
                    className="fs-1 fw-bold"
                    style={{ fontSize: "15px", marginLeft: "24px" }}
                  >
                    Measure the progress and Performance
                  </h1>
                  <p
                    className=""
                    style={{ fontSize: "15px", marginLeft: "24px" }}
                  >
                    Measure and manage your cohort with live-data dashboards and
                    Email Reports
                  </p>

                  <div class="div-block-13">
                    <div
                      className="alert checkmarks rounded d-flex  py-4 px-2 gap-1 rounded "
                      style={{
                        backgroundColor: "rgb(238, 240, 249)",
                        alignItems: "center",
                        marginLeft: "24px",
                      }}
                    >
                      <FaRegCheckSquare
                        className="mb-1 ml-4"
                        style={{ color: "rgb(129, 199, 132)" }}
                      />
                      <p
                        className="mb-0 ml-4 "
                        style={{
                          fontSize: "15px",
                          fontWeight: "600",
                          textAlign: "center",
                        }}
                      >
                        Engagement Numbers, submissions, overall performance
                        etc.
                      </p>
                    </div>
                    <div
                      className="alert checkmarks rounded d-flex  py-4 px-2 gap-1 rounded "
                      style={{
                        backgroundColor: "rgb(238, 240, 249)",
                        alignItems: "center",
                        marginLeft: "24px",
                      }}
                    >
                      <FaRegCheckSquare
                        className="mb-1 ml-4"
                        style={{ color: "rgb(129, 199, 132)" }}
                      />
                      <p
                        className="mb-0 ml-4 "
                        style={{
                          fontSize: "15px",
                          fontWeight: "600",
                          textAlign: "center",
                        }}
                      >
                        Leaderboard and Streaks count to self-drive the cohort.
                      </p>
                    </div>
                    <div
                      className="alert checkmarks rounded d-flex  py-4 px-2 gap-1 rounded "
                      style={{
                        backgroundColor: "rgb(238, 240, 249)",
                        alignItems: "center",
                        marginLeft: "24px",
                      }}
                    >
                      <FaRegCheckSquare
                        className="mb-1 ml-4"
                        style={{ color: "rgb(129, 199, 132)" }}
                      />
                      <p
                        className="mb-0 ml-4 "
                        style={{
                          fontSize: "15px",
                          fontWeight: "600",
                          textAlign: "center",
                        }}
                      >
                        Customisable frequency & parameters for email reports.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p
              className="fs-5 fw-bold mt-3"
              style={{
                marginLeft: "24px",
              }}
            >
              We've Got you covered
            </p>
          </div>
        </div>
      </div>

      {/* Feature #3 */}
      <div class="container mt-5">
        <div class="row align-items-center">
          <div class="col-md-6 mt-5">
            <div class="all-container">
              <div>
                <div>
                  <h4 className="heading fs-4 font-weight-bolder text-warning ">
                    #3 AI Powered Proctoring
                  </h4>
                  <h1 className="fs-1 fw-bold">
                    Gen-AI for proctoring and fair evaluation
                  </h1>
                  <p className="" style={{ fontSize: "15px" }}>
                    The platform will ease your efforts while you measure your
                    students' readiness and skills .
                  </p>

                  <div class="div-block-13">
                    <div
                      className="alert checkmarks rounded d-flex  py-4 px-2 gap-1 rounded "
                      style={{
                        backgroundColor: "rgb(238, 240, 249)",
                        alignItems: "center",
                      }}
                    >
                      <FaRegCheckSquare
                        className="mb-1 ml-4"
                        style={{ color: "rgb(129, 199, 132)" }}
                      />
                      <p
                        className="mb-0 ml-4 "
                        style={{
                          fontSize: "15px",
                          fontWeight: "600",
                          textAlign: "center",
                        }}
                      >
                        Real Time face recognition and alerting mechanism.
                      </p>
                    </div>
                    <div
                      className="alert checkmarks rounded d-flex  py-4 px-2 gap-1 rounded "
                      style={{
                        backgroundColor: "rgb(238, 240, 249)",
                        alignItems: "center",
                      }}
                    >
                      <FaRegCheckSquare
                        className="mb-1 ml-4"
                        style={{ color: "rgb(129, 199, 132)" }}
                      />
                      <p
                        className="mb-0 ml-4 "
                        style={{
                          fontSize: "15px",
                          fontWeight: "600",
                          textAlign: "center",
                        }}
                      >
                        Capturing Instaces of student trying unfair and tab
                        switches.
                      </p>
                    </div>
                    <div
                      className="alert checkmarks rounded d-flex  py-4 px-2 gap-1 rounded "
                      style={{
                        backgroundColor: "rgb(238, 240, 249)",
                        alignItems: "center",
                      }}
                    >
                      <FaRegCheckSquare
                        className="mb-1 ml-4"
                        style={{ color: "rgb(129, 199, 132)" }}
                      />
                      <p
                        className="mb-0 ml-4 "
                        style={{
                          fontSize: "15px",
                          fontWeight: "600",
                          textAlign: "center",
                        }}
                      >
                        Post assessment Plagarism report with counts and
                        screenshots .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="fs-5 fw-bold mt-3">We've Got you covered</p>
          </div>
          <div class="col-md-6">
            <div style={{ position: "relative" }}>
              <img
                src="https://assets-global.website-files.com/63bc05263541dd3206f17b98/63f21eb10314aa9fc0353275_Rectangle%2082.svg"
                loading="eager"
                alt=""
                class="right-grid-image"
                style={{
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  marginLeft: "29px",
                }}
              />
              <img
                src="https://codingjudgeappimagesstatic.s3.ap-south-1.amazonaws.com/Super+(5).png"
                class="z-index"
                alt=""
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "97%",
                  height: "88%",
                  marginLeft: "29px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end feature --> */}

      {/* <!-- active stats --> */}
      <section className="section pb-0 border-0 mt-4">
        <h2
          className="container section-title"
          style={{ fontSize: "35px", fontWeight: "700" }}
        >
          Our Stats
        </h2>
        <div className="container text-center ">
          <div className="row">
            <div className="col-12 mb-4">
              <div
                className="card match-height border-0 "
                style={{
                  height: "10rem",
                }}
              >
                <div
                  className="card-body rounded shadow"
                  style={{
                    backgroundColor: "white",
                  }}
                >
                  <div className="row text-center">
                    {/* <!-- Active Users --> */}
                    <div className="col-lg-4 col-md-4 col-sm-12 mt-4">
                      <h3
                        className="card-title h4"
                        style={{ fontSize: "25px", fontWeight: "600" }}
                      >
                        Active Users
                      </h3>
                      <div
                        className="d-flex"
                        style={{
                          marginLeft: "31%",
                        }}
                      >
                        <h2
                          style={{
                            fontSize: "40px",
                            fontWeight: "700",
                          }}
                        >
                          1500+
                        </h2>
                        <FaArrowTrendUp
                          style={{
                            color: "green",
                            width: "2rem",
                            height: "2rem",
                          }}
                        />
                      </div>
                    </div>
                    {/*  <!-- Code Submissions --> */}
                    <div className="col-lg-4 col-md-4 col-sm-12 mt-4">
                      <h3
                        className="card-title h4"
                        style={{ fontSize: "25px", fontWeight: "600" }}
                      >
                        Code Submissions
                      </h3>
                      <div
                        className="d-flex"
                        style={{
                          marginLeft: "31%",
                        }}
                      >
                        <h2 style={{ fontSize: "40px", fontWeight: "700" }}>
                          5500+
                        </h2>
                        <FaArrowTrendUp
                          style={{
                            color: "green",
                            width: "2rem",
                            height: "2rem",
                          }}
                        />
                      </div>
                    </div>

                    {/* <!-- Question Pool --> */}
                    <div class="col-lg-4 col-md-4 col-sm-12 mt-4">
                      <h3
                        class="card-title h4"
                        style={{ fontSize: "25px", fontWeight: "600" }}
                      >
                        Question Pool
                      </h3>
                      <div
                        className="d-flex"
                        style={{
                          marginLeft: "33%",
                        }}
                      >
                        <h2 style={{ fontSize: "40px", fontWeight: "700" }}>
                          400+
                        </h2>
                        <FaArrowTrendUp
                          style={{
                            color: "green",
                            width: "2rem",
                            height: "2rem",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end active --> */}

      {/* How it Works - Start*/}
      <HowItWorksSection />

      {/* How it Works - End*/}
      {/* <Carousel/> */}
    </>
  );
};

export default Home;
