import React, { useState } from "react";
import styled from "styled-components";

export const Calculator = () => {
  const [isAuth, setIsAuth] = useState<boolean>(true);

  const handleRedirect = () => {};
  return (
    <DIV>
      <h2 className="h2">Tax calculators</h2>
      <h2>
        Calculate everything you need to know about your tax and how tax affects
        you
      </h2>
      <h2>Calculators for Individuals</h2>
      <div className="container">
        <div className="mini1">
          <div className="cont">
            <div className="child">
              <img
                src="https://media.taxtim.com/images/calc-income-tax.png"
                alt="error"
              />
              <p className="overlay">Salary Tax</p>
            </div>
            <div className="child">
              <img
                src="https://media.taxtim.com/images/calc-refund.png"
                alt="error"
              />
              <p className="overlay">Tax Refund </p>
            </div>
            <div className="child">
              <img
                src="https://media.taxtim.com/images/calc-lump-sum.png"
                alt="error"
              />
              <p className="overlay">Retirement Lump Sum</p>
            </div>
            <div className="child">
              <img
                src="https://media.taxtim.com/images/calc-travel.png"
                alt="error"
              />
              <p className="overlay">Travel Deduction</p>
            </div>
            <div className="child">
              <img
                src="https://media.taxtim.com/images/calc-capital-gains.png"
                alt="error"
              />
              <p className="overlay">Capital Gains Tax</p>
            </div>
            <div className="child">
              <img
                src="https://media.taxtim.com/images/calc-health.png"
                alt="error"
              />
              <p className="overlay">Medical Aid Credits</p>
            </div>
            <div className="child">
              <img
                src="https://media.taxtim.com/images/calc-wear-and-tear.png"
                alt="error"
              />
              <p className="overlay">Wear & Tear</p>
            </div>
            <div className="child">
              <img
                src="https://media.taxtim.com/images/calc-retirement.png"
                alt="error"
              />
              <p className="overlay">Retirement Savings</p>
            </div>
            <div className="child">
              <img
                src="https://media.taxtim.com/images/calc-capital-gains.png"
                alt="error"
              />
              <div className="overlay">
                <p className="overChild">Home office Calculator</p>
              </div>
            </div>
          </div>
          <h2>Calculators for Companies</h2>
          <div className="cont3">
            <div className="child2">
              <img
                src="https://media.taxtim.com/images/calc-biz-tax.png"
                alt="error"
              />
              <div className="overlay">
                <p className="overChild">Income Tax</p>
              </div>
            </div>
            <div className="child2">
              <img
                src="https://media.taxtim.com/images/calc-manufacturing-wear-and-tear.png"
                alt="error"
              />
              <div className="overlay">
                <p className="overChild">a12c Wear & Tear</p>
              </div>
            </div>
            <div className="child2">
              <img
                src="https://media.taxtim.com/images/calc-biz-wear-and-tear.png"
                alt="error"
              />
              <div className="overlay">
                <p className="overChild">SBC Wear & Tear</p>
              </div>
            </div>
            <div className="child2">
              <img
                src="https://media.taxtim.com/images/calc-sme-wear-and-tear.png"
                alt="error"
              />
              <div className="overlay">
                <p className="overChild">Wear & Tear</p>
              </div>
            </div>
            <div className="child2">
              <img
                src="https://media.taxtim.com/images/calc-lease-premium.png"
                alt="error"
              />
              <div className="overlay">
                <p className="overChild">s11(f) Lease premium</p>
              </div>
            </div>
            <div className="child2">
              <img
                src="https://media.taxtim.com/images/calc-leasehold-improvements.png"
                alt="error"
              />
              <div className="overlay">
                <p className="overChild">Leashold Improvements</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mini2">
          {isAuth ? (
            <div>
              <div className="cont2">
                <img
                  src={`https://media.taxtim.com/images/tim_full.svg`}
                  alt="error"
                />
                <h3>Need help submitting your Tax returns?</h3>
              </div>
              <h3 className="h3">TaxTim will help you:</h3>
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
              <p className="desk">
                Tim uses your answers to complete your income tax return
                instantly and professionally, with everything filled in in the
                right place.
              </p>

              <p className="desk">
                Let Tim submit your tax return direct to SARS in just a few
                clicks!
              </p>

              <button onClick={handleRedirect}>GET STARTED</button>
            </div>
          ) : (
            <img
              className="poster"
              src="https://media.taxtim.com/images/media-za/Twitter-Stories-switch.jpg"
              alt="error"
            />
          )}
        </div>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  width: 80%;
  text-align: start;
  margin: auto;

  h2 {
    font-size: 27px;
    color: #6a5b55;
    font-weight: 400;
    letter-spacing: -1px;
    word-spacing: 2px;
    margin: 10px;
    margin-left: 20px;
  }

  .h2 {
    font-weight: 500;
    font-size: 30px;
  }

  .container {
    display: flex;
  }

  .mini1 {
    width: 65%;
    margin-bottom: 30px;
  }

  .mini2 {
    width: 35%;
    /* border: solid black 1px; */
  }

  .cont {
    display: grid;
    grid-template-columns: repeat(3, 180px);
    grid-template-rows: repeat(3, 180px);
    grid-gap: 10px;
    margin: 20px;
  }

  .cont3 {
    display: grid;
    grid-template-columns: repeat(3, 180px);
    grid-template-rows: repeat(2, 180px);
    grid-gap: 10px;
    margin: 20px;
  }

  .child {
    cursor: pointer;
    position: relative;
    background-color: #86c5ce;
    text-align: center;
  }

  .child:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }

  .child2 {
    cursor: pointer;
    position: relative;
    background-color: #e1bb23;
    text-align: center;
  }

  .child2:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }

  .child > img {
    width: 180px;
    margin: 0px;
  }

  .child2 > img {
    width: 180px;
    margin: 0px;
  }

  .child > div {
    display: flex;
    justify-content: center;
  }

  .child2 > div {
    display: flex;
    justify-content: center;
  }

  .overlay {
    width: 100%;
    position: absolute;
    top: 80%;
    bottom: 80%;
    color: white;
    font-weight: bolder;
  }

  .overChild {
    text-align: center;
  }

  .cont2 {
    display: flex;
    align-items: center;
  }

  h3 {
    width: 180px;
    font-size: large;
    font-weight: 600;
    color: #6a5b55;
    margin-left: 20px;
  }

  img {
    width: 110px;
    margin-left: 20px;
  }

  .h3 {
    margin-top: 10px;
  }

  .rightSvg {
    width: 20px;
    margin-right: 5px;
  }

  li {
    display: flex;
    margin: 5px;
  }

  ul {
    margin: 20px;
  }

  .desk {
    width: 300px;
    margin-left: 20px;
    margin-bottom: 30px;
  }

  button {
    margin-left: 20px;
    padding: 5px 20px;
    background-color: #e44b33;
    color: white;
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  .poster {
    width: 100%;
  }

  @media (max-width: 1217px) {
    .cont {
      grid-template-columns: repeat(2, 180px);
    }

    .mini1 {
      width: 60%;
    }
  }

  @media (max-width: 855px) {
    .container {
      display: block;
    }

    .cont {
      grid-template-columns: repeat(3, 180px);
    }

    .mini2{
      width: 100%;
    }

    .desk{
      width: 100%;
    }
  }

  @media (max-width: 661px) {
    /* margin: 0px; */
    width: 90%;

    .container {
      display: block;
      width: 100%;
    }

    .cont { 
      width: 100%;
      grid-template-columns: repeat(3, 180px);
    }
    .cont3 {
      width: 100%;
      grid-template-columns: repeat(3, 180px);
    }

    .mini2{
      width: 100%;
    }

    .desk{
      width: 100%;
    }

    h2{
      width: 100%;
    }
  }

  @media (max-width: 627px) {
    width: 90%;

    .container {
      display: block;
      width: 100%;
    }

    .cont { 
      width: 100%;
      grid-template-columns: repeat(2, 180px);
    }
    .cont3 {
      width: 100%;
      grid-template-columns: repeat(2, 180px);
    }

    .mini2{
      width: 100%;
    }

    .desk{
      width: 100%;
    }

    h2{
      width: 100%;
    }
  }
`;
