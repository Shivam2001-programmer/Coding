import React, { useEffect } from "react";
import "./HowItWorksSection.css";
const HowItWorksSection = () => {
  const srcList = [
    "codingjudgeappimagesstatic.s3.ap-south-1.amazonaws.com/static-files/video2.mp4",
    "codingjudgeappimagesstatic.s3.ap-south-1.amazonaws.com/static-files/video1.mp4",
    "codingjudgeappimagesstatic.s3.ap-south-1.amazonaws.com/static-files/video3.mp4",
    "codingjudgeappimagesstatic.s3.ap-south-1.amazonaws.com/static-files/video4.mp4",
  ];
  let counter = 0;

  const getLength = () => {
    // const duration = video.duration;
    // setTimeout(() => {
    //   video.src = srcList[++counter];
    // }, duration);
    // // const endTime = duration + video.currentTime;
    // console.log(`Duration ${duration}`);
    // console.log(`EndTime ${endTime}`);
  };

  useEffect(() => {
    // video.src = srcList[0];
    const video = document.querySelector("#myVideo");
    console.log(Object.create(video));
  }, []);

  return (
    <section class="section pb-0">
      <div class="container">
        <h2 class="section-title">How it works!</h2>
        <div class="cards-for-wrapper">
          <div
            class="cards-for-index carousel slide"
            data-ride="carousel"
            id="myCarousel"
          >
            <div class="custom-card-class" data-video-id="video-id-1">
              <div class="mt-3">
                <div class="custom-card-content mt-0 margin-custom">
                  <h3 class="custom-card-headers">Questions Pool </h3>
                  <p class="card-text text-sm mb-2">
                    Weekly segregation of the problems with topic and difficulty
                    mapping .
                  </p>
                </div>
              </div>
            </div>
            <div class="custom-card-class" data-video-id="video-id-2">
              <div class="mt-3">
                <div class="custom-card-content mt-0 margin-custom">
                  <h3 class="custom-card-headers">Engagement Enhancers</h3>
                  <p class="card-text text-sm mb-2">
                    Leaderboard and streak count to keep them engaged and
                    consistent.
                  </p>
                </div>
              </div>
            </div>
            <div class="custom-card-class" data-video-id="video-id-3">
              <div class="mt-3">
                <div class="custom-card-content mt-0 margin-custom">
                  <h3 class="custom-card-headers">
                    Compiler with Auto-Evaluation
                  </h3>
                  <p class="card-text text-sm mb-2">
                    Code, execute, evaluate! With support over 7+ languages and
                    test cases.
                  </p>
                </div>
              </div>
            </div>
            <div class="custom-card-class" data-video-id="video-id-4">
              <div class="mt-3">
                <div class="custom-card-content mt-0 margin-custom">
                  <h3 class="custom-card-headers">
                    Full-Stack Dev with live-preview{" "}
                  </h3>
                  <p class="card-text text-sm mb-2">
                    Full-Stack problems with live preview to enhance development
                    skills.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Videos --> */}
          <div class="custom-video-class" data-video-id="video-id-1">
            {/* <!-- https://drive.google.com/file/d/1huhO1je1tzKN_GIdBvDwpb_Vq6J10JhZ/view?usp=sharing -->
          <!-- <iframe src="https://drive.google.com/file/d/1TdTiVdtKKCcP_C0ztyCDr4An2R1yq-8I/preview" width="100%" height="450" allow="autoplay"></iframe> --> */}
            <video
              width="100%"
              height="450"
              class="mt-n1"
              controls=""
              autoplay="true"
              muted="true"
              id="myVideo"
              // onLoadedMetadata={() => {
              //   getLength();
              // }}
            >
              <source
                src="https://codingjudgeappimagesstatic.s3.ap-south-1.amazonaws.com/static-files/video2.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="custom-video-class" data-video-id="video-id-2">
            {/* <!-- <iframe src="https://drive.google.com/file/d/1TdTiVdtKKCcP_C0ztyCDr4An2R1yq-8I/preview" width="100%" height="450" allow="autoplay"></iframe> --> */}
            <video
              width="100%"
              height="450"
              class="mt-n1"
              controls=""
              autoplay="true"
              muted="true"
              src="https://codingjudgeappimagesstatic.s3.ap-south-1.amazonaws.com/static-files/video1.mp4"
            >
              {/* <source
                src="https://codingjudgeappimagesstatic.s3.ap-south-1.amazonaws.com/static-files/video1.mp4"
                type="video/mp4"
              /> */}
              Your browser does not support the video tag.
            </video>
          </div>

          <div class="custom-video-class" data-video-id="video-id-3">
            {/* <!-- <iframe src="https://drive.google.com/file/d/1d5PYyyBG3SHV9sG4gyVZwjz03FOES_7P/preview" width="640" height="480" allow="autoplay"></iframe> --> */}
            <video
              width="100%"
              height="450"
              class="mt-n1"
              controls=""
              autoplay="true"
              muted="true"
            >
              <source
                src="https://codingjudgeappimagesstatic.s3.ap-south-1.amazonaws.com/static-files/video3.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="custom-video-class" data-video-id="video-id-4">
            {/* <!-- <iframe src="https://drive.google.com/file/d/1wSpMXArHEBLpoGd3XFFTle16KZw6vAJN/preview" width="640" height="480" allow="autoplay"></iframe> --> */}
            <video
              width="100%"
              height="450"
              class="mt-n1"
              controls=""
              autoplay="true"
              muted="true"
            >
              <source
                src="https://codingjudgeappimagesstatic.s3.ap-south-1.amazonaws.com/static-files/video4.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
