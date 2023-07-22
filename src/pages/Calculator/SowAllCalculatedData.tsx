import React from "react";
import { styled } from "styled-components";
import { TypeOfData as TypeOfData1 } from "./TaxRefund";
import { TypeOfData as TypeOfData2 } from "./SaleryTex";
interface TypeOfAllData extends TypeOfData1 {
  TotalSum: number;
}
interface TypeOfAllData2 extends TypeOfData2 {
  TotalSum: number;
}
const SowAllCalculatedData = ({
  AllDetails2,
  TotalSum,
}: TypeOfAllData | TypeOfAllData2 | any) => {
  console.log("AllDetails2", AllDetails2);

  return (
    <DIV>
      <div>
        <h1 className="home-pay">Take home pay:</h1>
        <p>R :{` ${TotalSum}`}</p>
        <br />
        <h5 className="all-conditions">
          In the previous year this would have been R17498 (now R
          {AllDetails2.Gross_Employment_Income} more!).
        </h5>
        <br />
        <h5 className="all-conditions">This is how you work it out:</h5>
        <h5 className="all-conditions">
          Taxable income = Annual gross salary - Pension / Provident / RAF
          (limited to 27.5% of salary, limited to R350k) - 20% of travel
          allowance
        </h5>
        <h5 className="all-conditions">
          Taxable income = R {TotalSum}.00 - R {AllDetails2.Provident_Fund}.00 -
          R {AllDetails2.Retirement_Annuity}.00
        </h5>
        <h5 className="all-conditions">
          Taxable income for the year: R{" "}
          {TotalSum -
            AllDetails2.Provident_Fund -
            AllDetails2.Retirement_Annuity}
          .00
        </h5>
        <h5 className="all-conditions">
          Tax you will pay / PAYE (Pay As You Earn) for your age group and
          income bracket: R 2,183.08 (as per PAYE tables provided by SARS)
        </h5>
        <h5 className="all-conditions">
          Take home pay = Gross salary - PAYE - UIF
        </h5>
        <h5 className="all-conditions">
          (UIF / Unemployment Insurance Fund is levied at 1% of your gross
          income, at most R
          {((TotalSum -
            AllDetails2.Provident_Fund -
            AllDetails2.Retirement_Annuity) *
            1) /
            100}
          )
        </h5>
        <br />
        <h5 className="all-conditions">
          Take home pay = R {TotalSum} - R 2,183.08 - R 177.12
        </h5>
        <h5 className="all-conditions">
          Take home pay = R{" "}
          {TotalSum -
            AllDetails2.Provident_Fund -
            ((TotalSum -
              AllDetails2.Provident_Fund -
              AllDetails2.Retirement_Annuity) *
              1) /
              100}{" "}
        </h5>
      </div>
    </DIV>
  );
};

export default SowAllCalculatedData;

const DIV = styled.div`
  border: 0px solid red;
  text-align: start;
`;
