import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import ReusebaleCalculator from "./ReusebaleCalculator";
import { Link } from "react-router-dom";
import ReusiblerightContent from "./ReusiblerightContent";
interface TypeOfData{
  year:string;
  deductions_salary:number;
  duration:string;
  salary_include_raf:string;
  pay_private_raf:string;
  monthly_allowance:string;
  age:number;
  salary_include_raf_value:number;
  pay_private_raf_value:number;
  monthly_allowance_value:number

}

const initialSaleryData:TypeOfData={
  year:"2024",
  deductions_salary:20000,
  duration:"",
  salary_include_raf:"",
  pay_private_raf:"",
  monthly_allowance:"",
  age:23,
  salary_include_raf_value:0,
  pay_private_raf_value:0,
  monthly_allowance_value:0

}
const SaleryTex = () => {
  const [sowPerson, setSoPerson] = React.useState(false);
  const [AllData,setAllData]=useState<TypeOfData>(initialSaleryData)
const [sowPoster,setSowPoster]=useState(true)
console.log(sowPoster);

  // useEffect(()=>{
  //   setInterval(()=>{
  //     setSowPoster(prev=>!prev)
  //   },3000)
  // },[])

 let {year,deductions_salary,duration,salary_include_raf,salary_include_raf_value,pay_private_raf,pay_private_raf_value,monthly_allowance,monthly_allowance_value,age} =AllData
  const handleClick = () => {
    setSoPerson((prev) => !prev)
  };
  return (
    <DIV>
      <ReusebaleCalculator />
      <div className="tax-salary-main">
        <div className="calculate-year">
          <h1>SARS Income Tax Calculator for 2024</h1>
          <h2>
            Work out salary tax (PAYE), UIF, taxable income and what tax rates
            you will pay
          </h2>
        </div>

        <div className="all-containt-main">
          <div className="left-side-content">
            <div>
              <div className="income">
                <b>INCOME</b>
              </div>
              <div className="calc-details">
                <div className="calc-box grey">
                  <div className="row">
                    <input type="hidden" id="year" value="2024" />
                    {`Which tax year would you like to calculate?  `}
                    {/* style="width:240px" */}
                    <select onChange={(e)=>setAllData(prev=>({...prev,year:e.target.value}))} id="yearsel" className="wide" value={year}>
                      <option value="2024">2024 (Mar 2023 - Feb 2024)</option>
                      <option value="2023">2023 (Mar 2022 - Feb 2023)</option>
                      <option value="2022">2022 (Mar 2021 - Feb 2022)</option>
                      <option value="2021">2021 (Mar 2020 - Feb 2021)</option>
                    </select>
                  </div>

                  <div className="row">
                    {`What is your total salary before deductions?  `}
                    <input maxLength={8} onChange={(e)=>setAllData(prev=> ({...prev,deductions_salary:+e.target.value}))}
                      type="text"
                      className="wide"
                      id="gross"
                      value={deductions_salary}
                    />
                  </div>

                  <div className="row">
                    {`How often do you receive this salary?  `}
                    <select onChange={(e)=>setAllData(prev=>({...prev,duration:e.target.value}))} className="wide" id="period" value={duration}>
                      <option value="weekly">Weekly</option>
                      <option value="fortnightly">Every 2 weeks</option>
                      <option value="monthly">Monthly</option>
                      <option value="yearly">Yearly</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            {/* <div></div>
    <div></div> */}
            {/* <a href="#" onClick={handleClick} > */}
            <div className="calc-header" onClick={handleClick}>
              <b>PENSION | RAF | PROVIDENT FUND | TRAVEL ALLOWANCE</b>
              <span>Open</span>
            </div>
            {/* </a> */}
            {sowPerson && (
              <div className="calc-details" style={{ marginBottom: "1.5rem" }}>
                <div className="calc-box grey">
                  <div className="row">
                    {`Does your salary include contributions to a pension, provident fund or RAF?   `}
                    <br />
                    <select onChange={(e)=>setAllData(prev=>({...prev,salary_include_raf:e.target.value}))}
                      style={{ width: "160px" }}
                      className="wide"
                      id="period"
                   value={salary_include_raf}
                   >
                      <option value="no">No</option>
                      <option value="Yes">Yes</option>
                    </select>
                  </div>
                  {salary_include_raf=="Yes"&&<div className="row">
                    {`→ Please enter the total amount:   `}
                    <input maxLength={8} onChange={(e)=>setAllData(prev=> ({...prev,salary_include_raf_value:+e.target.value}))}
                      type="text"
                      className="wide"
                      id="gross"
                      value={salary_include_raf_value}
                    />
                  </div>}
                  <div className="row">
                    {`Do you pay private contributions to a pension, provident fund or RAF?   `}
                    <br />
                    <select onChange={(e)=>setAllData(prev=>({...prev,pay_private_raf:e.target.value}))}
                      style={{ width: "160px" }}
                      className="wide"
                      id="period"
                      value={pay_private_raf}
                    >
                      <option value="no">No</option>
                      <option value="Yes">Yes</option>
                    </select>
                  </div>
                  {pay_private_raf=="Yes"&&<div className="row">
                    {`→ Please enter the total amount:   `}
                    <input maxLength={8} onChange={(e)=>setAllData(prev=> ({...prev,pay_private_raf_value:+e.target.value}))}
                      type="text"
                      className="wide"
                      id="gross"
                      value={pay_private_raf_value}
                    />
                  </div>}
                  <div className="row">
                    {`Does your salary include money for a travel allowance?   `}
                    <select onChange={(e)=>setAllData(prev=>({...prev,monthly_allowance:e.target.value}))}
                      style={{ width: "160px" }}
                      className="wide"
                      id="period"
                      value={monthly_allowance}
                    >
                      <option value="no">No</option>
                      <option value="Yes">Yes</option>
                    </select>
                  </div>
                   {monthly_allowance=="Yes"&&<div className="row">
                    {`→ Please enter the total amount:   `}
                    <input maxLength={8} onChange={(e)=>setAllData(prev=> ({...prev,monthly_allowance_value:+e.target.value}))}
                      type="text"
                      className="wide"
                      id="gross"
                      value={monthly_allowance_value}
                    />
                  </div>}
                </div>
              </div>
            )}
            <div className="calc-details">
              <div className="age-box grey">
                <div className="row">
                  {`Your age?  `}
                  <input maxLength={2} onChange={(e)=>setAllData(prev=>({...prev,age:+e.target.value}))} type="text" className="wide" id="gross" value={age} />
                </div>
              </div>
            </div>
            <div className="calc-details" style={{ backgroundColor: "white" }}>
              <div
                className="age-box grey"
                style={{ backgroundColor: "white" }}
              >
                <div className="row">
                  <button className="calculate-btn">CALCULATE</button>
                </div>
              </div>
            </div>
            <div
              className="calc-details"
              style={{ backgroundColor: "white", textAlign: "start" }}
            >
              <div
                className="age-box grey"
                style={{ backgroundColor: "white" }}
              >
                <div className="row">
                  {`Want this calculator on your website?  `}
                  <Link to="#" className="veiw-tax">
                    View tax widgets
                  </Link>
                </div>
              </div>
            </div>
          </div>
         {sowPoster? <ReusiblerightContent />:<div>
          <img src="https://media.taxtim.com/images/media-za/Twitter-Stories-switch.jpg" alt="" />
          </div>}
        </div>
      </div>
    </DIV>
  );
};

