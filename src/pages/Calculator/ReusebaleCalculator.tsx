import React from "react";
import { styled } from "styled-components";
const ReusebaleCalculator = () => {
  return (
    <DIV>
      <div className="reusible-main">
        <div className="win-tex">
          <div className="Switch-to-TaxTim">
            <strong>
              Switch to TaxTim and
              <span> WIN R10,000</span>
            </strong>

            <a href="#"> T&amp;C's apply</a>
          </div>
          <h3>How do you currently do your tax?</h3>
          <div className="btn-box">
            <button className="btn">SARC EFILING</button>
            <button className="btn">TAX PRACTITIONAR</button>
            <button className="btn">AUTO-ASSESSMENT</button>
            <button className="btn">NEW TO TEX</button>
          </div>
        </div>
        <div className="random-img">
          <img
            src="https://www.taxtim.com/za/images/media-za/reclining-man.png"
            alt=""
          />
        </div>
      </div>
    </DIV>
  );
};

export default ReusebaleCalculator;

const DIV = styled.div`
  .reusible-main {
    display: flex;
    width: 100%;
    border: 0px solid red;
    justify-content: space-around;
    align-items: center;
    background-color: #eefcf1;
    padding: 20px 0px 15px 0px;
    margin-bottom: 2rem;
  }
  .win-tex {
    font-size: large;
    font-weight: 600;
    text-align: start;
    border: 0px solid red;
  }
  .random-img {
  }
  .Switch-to-TaxTim {
    /* display:flex; */
    margin-bottom: 0.6rem;
  }
  span {
    color: #02b671;
    white-space: nowrap;
  }
  a {
    font-size: 50%;
    text-decoration: none;
    vertical-align: middle;
  }
  img {
    width: 50%;
  }

  .btn-box {
    display: flex;
    flex-wrap: wrap;
    /* grid-template-columns: repeat(4,1fr); */
    gap: 7px;
    margin-top: 0.3rem;
  }
  .btn {
    line-height: 2.3em !important;
    padding: 0em 1.53em;
    font-family: "Montserrat", Arial, sans-serif;
    border: 2px solid #444444;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
      0 1px 5px 0 rgb(0 0 0 / 20%);
    border-radius: 2px;
    background-color: #444444;
    color: white;
    font-size: 70%;

    /* padding:5px 15px; */
  }
  .btn:hover {
    background-color: #c52b2b;
    border: none;
  }
`;
