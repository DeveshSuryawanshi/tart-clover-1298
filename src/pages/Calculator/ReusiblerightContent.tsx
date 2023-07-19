import React from "react";
import { Link } from "react-router-dom";

const ReusiblerightContent = () => {
  return (
    <div className="right-side-content">
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
        <p>-- Do Your Tax Return Easily</p>
        <p>-- Avoid penalties</p>
        <p>--Maximise your refund</p>
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
    </div>
  );
};

export default ReusiblerightContent;
