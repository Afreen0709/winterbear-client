import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel/dist/assets/owl.theme.green.css"; // Import any additional theme if needed

const LoyaltyList = () => {
  return (
    <section className="py-5 px-md-5 px-3">
      <div
        className="container-fluid rounded-5 pt-5 pb-3"
        style={{
          background: "#c3effb",
        }}
      >
        <div className=" theme-bg-text mb-2 fs-1  text-dark y-5 text-center rewards">
          May Rewards
        </div>

        <OwlCarousel
          className="owl-theme my-3 "
          loop
          margin={15}
          autoplay
          dots={false}
          autoplayTimeout={1800}
          smartSpeed={500}
          responsive={{
            0: {
              items: 1,
            },
            600: {
              items: 1,
            },
            1000: {
              items: 4,
            },
          }}
        >
          <div className="item">
            <img
              src="assets/images/Reward-1.png"
              className="w-100 d-block mx-auto px-md-5 px-3"
              alt="Gallery Item"
            />
            <p className="fw-bold fs-5 text-dark text-center lh-sm mb-0 mt-3">
              Heimish All Clean Heimish All Clean Heimish All Clean
            </p>
            <p className="fw-bold fs-2 text-dark text-center"> 150 points</p>
          </div>
          <div className="item">
            <img
              src="assets/images/Reward-2.png"
              className="w-100 d-block mx-auto px-md-5 px-3"
              alt="Gallery Item"
            />
            <p className="fw-bold fs-5 text-dark text-center lh-sm mb-0 mt-3">
              Heimish All Clean Heimish All Clean
            </p>
            <p className="fw-bold fs-2 text-dark text-center"> 150 points</p>
          </div>
          <div className="item">
            <img
              src="assets/images/Reward-3.png"
              className="w-100 d-block mx-auto px-md-5 px-3"
              alt="Gallery Item"
            />
            <p className="fw-bold fs-5 text-dark text-center lh-sm mb-0 mt-3">
              Heimish All Clean Heimish All Clean
            </p>
            <p className="fw-bold fs-2 text-dark text-center"> 150 points</p>
          </div>
          <div className="item">
            <img
              src="assets/images/Reward-4.png"
              className="w-100 d-block mx-auto px-md-5 px-3"
              alt="Gallery Item"
            />
            <p className="fw-bold fs-5 text-dark text-center lh-sm mb-0 mt-3">
              Heimish All Clean Heimish All Clean
            </p>
            <p className="fw-bold fs-2 text-dark text-center"> 150 points</p>
          </div>
          <div className="item">
            <img
              src="assets/images/Reward-1.png"
              className="w-100 d-block mx-auto px-md-5 px-3"
              alt="Gallery Item"
            />
            <p className="fw-bold fs-5 text-dark text-center lh-sm mb-0 mt-3">
              Heimish All Clean Heimish All Clean
            </p>
            <p className="fw-bold fs-2 text-dark text-center"> 150 points</p>
          </div>
          <div className="item">
            <img
              src="assets/images/Reward-2.png"
              className="w-100 d-block mx-auto px-md-5 px-3"
              alt="Gallery Item"
            />
            <p className="fw-bold fs-5 text-dark text-center lh-sm mb-0 mt-3">
              Heimish All Clean Heimish All Clean
            </p>
            <p className="fw-bold fs-2 text-dark text-center"> 150 points</p>
          </div>
          <div className="item">
            <img
              src="assets/images/Reward-3.png"
              className="w-100 d-block mx-auto px-md-5 px-3"
              alt="Gallery Item"
            />
            <p className="fw-bold fs-5 text-dark text-center lh-sm mb-0 mt-3">
              Heimish All Clean Heimish All Clean
            </p>
            <p className="fw-bold fs-2 text-dark text-center"> 150 points</p>
          </div>
          <div className="item">
            <img
              src="assets/images/Reward-4.png"
              className="w-100 d-block mx-auto px-md-5 px-3"
              alt="Gallery Item"
            />
            <p className="fw-bold fs-5 text-dark text-center lh-sm mb-0 mt-3">
              Heimish All Clean Heimish All Clean
            </p>
            <p className="fw-bold fs-2 text-dark text-center"> 150 points</p>
          </div>
        </OwlCarousel>

       
      </div>

      <p className="d-block mx-auto text-center my-3">
             <img src="assets/images/Asset-10ldpi.png" className="star1"/>
            </p>
    </section>
  );
};

export default LoyaltyList;
