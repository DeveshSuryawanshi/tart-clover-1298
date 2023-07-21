import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReusebaleCalculator from "../ReusebaleCalculator";
import ReusiblerightContent from "../ReusiblerightContent";

interface all {
  Rental : number,
  Electricity : number,
  RatesandTaxes : number,
  Cleaning : number,
  Insurance: number,
  Levy : number,
  RepairsandMaintenance : number,
  Security : number,
  Lowvalueofficeequipment : number
}

export const HomeOfficeCalculator = () => {
  const [allInputVal, setallInputVal] = useState<all>({
    Rental : 0,
    Electricity : 0,
    RatesandTaxes : 0,
    Cleaning : 0,
    Insurance: 0,
    Levy : 0,
    RepairsandMaintenance : 0,
    Security : 0,
    Lowvalueofficeequipment : 0
  });

  const [total, setTotal] = useState<number>(0)

  useEffect(()=>{
    let sum = 0;

    for(let key in allInputVal){
      // console.log(allInputVal[key]);
      
    }

  },[allInputVal])
  


  return (
    <div>
      <ReusebaleCalculator />
      <WRAPPER>
        <DIV>
          <h1>Home Office Calculator</h1>
          <h2 className="topheading1">
            Calculate the home office expense you can claim in your tax return
          </h2>
          <div className="container">
            <div className="child">
              <h2 className="formHeading">HOUSEHOLD COSTS</h2>
              <div>
                <div className="desc">
                  <p className="desk-p-1">
                    Please enter in your home office-related expenses for the
                    full tax year below.
                  </p>
                  <p className="desk-p-2">
                    Please note if you moved during the tax year and you worked
                    at two different properties
                  </p>
                  <p className="desk-p-2">
                    then you need to do a separate calculation for the time
                    spent at each property.
                  </p>
                </div>
                <div className="inputsContainer">
                  <div className="input inp1">
                    <p className="inpHeading inpheaingtext1">Tax year❓</p>
                    <div>
                      <div>
                        <label>2023 and after</label>
                        <input name="date" type="radio" />
                      </div>
                      <div>
                        <label>2022 and before</label>
                        <input name="date" type="radio" />
                      </div>
                    </div>
                  </div>
                  <div className="input">
                    <p className="inpHeading">Rental❓</p>
                    <input type="number" onChange={(e) => setallInputVal((prev) => ({...prev, Rental : +e.target.value}))}/>
                  </div>
                  <div className="input">
                    <p className="inpHeading">Electricity❓</p>
                    <input type="number" />
                  </div>
                  <div className="input">
                    <p className="inpHeading">Rates and Taxes❓</p>
                    <input type="number" />
                  </div>
                  <div className="input">
                    <p className="inpHeading">Cleaning❓</p>
                    <input type="number" />
                  </div>
                  <div className="input">
                    <p className="inpHeading">Insurance❓</p>
                    <input type="number" />
                  </div>
                  <div className="input">
                    <p className="inpHeading">Levy❓</p>
                    <input type="number" />
                  </div>
                  <div className="input">
                    <p className="inpHeading">Repairs and Maintenance❓</p>
                    <input type="number" />
                  </div>
                  <div className="input">
                    <p className="inpHeading">Security❓</p>
                    <input type="number" />
                  </div>
                  <div className="input">
                    <p className="inpHeading">Low value office equipment❓</p>
                    <input type="number" />
                  </div>
                  <div className="input">
                    <p className="inpHeading">
                      Wear and tear on office equipment❓
                    </p>
                    <input type="number" />
                  </div>
                  <div className="input">
                    <p className="inpHeading">Other expenses❓</p>
                    <input type="number" />
                  </div>
                  <div className="input inp2">
                    <p className="inpHeading inpheaingtext2">Total household costs</p>
                    <div>R{total}</div>
                  </div>  
                  <div className="input">
                    <p className="inpHeading">
                      Square meterage of your home office❓
                    </p>
                    <input type="number" />
                  </div>
                  <div className="input">
                    <p className="inpHeading">
                      Square meterage of your total property❓
                    </p>
                    <input type="number" />
                  </div>
                  <div className="input inp2">
                    <p className="inpHeading inpheaingtext3">
                      Percentage household costs you can claim
                    </p>
                    <div>0.00%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="button">CALCULATE</button>
        </DIV>
        <ReusiblerightContent />
      </WRAPPER>
    </div>
  );
};

const DIV = styled.div`
  text-align: start;

  h1 {
    color: #515356;
    font-size: 35px;
  }

  .topheading1 {
    color: #515356;
    font-size: 25px;
  }

  .child {
    background-color: #ececec;
  }

  .formHeading {
    background-color: #444444;
    padding: 10px 20px;
    color: white;
    font-size: 20px;
    font-weight: 500;
  }

  .desc {
    text-align: end;
    margin: 10px;
  }

  .desk-p-1 {
    font-weight: 500;
    margin: 15px 0px 5px 0px;
  }

  .desk-p-2 {
    font-size: 12px;
    margin: 5px 0px 5px 0px;
  }

  .inputsContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .input {
    display: flex;
  }

  .inpHeading {
    margin-right: 70px;
  }

  input {
    height: 30px;
    border: solid #d5d5d5 2px;
  }

  .inp1>div>div{
    display: flex;
    align-items: center;
    height: 30px;
    justify-content: end;
  }

  .inpheaingtext1{
    margin-right: 145px;
  }
  
  .inp2{
    margin: 30px;
  }
  
  .inpheaingtext2{
    margin-right: 290px;
    font-weight: 900;
  }
  
  .inpheaingtext3{
    font-weight: 900;
    margin-right: 250px;
  }

  .button{
    background-color: #444444;
    padding: 5px 20px;
    color: white;
    font-weight: 500;
    margin: 20px;
    margin-left: 0px;
  }
`;

const WRAPPER = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;
