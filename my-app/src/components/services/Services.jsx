import React, { useState } from "react";
import "./services.css";

const Services = () => {
  
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
            Web <br /> development  
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            view More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i onClick= {()=> toggleTab(0) } className="uil uil-times services__modal-close"> </i>
              <h3 className="services__modal-title"> Web development</h3>

              <p className="services__modal-description">
              Services with almost one-half year of experience in web devlopment. Providing quality work to clients and companies
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="bx bxs-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    i devlop Social networking website.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="bx bxs-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">i devlop New's websites.</p>
                </li>

                <li className="services__modal-service">
                  <i className="bx bxs-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    {" "}
                    i create Educational websites.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="bx bxs-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    
                  i devlop Business websites.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="bx bxs-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    
                  I develop all types of websites that clients need.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">

           App <br /> development 
             
            </h3>
          </div>

          <span onClick={() => toggleTab(2)} className="services__button">
            view More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className=  {
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"} >
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"> </i>
              <h3 className="services__modal-title">App development </h3>

              <p className="services__modal-description">
              "Passionate app developer with strong skills in Java, seeking opportunities to enhance my knowledge and contribute to innovative projects.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="bx bxs-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    i devlop Travel applications.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="bx bxs-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">i devlop Educational applications.</p>
                </li>

                <li className="services__modal-service">
                  <i className="bx bxs-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    
                  i devlop Communication applications.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="bx bxs-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    
                  i devlop Social media applications.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="bx bxs-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    
                  i devlop Entertainment applications.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
            Ui/Ux <br /> Designer
            </h3>
          </div>

          <span onClick={() => toggleTab(3)} className="services__button">
            view More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={
              toggleState === 3 ? "services__modal active-modal"
                : "services__modal"} >
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"> </i>
              <h3 className="services__modal-title">Ui/Ux Designer</h3>

              <p className="services__modal-description">
              Passionate UI/UX designer with strong skills in design thinking, wireframing, and prototyping, seeking opportunities to enhance my skills and contribute to innovative projects.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="bx bxs-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    i create Visual design.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="bx bxs-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">i create Interaction design.</p>
                </li>

                <li className="services__modal-service">
                  <i className="bx bxs-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    
                    i create Information architecture design.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="bx bxs-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    
                  i create User research design.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="bx bxs-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    
                  i create Content strategy design.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
