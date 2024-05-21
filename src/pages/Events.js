import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
// import Eventlist from "../components/Event-list";
// import Wave from "../components/Wave";
import { fetchEventData } from "../reducer/thunks";
import { useDispatch, useSelector } from "react-redux";
import "./Events.css";

import "./eventes2.css";

const EventsSection = () => {
  const [activeTab, setActiveTab] = useState("div1");
  const [activeDays, setActiveDays] = useState("");

  const dispatch = useDispatch();

  const showDiv = (divId) => {
    setActiveTab(divId);
  };

  const {
    eventlist,
    loading: bannerLoading,
    error: bannerError,
  } = useSelector((state) => state.eventlist);

  useEffect(() => {
    dispatch(fetchEventData());
  }, [dispatch]);

  // calender

  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  // hover message

  const [isHovered, setIsHovered] = useState(false);

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1899 }, (_, i) => currentYear - i);



  const wavesData = [
    {
      src: require("../constant/images/property.png"),
      description:
        "Delve into the world of exquisite properties, where architectural marvels meet serene landscapes. From charming cottages nestled amidst lush greenery to sleek urban apartments boasting panoramic views, our collection showcases a diverse range of properties tailored to every discerning taste. Each property embodies timeless elegance and impeccable craftsmanship, offering a harmonious blend of luxury and comfort. Explore enchanting gardens, inviting interiors, and state-of-the-art amenities that redefine modern living. Whether you seek a tranquil retreat or a vibrant urban abode, our curated selection ensures that your dream home is just a click away.",
    },
    {
      src: require("../constant/images/teddy-bear.png"),
      description:
        "Embark on a journey of cuddles and companionship with our adorable teddy bears. Crafted with the utmost care and attention to detail, each teddy bear exudes warmth and charm, ready to become your loyal friend for life. From classic teddy bears with soft, plush fur to whimsical designs that spark joy, our collection offers something for every age and occasion. Whether you're looking for the perfect gift to celebrate a special milestone or simply craving some cuddle therapy, our cuddly companions are here to spread love and laughter. Embrace the magic of childhood nostalgia and create cherished memories with our irresistible teddy bears",
    },
    {
      src: require("../constant/images/property.png"),
      description:
        "Delve into the world of exquisite properties, where architectural marvels meet serene landscapes. From charming cottages nestled amidst lush greenery to sleek urban apartments boasting panoramic views, our collection showcases a diverse range of properties tailored to every discerning taste. Each property embodies timeless elegance and impeccable craftsmanship, offering a harmonious blend of luxury and comfort. Explore enchanting gardens, inviting interiors, and state-of-the-art amenities that redefine modern living. Whether you seek a tranquil retreat or a vibrant urban abode, our curated selection ensures that your dream home is just a click away.",
    },
    {
      src: require("../constant/images/teddy-bear.png"),
      description:
        "Embark on a journey of cuddles and companionship with our adorable teddy bears. Crafted with the utmost care and attention to detail, each teddy bear exudes warmth and charm, ready to become your loyal friend for life. From classic teddy bears with soft, plush fur to whimsical designs that spark joy, our collection offers something for every age and occasion. Whether you're looking for the perfect gift to celebrate a special milestone or simply craving some cuddle therapy, our cuddly companions are here to spread love and laughter. Embrace the magic of childhood nostalgia and create cherished memories with our irresistible teddy bears",
    },
    {
      src: require("../constant/images/property.png"),
      description:
        "Delve into the world of exquisite properties, where architectural marvels meet serene landscapes. From charming cottages nestled amidst lush greenery to sleek urban apartments boasting panoramic views, our collection showcases a diverse range of properties tailored to every discerning taste. Each property embodies timeless elegance and impeccable craftsmanship, offering a harmonious blend of luxury and comfort. Explore enchanting gardens, inviting interiors, and state-of-the-art amenities that redefine modern living. Whether you seek a tranquil retreat or a vibrant urban abode, our curated selection ensures that your dream home is just a click away.",
    },
    {
      src: require("../constant/images/teddy-bear.png"),
      description:
        "Embark on a journey of cuddles and companionship with our adorable teddy bears. Crafted with the utmost care and attention to detail, each teddy bear exudes warmth and charm, ready to become your loyal friend for life. From classic teddy bears with soft, plush fur to whimsical designs that spark joy, our collection offers something for every age and occasion. Whether you're looking for the perfect gift to celebrate a special milestone or simply craving some cuddle therapy, our cuddly companions are here to spread love and laughter. Embrace the magic of childhood nostalgia and create cherished memories with our irresistible teddy bears",
    },
    {
      src: require("../constant/images/property.png"),
      description:
        "Delve into the world of exquisite properties, where architectural marvels meet serene landscapes. From charming cottages nestled amidst lush greenery to sleek urban apartments boasting panoramic views, our collection showcases a diverse range of properties tailored to every discerning taste. Each property embodies timeless elegance and impeccable craftsmanship, offering a harmonious blend of luxury and comfort. Explore enchanting gardens, inviting interiors, and state-of-the-art amenities that redefine modern living. Whether you seek a tranquil retreat or a vibrant urban abode, our curated selection ensures that your dream home is just a click away.",
    },
    {
      src: require("../constant/images/teddy-bear.png"),
      description:
        "Embark on a journey of cuddles and companionship with our adorable teddy bears. Crafted with the utmost care and attention to detail, each teddy bear exudes warmth and charm, ready to become your loyal friend for life. From classic teddy bears with soft, plush fur to whimsical designs that spark joy, our collection offers something for every age and occasion. Whether you're looking for the perfect gift to celebrate a special milestone or simply craving some cuddle therapy, our cuddly companions are here to spread love and laughter. Embrace the magic of childhood nostalgia and create cherished memories with our irresistible teddy bears",
    },
    {
      src: require("../constant/images/property.png"),
      description:
        "Delve into the world of exquisite properties, where architectural marvels meet serene landscapes. From charming cottages nestled amidst lush greenery to sleek urban apartments boasting panoramic views, our collection showcases a diverse range of properties tailored to every discerning taste. Each property embodies timeless elegance and impeccable craftsmanship, offering a harmonious blend of luxury and comfort. Explore enchanting gardens, inviting interiors, and state-of-the-art amenities that redefine modern living. Whether you seek a tranquil retreat or a vibrant urban abode, our curated selection ensures that your dream home is just a click away.",
    },
    {
      src: require("../constant/images/teddy-bear.png"),
      description:
        "Embark on a journey of cuddles and companionship with our adorable teddy bears. Crafted with the utmost care and attention to detail, each teddy bear exudes warmth and charm, ready to become your loyal friend for life. From classic teddy bears with soft, plush fur to whimsical designs that spark joy, our collection offers something for every age and occasion. Whether you're looking for the perfect gift to celebrate a special milestone or simply craving some cuddle therapy, our cuddly companions are here to spread love and laughter. Embrace the magic of childhood nostalgia and create cherished memories with our irresistible teddy bears",
    },
    {
      src: require("../constant/images/property.png"),
      description:
        "Delve into the world of exquisite properties, where architectural marvels meet serene landscapes. From charming cottages nestled amidst lush greenery to sleek urban apartments boasting panoramic views, our collection showcases a diverse range of properties tailored to every discerning taste. Each property embodies timeless elegance and impeccable craftsmanship, offering a harmonious blend of luxury and comfort. Explore enchanting gardens, inviting interiors, and state-of-the-art amenities that redefine modern living. Whether you seek a tranquil retreat or a vibrant urban abode, our curated selection ensures that your dream home is just a click away.",
    },
    {
      src: require("../constant/images/teddy-bear.png"),
      description:
        "Embark on a journey of cuddles and companionship with our adorable teddy bears. Crafted with the utmost care and attention to detail, each teddy bear exudes warmth and charm, ready to become your loyal friend for life. From classic teddy bears with soft, plush fur to whimsical designs that spark joy, our collection offers something for every age and occasion. Whether you're looking for the perfect gift to celebrate a special milestone or simply craving some cuddle therapy, our cuddly companions are here to spread love and laughter. Embrace the magic of childhood nostalgia and create cherished memories with our irresistible teddy bears",
    },
  ];

  const getImageSource = (divId) => {
    switch (divId) {
      case "div1":
        return "assets/images/Banner3.webp";
      case "div2":
        return "assets/images/Banner2.webp";
      case "div3":
        return "assets/images/Banner1.webp";
      default:
        return "";
    }
  };

  return (
    <>
      <Header />

      <section className="py-5 mt-80">
        <div className="no">
          {/* <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="section-heading">
                <h3 className="theme-bg-text">Event Details</h3>
              </div>
            </div>
          </div> */}

          <div className="row justify-content-center text-center ">
            <div className="position-relative">
              <img
                src={require("../constant/images/EventPageAnimation.gif")}
                alt="Upcoming Sale"
                className="img-fluid "
              />
              <div className="col-md-12 row d-flex justify-content-center position-absolute top-0 ">
                {/* <div className=" col-md-9 row d-flex justify-content-center event-tap ">
                  <p className="col-md-3 event-text-color">Upcoming Events</p>
                  <p className="col-md-3 event-item">
                    40% di sconto dal 20 aprile al 5 maggio!
                  </p>
                  <p className="col-md-3 event-text-color">India</p>
                </div> */}

                {/* <div className="about-breadcum-content d-md-block">
                  <div className="row justify-content-center">
                    <div className="col-md-12 mt-5">
                      <h3 className="text-main-color">Sound of Christmas 2024</h3>
                      <h5>Your Ultimate Destination for Trendsetting Fashion</h5>
                      <a href="/event-details" className="button">
                        More Details
                      </a>
                    </div>
                  </div>
                </div> */}
              </div>

              {/* <div className="waveContainer" style={{
                backgroundImage : `url(${require("../../src/constant/images/Dots.png")})`
              }}>
                {eventlist && eventlist.events.map((wave, index) => (
                  <Wave key={index} src={wave.imageUrl} title={wave.name} description={wave.description} />
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <section style={{ position: "relative" }}>
        <div className="container py-5 my" style={{ position: "relative" }}>
          {/* <div className="row event-cont">
            <div className="col-md-8 d-flex justify-content-center align-items-center my-3 ">
              <div className="event-img">
                <img
                  src="assets/images/Category.png"
                  alt="category"
                  className="w-100"
                />

                <div className="event-overlay hover-container"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}>
                  {isHovered && <div className="message">

                  </div>}
                </div>
              </div>
              <div id="first-div" className="first-div d-flex align-items-center" href="" title="">
                <table
                  className="months-table w-100 py-2  bg-transparent "
                  style={{ marginTop: "25px ", padding: "5px" }}
                >
                  {activeDays === '' ? <tbody>
                    <tr className="months-row">
                      <td onClick={() => setActiveDays("January")} className="month text-dark rounded-pill">Jan</td>
                      <td onClick={() => setActiveDays("February")} className="month text-dark rounded-pill">Feb</td>
                      <td onClick={() => setActiveDays("March")} className="month text-dark rounded-pill">Mar</td>
                      <td onClick={() => setActiveDays("April")} className="month text-dark rounded-pill">Apr</td>
                      <td onClick={() => setActiveDays("May")} className="month text-dark rounded-pill">May</td>
                      <td onClick={() => setActiveDays("June")} className="month text-dark rounded-pill">Jun</td>
                    </tr>
                    <tr className="months-row">
                      <td onClick={() => setActiveDays("July")} className="month text-dark rounded-pill">Jul</td>
                      <td onClick={() => setActiveDays("August")} className="month text-dark rounded-pill">Aug</td>
                      <td onClick={() => setActiveDays("September")} className="month text-dark rounded-pill">Sep</td>
                      <td onClick={() => setActiveDays("October")} className="month text-dark rounded-pill">Oct</td>
                      <td onClick={() => setActiveDays("November")} className="month text-dark rounded-pill">Nov</td>
                      <td onClick={() => setActiveDays("December")} className="month text-dark rounded-pill">Dec</td>
                    </tr>
                  </tbody> : <tbody>
                    <tr class="single-months-row">
                      <td className="single-month text-dark month-disp  rounded-pill text-center ">
                        <span className="mont-span">
                          {activeDays}
                        </span>
                      </td>
                    </tr>
                  </tbody>}


                </table>
                <div className="d-flex align-items-center text-center mt-3 w-100 d-none">
                  <table
                    className="single-months-table w-100 py-2  "
                    style={{ marginTop: "-3px ", padding: "1px" }}
                  >
                    <tbody>
                      <tr class="single-months-row">
                        <td className="single-month text-dark px-3 py-2  fs-2  rounded-pill text-center w-100">
                          January
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                id="second-div"
                className="second-div d-flex align-items-center"
                href=""
                title=""
              >
                <div>
                  <table
                    className="months-table w-100 py-2 bg-transparent "
                    style={{ marginTop: "1px ", padding: "3px" }}
                  >
                    <tbody>
                      <tr class="months-row">
                        <td>
                          <span
                            className="left-button fa fa-chevron-left"
                            id="prev"
                          ></span>
                        </td>
                        {activeDays === "" ?
                          <>
                            <tr className="table-row">

                              <td className="month text-dark px-3  event-image">2024</td>
                              <td className="month text-dark px-3  event-image">2025</td>
                              <td className="month text-dark px-3  event-image">2026</td>
                            </tr>
                          </> :
                          <>
                            <tr className="table-row">

                              <td className="month text-dark px-3  event-image-days">1</td>
                              <td className="month text-dark px-3  event-image-days">2</td>
                              <td className="month text-dark px-3  event-image-days">3</td>
                              <td className="month text-dark px-3  event-image-days">4</td>
                              <td className="month text-dark px-3  event-image-days">5</td>
                            </tr>
                            <tr className="table-row">
                              <td className="month text-dark px-3  event-image-days">6</td>
                              <td className="month text-dark px-3  event-image-days">7</td>
                              <td className="month text-dark px-3  event-image-days">8</td>
                              <td className="month text-dark px-3  event-image-days">9</td>
                              <td className="month text-dark px-3  event-image-days">10</td>
                            </tr>
                          </>
                        }


                        <td>
                          <span
                            className="right-button fa fa-chevron-right"
                            id="next"
                          ></span>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table className="dates-table w-100 d-none">
                    <tbody className="tbody">
                      <tr className="table-row" />
                      <tr className="table-row">
                        <td className="table-date nil"> &nbsp; </td>
                        <td className="table-date nil">&nbsp;</td>
                        <td className="table-date nil">&nbsp;</td>
                        <td className="table-date nil">&nbsp;</td>
                        <td className="table-date active-date">1</td>
                        <td className="table-date">2</td>
                        <td className="table-date">3</td>
                      </tr>
                      <tr className="table-row">
                        <td className="table-date">4</td>
                        <td className="table-date">5</td>
                        <td className="table-date">6</td>
                        <td className="table-date">7</td>
                        <td className="table-date">8</td>
                        <td className="table-date">9</td>
                        <td className="table-date">10</td>
                      </tr>
                      <tr className="table-row">
                        <td className="table-date">11</td>
                        <td className="table-date">12</td>
                        <td className="table-date">13</td>
                        <td className="table-date">14</td>
                        <td className="table-date">15</td>
                        <td className="table-date">16</td>
                        <td className="table-date">17</td>
                      </tr>
                      <tr className="table-row">
                        <td className="table-date">18</td>
                        <td className="table-date">19</td>
                        <td className="table-date">20</td>
                        <td className="table-date">21</td>
                        <td className="table-date">22</td>
                        <td className="table-date">23</td>
                        <td className="table-date">24</td>
                      </tr>
                      <tr className="table-row">
                        <td className="table-date">25</td>
                        <td className="table-date">26</td>
                        <td className="table-date">27</td>
                        <td className="table-date">28</td>
                        <td className="table-date">29</td>
                        <td className="table-date">30</td>
                        <td className="table-date">31</td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </div> */}
          <div className="main-event-cont">
            <div className="background-div">
              <div className="vending-machine">
                <div className="shelves">
                  <div className="shelf">
                    <div className="jar">

                    </div>
                    <div className="jar">

                    </div>
                    <div className="jar">

                    </div>
                    <div className="jar">

                    </div>
                  </div>
                  <div className="shelf">
                    <div className="jar">

                    </div>
                    <div className="jar">

                    </div>
                    <div className="jar">

                    </div>
                    <div className="jar">

                    </div>
                  </div>
                  <div className="shelf">
                    <div className="jar">

                    </div>
                    <div className="jar">

                    </div>
                    <div className="jar">

                    </div>
                    <div className="jar">

                    </div>
                  </div>
                  <div className="shelf">
                    <div className="jar">

                    </div>
                    <div className="jar">

                    </div>
                    <div className="jar">

                    </div>
                    <div className="jar">

                    </div>
                  </div>
                </div>
                <div className="controls">
                  <div className="cont-display">

                    <div className="row month-sec px-2 mb-2">
                      <div className="col-2 p-0 text-center">
                        <div className="mont">
                          jan
                        </div>
                      </div>
                      <div className="col-2 p-0 text-center">
                        <div className="mont">
                          Feb
                        </div>
                      </div>
                      <div className="col-2 p-0 text-center">
                        <div className="mont">
                          Mar
                        </div>
                      </div>
                      <div className="col-2 p-0 text-center">
                        <div className="mont">
                          Apr
                        </div>
                      </div>
                      <div className="col-2 p-0 text-center">
                        <div className="mont">
                          May
                        </div>
                      </div>
                      <div className="col-2 p-0 text-center">
                        <div className="mont">
                          Jun
                        </div>
                      </div>
                      <div className="col-2 p-0 text-center">
                        <div className="mont">
                          Jul
                        </div>
                      </div>
                      <div className="col-2 p-0 text-center">
                        <div className="mont">
                          Aug
                        </div>
                      </div>
                      <div className="col-2 p-0 text-center">
                        <div className="mont">
                          Sep
                        </div>
                      </div>
                      <div className="col-2 p-0 text-center">
                        <div className="mont">
                          Oct
                        </div>
                      </div>
                      <div className="col-2 p-0 text-center">
                        <div className="mont">
                          Nov
                        </div>
                      </div>
                      <div className="col-2 p-0 text-center">
                        <div className="mont">
                          Dec
                        </div>
                      </div>

                      <>
                        <table
                          className="months-table w-100 py-2 bg-transparent mt-2"
                          style={{ marginTop: "1px ", padding: "3px" }}
                        >
                          <tbody>
                            <tr class="year-row">
                              <td>
                                <span
                                  className="left-button fa fa-chevron-left"
                                  id="prev"
                                ></span>
                              </td>
                              {activeDays === "" ?
                                <>
                                  <tr className="table-row">

                                    <td className="month text-dark px-3  event-image">2024</td>
                                    <td className="month text-dark px-3  event-image">2025</td>
                                    <td className="month text-dark px-3  event-image">2026</td>
                                  </tr>
                                </> :
                                <>
                                  <tr className="table-row">

                                    <td className="month text-dark px-3  event-image-days">1</td>
                                    <td className="month text-dark px-3  event-image-days">2</td>
                                    <td className="month text-dark px-3  event-image-days">3</td>
                                    <td className="month text-dark px-3  event-image-days">4</td>
                                    <td className="month text-dark px-3  event-image-days">5</td>
                                  </tr>
                                  <tr className="table-row">
                                    <td className="month text-dark px-3  event-image-days">6</td>
                                    <td className="month text-dark px-3  event-image-days">7</td>
                                    <td className="month text-dark px-3  event-image-days">8</td>
                                    <td className="month text-dark px-3  event-image-days">9</td>
                                    <td className="month text-dark px-3  event-image-days">10</td>
                                  </tr>
                                </>
                              }


                              <td>
                                <span
                                  className="right-button fa fa-chevron-right"
                                  id="next"
                                ></span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="event-content">
          <div className="card2">
            <h2>Select Your Events</h2>
            <div className="dropdown-container">
              <div className="two-cont">

                <select className="sel-2" value={year} onChange={(e) => setYear(e.target.value)}>
                  <option value="" disabled>Year</option>
                  {years.map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
                <select className="sel-2" value={month} onChange={(e) => setMonth(e.target.value)}>
                  <option value="" disabled>Month</option>
                  {months.map((m, index) => (
                    <option key={index} value={index + 1}>{m}</option>
                  ))}
                </select>
              </div>

              <select className="sel-3" value={day} onChange={(e) => setDay(e.target.value)}>
                <option value="" disabled>Day</option>
                {days.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>


              <button className="find-yer mt-4 px-4 py-2">FInd Event</button>

            </div>
          </div>

        </div>
      </section>





      <Gallery />
      <Footer />
    </>

  );
};

export default EventsSection;
