import React, { useState } from "react";
import "./qualification.css";

function Qualification() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>

      <span className="section__subtitle">my Personel Journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active  button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon "></i>{" "}
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active  button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification__section">
          {/* qualification active statues class here  */}

          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            {/* qualification data ========= */}

            <div className="qualification__data">
              <div>
                <h3 className="qualification__tital">M.C.A</h3>

                <span className="qualification__subtitle">
                  Ganpat University
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>06/2022 - Present,
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                {/* <span className="qualification__line"></span> */}
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <div>
                  <span className="qualification__rounder"> </span>
                  {/* <span className="qualification__line"></span> */}
                </div>
              </div>

              <div>
                <h3 className="qualification__tital">B.sc</h3>

                <span className="qualification__subtitle">
                  Ganpat University
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>06/2019 - 05/2022,
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__tital">HSC (XII) (GSEB)</h3>

                <span className="qualification__subtitle">
                  Sorath International School, Junagadh
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"> 03/2015 - 04/2016,</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                {/* <span className="qualification__line"></span> */}
              </div>
            </div>

            {/* ========== */}
          </div>

          {/* ///////////// */}

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__tital">Gig worker.</h3>

                <span className="qualification__subtitle">
                  at Freelancer.com
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2023 - present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* ========== */}
          </div>

          {/* ///////////// */}
        </div>
      </div>
    </section>
  );
}

export default Qualification;
