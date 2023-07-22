import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import ReusebaleCalculator from "./ReusebaleCalculator";
import { Link } from "react-router-dom";
import ReusiblerightContent from "./ReusiblerightContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import SowAllCalculatedData from "./SowAllCalculatedData";
import { RootState } from "../../Redux/Store";
import { useSelector } from "react-redux";
export interface TypeOfData {
  year: string;
  employerYes:string;
  Gross_Employment_Income:number;
  Total_annuity_fund: number;
  Interest_bank_accounts:string;
  business_activity:string;
  Other_income:number;
  Pension_Fund:number;
  Provident_Fund:number;
  Retirement_Annuity:number;
  donate:string;
  deductions_salary: number;
  duration: string;
  hospital_plan: string;
  hospital_plan_type:string;
  pocket_medical_expenses:string;
  expenses:number;
  work_purposes:string;
  depreciate:string;
claim:number;
travel_expenses:string;
  salary_include_raf: string;
  pay_private_raf: string;
  monthly_allowance: string;
  age: number;
  salary_include_raf_value: number;
  pay_private_raf_value: number;
  monthly_allowance_value: number;
}

const initialSaleryData: TypeOfData = {
  year: "2024",
  employerYes:"Yes",
  Gross_Employment_Income:0,
  Total_annuity_fund:0,
  Interest_bank_accounts:"",
  business_activity:"",
  Other_income:0,
  Pension_Fund:0,
  Provident_Fund:0,
  Retirement_Annuity:0,
  donate:"No",
  hospital_plan:"No",
  hospital_plan_type:"",
  pocket_medical_expenses:"No",
  expenses:0,
  work_purposes:"No",
  depreciate:"",
  claim:0,
  travel_expenses:"No",
  deductions_salary: 20000,
  duration: "",
  salary_include_raf: "",
  pay_private_raf: "",
  monthly_allowance: "",
  age: 23,
  salary_include_raf_value: 0,
  pay_private_raf_value: 0,
  monthly_allowance_value: 0,
};
const Taxrefund = () => {
  const [sowPerson, setSoPerson] = React.useState(false);
  const [AllData, setAllData] = useState<TypeOfData>(initialSaleryData);
  const [otherEncome,setOtherIncome]=useState(false)
  const [deduction,setdeduction]=useState(false)
  const [Taxpaid,setTaxpaid]=useState(false)
  const [totalAmount,setTotalAmount]=useState(0)
  const [AllDetails2,setAllDetails2]=useState<null|TypeOfData>(null)
  // const [sowPoster,setSowPoster]=useState(true)
const {isAuth}=useSelector((state:RootState)=>state.auth)

  let {
    year,
    employerYes,
    Gross_Employment_Income,
    Total_annuity_fund,
    deductions_salary,
    Interest_bank_accounts,
    business_activity,
    Other_income,
    Pension_Fund,
    Provident_Fund,
    Retirement_Annuity,
    donate,
    hospital_plan,
    hospital_plan_type,
    pocket_medical_expenses,
    expenses,
    travel_expenses,
    work_purposes,
    depreciate,
    claim,
    duration,
    salary_include_raf,
    salary_include_raf_value,
    pay_private_raf,
    pay_private_raf_value,
    monthly_allowance,
    monthly_allowance_value,
    age
  } = AllData;
  const handleClick = () => {
    setSoPerson((prev) => !prev);
  };
  const handleOtherIncomeClick = () => {
    setOtherIncome((prev) => !prev);
  };
  const handleDeduction = () => {
    setdeduction((prev) => !prev);
  };
  const handleTaxPaid = () => {
    setdeduction((prev) => !prev);
  };
  // Other_income:number;
  // Pension_Fund:number;
  // Provident_Fund:number;
  // Retirement_Annuity:number;

  const handleCalculate=()=>{
let sum=(Gross_Employment_Income+Total_annuity_fund+
  Other_income+Pension_Fund+Provident_Fund+
  Retirement_Annuity+expenses+claim)
  setTotalAmount(sum)
  setAllDetails2(AllData)
  setAllData(initialSaleryData)
  // console.log(Gross_Employment_Income,Total_annuity_fund,
  //   Other_income,Pension_Fund,Provident_Fund,
  //   Retirement_Annuity,deductions_salary,expenses,claim);

  }
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
                    <div className="font-question">
                    <FontAwesomeIcon icon={faQuestion} />
                    </div>
                    <select
                      onChange={(e) =>
                        setAllData((prev) => ({
                          ...prev,
                          year: e.target.value,
                        }))
                      }
                      id="yearsel"
                      className="wide"
                      value={year}
                    >
                      <option value="2024">2024 (Mar 2023 - Feb 2024)</option>
                      <option value="2023">2023 (Mar 2022 - Feb 2023)</option>
                      <option value="2022">2022 (Mar 2021 - Feb 2022)</option>
                      <option value="2021">2021 (Mar 2020 - Feb 2021)</option>
                    </select>
                  </div>

                  {/* <div className="row">
                    {`What is your total salary before deductions?  `}
                    
                    <input
                      maxLength={8}
                      onChange={(e) =>
                        setAllData((prev) => ({
                          ...prev,
                          deductions_salary: +e.target.value,
                        }))
                      }
                      type="text"
                      className="wide"
                      id="gross"
                      value={deductions_salary}
                    />
                  </div> */}
                  <div className="row">
                    <input type="hidden" id="year" value="2024" />
                    {`Did you work for an employer or receive an annuity from a fund?  `}
                    <div className="font-question">
                    <FontAwesomeIcon icon={faQuestion} />
                    </div>
                    <select
                      onChange={(e) =>
                        setAllData((prev) => ({
                          ...prev,
                          employerYes: e.target.value,
                        }))
                      }
                      id="yearsel"
                      className="wide"
                      value={employerYes}
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                     
                    </select>
                  </div>
                  <div className="row">
                    <input type="hidden" id="year" value="2024" />
                    {`If you have more than one IRP5/IT3a, please enter totals for all of them added together (exclude all lump sum IRP5s).  `}
                    <div className="font-question">
                    <FontAwesomeIcon icon={faQuestion} />
                    </div>
                    {/* <select
                    //   onChange={(e) =>
                    //     setAllData((prev) => ({
                    //       ...prev,
                    //       year: e.target.value,
                    //     }))
                    //   }
                      id="yearsel"
                      className="wide"
                      
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                     
                    </select> */}
                  </div>
                  {/* <div className="row">
                    {`How often do you receive this salary?  `}
                    <select
                      onChange={(e) =>
                        setAllData((prev) => ({
                          ...prev,
                          duration: e.target.value,
                        }))
                      }
                      className="wide"
                      id="period"
                      value={duration}
                    >
                      <option value="weekly">Weekly</option>
                      <option value="fortnightly">Every 2 weeks</option>
                      <option value="monthly">Monthly</option>
                      <option value="yearly">Yearly</option>
                    </select>
                  </div> */}
                  <div className="row">
                    {`Gross Employment Income (source code 3699 on IRP5):   R  `}
                    {/* <div className="font-question">
                    <FontAwesomeIcon icon={faQuestion} />
                    </div> */}
                    <input
                      maxLength={8}
                      onChange={(e) =>
                        setAllData((prev) => ({
                          ...prev,
                          Gross_Employment_Income: +e.target.value,
                        }))
                      }
                      type="number"
                      className="wide"
                      id="gross"
                      value={Gross_Employment_Income}
                    />
                  </div>
                  <div className="row">
                    {`Total annuity fund income on IT3a:   R `}
                    {/* <div className="font-question">
                    <FontAwesomeIcon icon={faQuestion} />
                    </div> */}
                    <input
                      maxLength={8}
                      onChange={(e) =>
                        setAllData((prev) => ({
                          ...prev,
                          Total_annuity_fund: +e.target.value,
                        }))
                      }
                      type="number"
                      className="wide"
                      id="gross"
                      value={Total_annuity_fund}
                    />
                  </div>
                </div>
              </div>
            </div>
         
            <div
              style={{ textAlign: "left" }}
              className="calc-header"
              onClick={handleOtherIncomeClick}
            >
              <b>OTHER INCOME</b>
              <span>Open</span>
            </div>
            {(otherEncome||employerYes=="No") && (
              <div className="calc-details" style={{ marginBottom: "1.5rem" }}>
                <div className="calc-box grey">
                  {/* <div className="row">
                    {`Does your salary include contributions to a pension, provident  fund or RAF?   `}
                    <div className="font-question">
                    <FontAwesomeIcon icon={faQuestion} />
                    </div>
                    <br />
                    <select
                      onChange={(e) =>
                        setAllData((prev) => ({
                          ...prev,
                          salary_include_raf: e.target.value,
                        }))
                      }
                      style={{ width: "160px" }}
                      className="wide"
                      id="period"
                      value={salary_include_raf}
                    >
                      <option value="no">No</option>
                      <option value="Yes">Yes</option>
                    </select>
                  </div>
                  {salary_include_raf == "Yes" && (
                    <div className="row">
                      {`→ Please enter the total amount:   `}
                      
                      <input
                        maxLength={8}
                        onChange={(e) =>
                          setAllData((prev) => ({
                            ...prev,
                            salary_include_raf_value: +e.target.value,
                          }))
                        }
                        type="text"
                        className="wide"
                        id="gross"
                        value={salary_include_raf_value}
                      />
                    </div>
                  )} */}
                  <div className="row">
                      {`Interest from investments / bank accounts:  `}
                      <div className="font-question">
                    <FontAwesomeIcon icon={faQuestion} />
                    </div>
                    {`R`}
                      <input
                        maxLength={12}
                        onChange={(e) =>
                          setAllData((prev) => ({
                            ...prev,
                            Interest_bank_accounts: e.target.value,
                          }))
                        }
                        type="text"
                        className="wide"
                        id="gross"
                        value={Interest_bank_accounts}
                      />
                    </div>
                  <div className="row">
                      {`Profit from business activity (freelancing / sole proprietor / property rental):  `}
                      <div className="font-question">
                    <FontAwesomeIcon icon={faQuestion} />
                    </div>
                    {`R`}
                      <input
                        // maxLength={8}
                        onChange={(e) =>
                          setAllData((prev) => ({
                            ...prev,
                            business_activity: e.target.value,
                          }))
                        }
                        type="text"
                        className="wide"
                        id="gross"
                        value={business_activity}
                      />
                    </div>
                  <div className="row">
                      {`Other income earned (excluding dividends):   R    `}
                      {/* <div className="font-question">
                    <FontAwesomeIcon icon={faQuestion} />
                    </div> */}
                      <input
                        maxLength={8}
                        onChange={(e) =>
                          setAllData((prev) => ({
                            ...prev,
                            Other_income: +e.target.value,
                          }))
                        }
                        type="number"
                        className="wide"
                        id="gross"
                        value={Other_income}
                      />
                    </div>
                {/* <div className="row">
                    {`Do you pay private contributions to a pension, provident fund or RAF?   `}
                    <div className="font-question">
                    <FontAwesomeIcon icon={faQuestion} />
                    </div>
                    <br />
                    <select
                      onChange={(e) =>
                        setAllData((prev) => ({
                          ...prev,
                          pay_private_raf: e.target.value,
                        }))
                      }
                      style={{ width: "160px" }}
                      className="wide"
                      id="period"
                      value={pay_private_raf}
                    >
                      <option value="no">No</option>
                      <option value="Yes">Yes</option>
                    </select>
                  </div>
                  {pay_private_raf == "Yes" && (
                    <div className="row">
                      {`→ Please enter the total amount:   `}
                      <input
                        maxLength={8}
                        onChange={(e) =>
                          setAllData((prev) => ({
                            ...prev,
                            pay_private_raf_value: +e.target.value,
                          }))
                        }
                        type="text"
                        className="wide"
                        id="gross"
                        value={pay_private_raf_value}
                      />
                    </div>
                  )} */}
                  {/* <div className="row">
                    {`Does your salary include money for a travel allowance?   `}
                    <div className="font-question">
                    <FontAwesomeIcon icon={faQuestion} />
                    </div>
                    <select
                      onChange={(e) =>
                        setAllData((prev) => ({
                          ...prev,
                          monthly_allowance: e.target.value,
                        }))
                      }
                      style={{ width: "160px" }}
                      className="wide"
                      id="period"
                      value={monthly_allowance}
                    >
                      <option value="no">No</option>
                      <option value="Yes">Yes</option>
                    </select>
                  </div>
                  {monthly_allowance == "Yes" && (
                    <div className="row">
                      {`→ Please enter the total amount:   `}
                      <input
                        maxLength={8}
                        onChange={(e) =>
                          setAllData((prev) => ({
                            ...prev,
                            monthly_allowance_value: +e.target.value,
                          }))
                        }
                        type="text"
                        className="wide"
                        id="gross"
                        value={monthly_allowance_value}
                      />
                    </div>
                  )} */}
                </div> 
              </div> 
            )}
            <div
              style={{ textAlign: "left" }}
              className="calc-header"
              onClick={handleDeduction}
            >
              <b>DEDUCTIONS  </b>
              <span>Open</span>
            </div>
            {deduction && (
              <div className="calc-details" style={{ marginBottom: "1.5rem" }}>
                <div className="calc-box grey">
                <div className="row" style={{marginTop:"1rem",marginLeft:"1rem",marginRight:"1rem"}}>
                    {`Please enter amounts for the following if they apply to you.
If you paid for any of these yourself then you should have a monthly account or document showing the amount coming off your bank account.  `}
                    {/* <div className="font-question">
                    <FontAwesomeIcon icon={faQuestion} />
                    </div> */}
                    <br />
                     {/* <div className="row">
                      {`→ Please enter the total amount:   `}
                      
                      <input
                        maxLength={8}
                        onChange={(e) =>
                          setAllData((prev) => ({
                            ...prev,
                            salary_include_raf_value: +e.target.value,
                          }))
                        }
                        type="text"
                        className="wide"
                        id="gross"
                        value={salary_include_raf_value}
                      />
                    </div> */}
                    {/* <select
                      onChange={(e) =>
                        setAllData((prev) => ({
                          ...prev,
                          salary_include_raf: e.target.value,
                        }))
                      }
                      style={{ width: "160px" }}
                      className="wide"
                      id="period"
                      value={salary_include_raf}
                    >
                      <option value="no">No</option>
                      <option value="Yes">Yes</option>
                    </select> */}
                  </div>

                  <div className="row">
                      {`Pension Fund (source code 4001):   R  `}
                      
                      <input
                        maxLength={8}
                        onChange={(e) =>
                          setAllData((prev) => ({
                            ...prev,
                            Pension_Fund: +e.target.value,
                          }))
                        }
                        type="number"
                        className="wide"
                        id="gross"
                        value={Pension_Fund}
                      />
                    </div>
                  <div className="row">
                      {`Provident Fund (source code 4003):   R  `}
                      
                      <input
                        maxLength={8}
                        onChange={(e) =>
                          setAllData((prev) => ({
                            ...prev,
                            Provident_Fund: +e.target.value,
                          }))
                        }
                        type="number"
                        className="wide"
                        id="gross"
                        value={Provident_Fund}
                      />
                    </div>
                  <div className="row">
                      {`Retirement Annuity Fund / RAF (source code 4006): `}
                      <div className="font-question">
                    <FontAwesomeIcon icon={faQuestion} />
                    </div>
                      {` R `}
                      <input
                        maxLength={8}
                        onChange={(e) =>
                          setAllData((prev) => ({
                            ...prev,
                            Retirement_Annuity: +e.target.value,
                          }))
                        }
                        type="number"
                        className="wide"
                        id="gross"
                        value={Retirement_Annuity}
                      />
                      
                    </div>
                  <div className="row">
                   Did you donate to a <a style={{color:"green"}} href="#">PBO</a> (aka charity / non-profit)?
                    <div className="font-question">
                    <FontAwesomeIcon icon={faQuestion} />
                    </div>
                    <br />
                    <select
                      onChange={(e) =>
                        setAllData((prev) => ({
                          ...prev,
                          donate: e.target.value,
                        }))
                      }
                      style={{ width: "160px" }}
                      className="wide"
                      id="period"
                      value={donate}
                    >
                      <option value="no">No</option>
                      <option value="Yes">Yes</option>
                    </select>
                  </div>
                  {donate == "Yes" && (
                    <div className="row">
                      {`Please enter the total amount you donated. You must have a certificate!  R    `}
                      
                      <input
                        maxLength={8}
                        onChange={(e) =>
                          setAllData((prev) => ({
                            ...prev,
                            salary_include_raf_value: +e.target.value,
                          }))
                        }
                        type="number"
                        className="wide"
                        id="gross"
                        value={salary_include_raf_value}
                      />
                    </div>
                  )}
                  <div className="row">
                    {`Did you contribute toward a medical aid / hospital plan?   `}
                    {/* <div className="font-question">
                    <FontAwesomeIcon icon={faQuestion} />
                    </div> */}
                    <br />
                    <select
                      onChange={(e) =>
                        setAllData((prev) => ({
                          ...prev,
                          hospital_plan: e.target.value,
                        }))
                      }
                      style={{ width: "160px" }}
                      className="wide"
                      id="period"
                      value={hospital_plan}
                    >
                      <option value="no">No</option>
                      <option value="Yes">Yes</option>
                    </select>
                  </div>
                  {hospital_plan == "Yes" && (
                    <div className="row">
                      {`→ Please enter the : (hospital_plan)   `}
                      <input
                        // maxLength={8}
                        onChange={(e) =>
                          setAllData((prev) => ({
                            ...prev,
                            hospital_plan_type: e.target.value,
                          }))
                        }
                        type="text"
                        className="wide"
                        id="gross"
                        value={hospital_plan_type}
                      />
                    </div>
                  )}
                  <div className="row">
                    {`Did you have any out of pocket medical expenses?  `}
                    {/* <div className="font-question">
                    <FontAwesomeIcon icon={faQuestion} />
                    </div> */}
                    <br />
                    <select
                      onChange={(e) =>
                        setAllData((prev) => ({
                          ...prev,
                          pocket_medical_expenses: e.target.value,
                        }))
                      }
                      style={{ width: "160px" }}
                      className="wide"
                      id="period"
                      value={pocket_medical_expenses}
                    >
                      <option value="no">No</option>
                      <option value="Yes">Yes</option>
                    </select>
                  </div>
                  {pocket_medical_expenses == "Yes" && (
                    <div className="row">
                      {`Please enter only the expenses that your medical aid did not pay for: R `}
                      <input
                        maxLength={8}
                        onChange={(e) =>
                          setAllData((prev) => ({
                            ...prev,
                            expenses: +e.target.value,
                          }))
                        }
                        type="number"
                        className="wide"
                        id="gross"
                        value={expenses}
                      />
                    </div>
                  )}
                  <div className="row">
                    {`Did you use any personal equipment (assets) for work purposes?   `}
                    <div className="font-question">
                    <FontAwesomeIcon icon={faQuestion} />
                    </div>
                    <br />
                    <select
                      onChange={(e) =>
                        setAllData((prev) => ({
                          ...prev,
                          work_purposes: e.target.value,
                        }))
                      }
                      style={{ width: "160px" }}
                      className="wide"
                      id="period"
                      value={work_purposes}
                    >
                      <option value="no">No</option>
                      <option value="Yes">Yes</option>
                    </select>
                  </div>
                  {work_purposes == "Yes" && (
                    <div className="row">
                      {`You can depreciate their value to reduce your tax.
See our Wear and Tear calculator to see how much you can depreciate: R   `}
                      <input
                        // maxLength={8}
                        onChange={(e) =>
                          setAllData((prev) => ({ ...prev ,depreciate:e.target.value}))
                        }
                        type="text"
                        className="wide"
                        id="gross"
                        value={depreciate}
                      />
                    </div>
                  )}
                  <div className="row">
                    {`Did you get a Travel Allowance or have work travel expenses?   `}
                    <div className="font-question">
                    <FontAwesomeIcon icon={faQuestion} />
                    </div>
                    <select
                      onChange={(e) =>
                        setAllData((prev) => ({
                          ...prev,
                          travel_expenses: e.target.value,
                        }))
                      }
                      style={{ width: "160px" }}
                      className="wide"
                      id="period"
                      value={travel_expenses}
                    >
                      <option value="no">No</option>
                      <option value="Yes">Yes</option>
                    </select>
                  </div>
                  {travel_expenses == "Yes" && (
                    <div className="row">
                      {`Use our Travel Deduction calculator to see how much you can claim: R  `}
                      <input
                        maxLength={8}
                        onChange={(e) =>
                          setAllData((prev) => ({
                            ...prev,
                            claim: +e.target.value,
                          }))
                        }
                        type="number"
                        className="wide"
                        id="gross"
                        value={claim}
                      />
                    </div>
                  )}
                </div>
              </div>
            )}
            <div
              style={{ textAlign: "left" }}
              className="calc-header"
              onClick={handleClick}
            >
              <b>TAX PAID</b>
              <span></span>
            </div>
            {/* </a> */}
            {sowPerson && (
              <div className="calc-details" style={{ marginBottom: "1.5rem" }}>
                <div className="calc-box grey">
                  <div className="row">
                    {`PAYE from employer as per IRP5 (source code 4102/4115):   `}
                    <div className="font-question">
                    <FontAwesomeIcon icon={faQuestion} />
                    </div>
                    {`  R `}
                    <br />
                    <input style={{width:"80px"}}
                        maxLength={8}
                        // onChange={(e) =>
                        //   setAllData((prev) => ({
                        //     ...prev,
                        //     salary_include_raf_value: +e.target.value,
                        //   }))
                        // }
                        type="text"
                        className="wide"
                        id="gross"
                        // value={salary_include_raf_value}
                      />
                  </div>
                  <div className="row">
                    {`Provisional tax on IRP6:   `}
                    <div className="font-question">
                    <FontAwesomeIcon icon={faQuestion} />
                    </div>
                    {`  R `}
                    <br />
                    <input style={{width:"80px"}}
                        // maxLength={8}
                        // onChange={(e) =>
                        //   setAllData((prev) => ({
                        //     ...prev,
                        //     salary_include_raf_value: +e.target.value,
                        //   }))
                        // }
                        type="text"
                        className="wide"
                        id="gross"
                        // value={salary_include_raf_value}
                      />
                  </div>
                  {/* {salary_include_raf == "Yes" && (
                    <div className="row">
                      {`→ Please enter the total amount:   `}
                      
                      <input
                        maxLength={8}
                        onChange={(e) =>
                          setAllData((prev) => ({
                            ...prev,
                            salary_include_raf_value: +e.target.value,
                          }))
                        }
                        type="text"
                        className="wide"
                        id="gross"
                        value={salary_include_raf_value}
                      />
                    </div>
                  )} */}
                  {/* <div className="row">
                    {`Do you pay private contributions to a pension, provident fund or RAF?   `}
                    <div className="font-question">
                    <FontAwesomeIcon icon={faQuestion} />
                    </div>
                    <br />
                    <select
                      onChange={(e) =>
                        setAllData((prev) => ({
                          ...prev,
                          pay_private_raf: e.target.value,
                        }))
                      }
                      style={{ width: "160px" }}
                      className="wide"
                      id="period"
                      value={pay_private_raf}
                    >
                      <option value="no">No</option>
                      <option value="Yes">Yes</option>
                    </select>
                  </div>
                  {pay_private_raf == "Yes" && (
                    <div className="row">
                      {`→ Please enter the total amount:   `}
                      <input
                        maxLength={8}
                        onChange={(e) =>
                          setAllData((prev) => ({
                            ...prev,
                            pay_private_raf_value: +e.target.value,
                          }))
                        }
                        type="text"
                        className="wide"
                        id="gross"
                        value={pay_private_raf_value}
                      />
                    </div>
                  )}
                  <div className="row">
                    {`Does your salary include money for a travel allowance?   `}
                    <div className="font-question">
                    <FontAwesomeIcon icon={faQuestion} />
                    </div>
                    <select
                      onChange={(e) =>
                        setAllData((prev) => ({
                          ...prev,
                          monthly_allowance: e.target.value,
                        }))
                      }
                      style={{ width: "160px" }}
                      className="wide"
                      id="period"
                      value={monthly_allowance}
                    >
                      <option value="no">No</option>
                      <option value="Yes">Yes</option>
                    </select>
                  </div>
                  {monthly_allowance == "Yes" && (
                    <div className="row">
                      {`→ Please enter the total amount:   `}
                      <input
                        maxLength={8}
                        onChange={(e) =>
                          setAllData((prev) => ({
                            ...prev,
                            monthly_allowance_value: +e.target.value,
                          }))
                        }
                        type="text"
                        className="wide"
                        id="gross"
                        value={monthly_allowance_value}
                      />
                    </div>
                  )} */}
                </div> 
              </div>
            )}
            <div style={{ textAlign: "end" }} className="calc-details">
              <div className="age-box grey"  style={{padding:"0px"}} >
                <div className="row">
                  {`Your age?  `}
                  <input
                    min="2" max="3"
                    onChange={(e) =>
                      setAllData((prev) => ({ ...prev, age: +e.target.value }))
                    }
                    type="number"
                    className="wide"
                    id="gross"
                    value={age}
                  />
        
                </div>
              </div>
              <div className="age-box grey" style={{padding:"0px"}} >
                <div className="row">
                  {`Are you, your spouse or any of your children disabled?  `}
                <div className="font-question">
                    <FontAwesomeIcon icon={faQuestion} />
                    </div>
                  <input
                   
                    // onChange={(e) =>
                    //   setAllData((prev) => ({ ...prev, age: +e.target.value }))
                    // }
                    type="text"
                    className="wide"
                    id="gross"
                    // value={age}
                  />
                </div>
              </div>
            </div>
            <div
              className="calc-details"
              style={{ backgroundColor: "white", textAlign: "end" }}
            >
              <div
                className="age-box grey"
                style={{ backgroundColor: "white" }}
              >
                <div className="row">
                  <button onClick={handleCalculate} className="calculate-btn">SO MY REFUND STIMATION!</button>
                </div>
              </div>
            </div>

         {AllDetails2&&<SowAllCalculatedData AllDetails2={AllDetails2} TotalSum={totalAmount} />}
            {/* <div
              className="calc-details"
              style={{ backgroundColor: "white", textAlign: "start" }}
            >
              <div
                className="age-box grey"
                style={{ backgroundColor: "white" }}
              >
                <div className="row" style={{ justifyContent: "start" }}>
                  {`Want this calculator on your website?  `}
                  <Link to="#" className="veiw-tax">
                    View tax widgets
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
         {isAuth?<div className="dummy-image">
          <img src="https://media.taxtim.com/images/media-za/Twitter-Stories-switch.jpg" alt="" />
         </div>:
        <ReusiblerightContent />}
        </div>
      </div>
    </DIV>
  );
};

export default Taxrefund;
const DIV = styled.div`
  width: 100%;
  .tax-salary-main {
    width: 90%;
    margin: auto;
    border: 0px solid red;
  }
 .dummy-image>img{
  width: 65%;
  margin:auto;
 cursor: pointer;
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
  .font-question{
    border:1px solid red;
    border-radius:50%;
    background-color: #c02626;
    padding:1px;
    color:white;
   text-align:center;
   font-size:12px;
   margin-left: 5px;
   width: 17px;
   height: 14px;
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
    border: 0px solid green;
    padding: 0rem;
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
    border-radius: 0% 0.3rem;
  }
  .row {
    font-family: sans-serif;
    font-size: 100%;
    line-height: 1.15;
    border: 0px solid #06d621;
    text-align: end;
    display: flex;
    align-items: center;
    justify-content: end;
    margin: 0rem;
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
    margin: 1.2rem 0rem 0px;
    gap: 1rem;
    /* border:3px solid black; */
    text-align: left;
    /* text-align:left; */
  }
  .calculate-btn {
    padding: 0.6rem 0.8rem;
    border: 0px solid black;
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
