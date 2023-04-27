import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <footer className="footer">
        <div className="footer__container container">

            <h1 className="footer__title">
                
            </h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About &nbsp; &nbsp; &nbsp; </a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects&nbsp; &nbsp; &nbsp;
                        
                    </a>
                </li>

                <li>
                    <a href="#testimonials" className="footer__link">Testimonials 
                        
                    </a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://instagram.com/shubham_vadhariya?igshid=ZDdkNTZiNTM=" className="footer__sociial-link" target="_blank">
        <i className="bx bxl-instagram"></i>
        </a>

        <a href="https://www.linkedin.com/in/shubham-vadhariya-808380229" className="footer__sociial-link" target="_blank"><i className="uil uil-linkedin"></i>

        </a>

        <a href="https://github.com/shuham5954" className="footer__sociial-link" target="_blank"><i className="bx bxl-github"></i>

        </a>

        <a href="https://youtube.com/@justaron8915" className="footer__sociial-link" target="_blank"> <i className="bx bxl-youtube"></i>

        </a>
            </div>

            <span className="footer__copy"> Copyright &#169; &nbsp;2023 Shubham. All rights reserved.</span>



        </div>
    </footer>
  )
}

export default Footer