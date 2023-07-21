import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const ReusiblerightContent = () => {
  return (
    <DIV >
      <div className="dummy-image">
        {/* -- */}
        <div>
          <img
            width={"70%"}
            src="https://www.taxtim.com/za/images/tim_full.svg"
            alt=""
          />
          <h3>TaxTim will help you:</h3>
        </div>

        {/* -- */}
        <div>
          <h3>
            Do your Tax <br /> Return in 20 <br /> minutes or less!
          </h3>
        </div>
      </div>

      {/* -- */}
      <div className="suggession" style={{ padding: "15px" }}>
        {/* <p>-- Do Your Tax Return Easily</p>
        <p>-- Avoid penalties</p>
        <p>--Maximise your refund</p> */}
        <ul>
                <li>
                  <img
                    className="rightSvg"
                    src="https://media.taxtim.com/images/icon_tick_circle.svg"
                    alt="error"
                  />
                  <p>Do Your Tax Return Easily</p>
                </li>
                <li>
                  <img
                    className="rightSvg"
                    src="https://media.taxtim.com/images/icon_tick_circle.svg"
                    alt="error"
                  />
                  <p>Avoid penalties</p>
                </li>
                <li>
                  <img
                    className="rightSvg"
                    src="https://media.taxtim.com/images/icon_tick_circle.svg"
                    alt="error"
                  />
                  <p>Maximise your refund</p>
                </li>
              </ul>
      </div>
      {/* -- */}
      <div className="about-save-tax">
        <p>
          Tim uses your answers to complete <br />
          your income tax return instantly and <br />
          professionally, with everything filled <br />
          in in the right place.
        </p>
      </div>

      {/* -- */}
      <div className="say-start">
        Let Tim submit your tax return direct to SARS in just a few clicks!
      </div>

      {/* -- */}
      <div className="start-btn">
        <Link className="get-start-btn" to="#">
          GET STARTED
        </Link>
      </div>
    </DIV>
  );
};

export default ReusiblerightContent;
const DIV= styled.div`
     font-size: 16px;
    border: 0px solid red;
    text-align: start;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-family: "Droid Sans", Arial, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #4d4d4d;

    .dummy-image {
    display: flex;
    border: 0px solid red;
    /* justify-content: space-around; */
    align-items: center;
  }
  .get-start-btn {
    padding: 0.6rem 0.8rem;
    color: white;
    background-color: #444444;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
      0 1px 5px 0 rgb(0 0 0 / 20%);
    border-radius: 2px;
    border: 2px solid #444444;
    font-family: "Montserrat", Arial, sans-serif;
  }
  ul {
    margin: 20px;
  }
  .rightSvg {
    width: 20px;
    margin-right: 5px;
  }
  li {
    display: flex;
    margin: 5px;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #4d4d4d;
    font-weight: bold;
    font-family: "Montserrat", Arial, sans-serif;
  }
  h1 {
    font-size: 1.8rem;
  }
  h2 {
    font-size: 1.5rem;
  }
`