export default SaleryTex;
const DIV = styled.div`
  width: 100%;
  .tax-salary-main {
    width: 90%;
    margin: auto;
    border: 0px solid red;
  }
  .calculate-year {
    padding: 0.6rem;
    text-align: start;
  }
  .all-containt-main {
    display: flex;
  }
  /* className="right-side-content" */
  .left-side-content {
    border: 0px solid red;
    padding: 2rem;
  }
  .income {
    background-color: #444444;
    color: white;
    padding: 0.7em 1em;
    font-family: "Montserrat", Arial, sans-serif;
    font-size: 1.3em;
    text-align: left;
  }
  .calc-details {
    text-align: end;
    border: 0px solid green;
    background-color: #eeeaea;
  }
  .calc-box,
  age-box {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .age-box {
    padding: 1.3rem;
  }
  input,
  select {
    background-color: white;
    border: 1px solid #ddd5d5;
    padding: 0.6rem;
    border-radius: 0%.3rem;
  }
  .row {
    font-family: sans-serif;
    font-size: 100%;
    line-height: 1.15;
  }
  .calc-header {
    background-color: #444444;
    display: flex;
    justify-content: space-between;
    color: white;
    padding: 0.7em 0.3em;
    cursor: pointer;
    font-family: "Montserrat", Arial, sans-serif;
    font-size: 1.3em;
    margin: 1.5rem 0rem 0px;
    gap: 1rem;
    text-align: left;
    /* text-align:left; */
  }
  .calculate-btn{
    padding: 0.6rem 0.8rem;
    background-color: #ca1d1d;
    color: white;
    /* padding: 0.7em 1em; */
    font-family: "Montserrat", Arial, sans-serif;
    font-size: 1em;
    border-radius: 0.3rem;
  }
 
  .calculate-btn:hover {
    background-color: #e20b0b;
  }
  .veiw-tax {
    text-decoration: none;
    color: #2aa12e;
  }
  /* .right-side-content {
 
   flex-direction: column; 
  } */
 
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
`;
