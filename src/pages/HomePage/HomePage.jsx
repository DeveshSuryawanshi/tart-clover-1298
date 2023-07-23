import React from "react";
import LapImg from "../HomePage/Screenshot (371).png"
import HomePageImg from "../image/login.jpg"
import youtube from "../HomePage/Youtube-removebg-preview.png"
import  "./HomePage.css"

import { useState } from "react";
const HomePage = () => {
 
const [play,setplay]=useState(false)
 
  return (
    <>
      <div className="container gradient-background ">
        <div className="img-container">
          <img width="100%" src={HomePageImg} alt="homepageimg" />
          <div className="text-overlay">
            <h3 className="h3tag">
              THE FASTEST, EASIEST WAY
              <br /> TO DO YOUR TAX RETURNS.
            </h3>
          </div>
        </div>
        {/* <div className="form-container">
          <h2 className="h3tag">
            Sign up for the easy
            <br /> way to do tax returns.
          </h2>
          <p className="ptag">
            Sign up for free and only pay as submit your tax
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="input1"
              value={formData.input1}
              onChange={handleInputChange}
              placeholder="Name & Surname"
            />
            <input
              type="email"
              name="input2"
              value={formData.input2}
              onChange={handleInputChange}
              placeholder="Email Address"
            />
            <input
              type="number"
              name="input3"
              value={formData.input3}
              onChange={handleInputChange}
              placeholder="Contact No"
            />
            <select
              name="input4"
              value={formData.input4}
              onChange={handleInputChange}
              placeholder="Input 4"
            >
              <option value="">Type of Tax</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <button type="submit">Start My Tax Return</button>
          </form>
          <p className="ptag">
            By submitting this form I agree to TaxTim's Terms.
          </p>
        </div> */}

<div className="form-container">
 {play?<iframe width="370" height="251" src="https://www.youtube.com/embed/nAFLsldyJfs" title="Have you filed your tax return? This neat tool could maximize your SARS refund" frameborder="0" 
 allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen></iframe>:<img style={{width:"370px", height:"201px",marginTop:"20px"}} src={youtube} alt="youtub" onClick={()=>setplay(true)} />}


</div>

        {/* seconde section */}

        <div className="section2">
          <div className="img-container2">
            <img width="355px" style={{borderRadius:"20px",border:"1px solid green"}} src={LapImg} alt=""  />
          </div>
          <div className="how-does">
            <h2 className="h3tag">How does Tax Tim Work?</h2>
            <h3 className="h3tag">It's quite easy actually!</h3>
            <h5>
              Let's have a chat. After answering my simple questions I'll
              complete your tax return and file <br />
              it directly with SARS for your maximum possible refund!
            </h5>
            <div>
              <h5 class="icon-heading">Register for a Tax Tim Account</h5>
              <p className="ptag">
                Tell me a bit about your taxes and I'II show which TaxTim
                package
                <br />
                and price suits your needs best.
              </p>
            </div>
            <div>
              <h5 class="icon-heading">Have a chat with me online</h5>
              <p className="ptag">
                We'll complete your tax return correctly, checking all
                deductions
                <br />
                for maximum refund before filing at SARS.
              </p>
            </div>
            <div>
              <h5 class="icon-heading">
                Pay By EFT / Card To Submit Your Return
              </h5>
              <p className="ptag">
                Pay for your tax return service via card directly on the site or
                use
                <br />
                the EFT option if you prefer.
              </p>
            </div>
            <div className="find-button">
              <button className="find">Find Out More</button>
              <button className="find">Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <div className="section3">
        <div className="section3up">
          <h2 className="h3tag">How is Tax Tim Different?</h2>
          <h3 className="h3tag">Great Question</h3>
          <p className="ptag">
            Let's have a chat. After answering my simple questions I'll complete
            your tax return and file it directly with SARS for your maximum
            possible refund!
          </p>
        </div>

        <div className="section3down">
          <div className="one">
            <div>
              <h4 className="icon-heading2">Fully Integrated</h4>
              <p className="ptag">
                Once you authorise Tax Tim, I can import your IRP5
                <br />
                data and file your tax return directly with SARS.
              </p>
            </div>
            <div>
              <h4 className="icon-heading2">File With Confidence</h4>
              <p className="ptag">
                I'll make sure your SARS tax return is completed
                <br />
                fully and correctly, so you can file with confidence.
                <br />
                On time. Every time.
              </p>
            </div>
            <div>
              <h4 className="icon-heading2">Max Possible Refund</h4>
              <p className="ptag">
                The questions are designed to uncover all your
                <br />
                available tax deductions to reduce your tax and
                <br />
                get your maximum refund.
              </p>
            </div>
          </div>
          <div className="two">
            <div>
              <h4 className="icon-heading2">Tax Experts on Hand</h4>
              <p className="ptag">
                TaxTim is maintained by registered tax practitioners,
                <br />
                who can help you with those slightly more complicated
                <br />
                tax questions.
              </p>
            </div>
            <div>
              <h4 className="icon-heading2">Information is Secure</h4>
              <p className="ptag">
                We are super strict on security. Your personal data is
                <br />
                kept secure via 256-bit SSL at all times. Absolutely no
                <br />
                compromise.
              </p>
            </div>
            <div>
              <h4 className="icon-heading2">Quick and easy</h4>
              <p className="ptag">
                Most people finish their tax returns on TaxTim in 20
                <br />
                minutes or less. But fast doesn't mean rushing - I'm
                <br />
                thorough too.
              </p>
            </div>
          </div>
        </div>
      </div>
<hr />
      <div class="container2">
       
          <div class="twelve">
            <h1>Who Partners With TaxTim?</h1>
            <h2>We have several fantastic partner offers.</h2>
            <br />
          </div>
        

        <div class="row">
          <div class="three columns text-center">
            <a href="fnb-ebucks">
              <img
                alt="FNB eBucks"
                height="50"
                src="https://www.taxtim.com/za/images/partner-fnb-ebucks.png"
              />
            </a>
            <br />
            Get eBucks for using TaxTim (get 50% back in eBucks) <br />
            <a href="fnb-ebucks">Read more</a>
          </div>

          <div class="three columns text-center">
            <a href="old-mutual-rewards">
              <img
                alt="Old Mutual Rewards"
                height="50"
                src="https://www.taxtim.com/za/images/partner-old-mutual.png"
              />
            </a>
            <br />
            Get TaxTim discounted or FREE <br />
            <a href="old-mutual-rewards">Read more</a>
          </div>

          <div class="three columns text-center">
            <a href="multiply">
              <img
                alt="Momentum / Multiply"
                height="50"
                src="https://www.taxtim.com/za/images/momentum-logo.png"
              />
            </a>
            <br />
            Get TaxTim FREE <br />
            <a href="multiply">Read more</a>
          </div>

          <div class="three columns text-center">
            <a href="sanlam-reality">
              <img
                alt="Sanlam Reality"
                height="50"
                src="https://www.taxtim.com/za/images/sanlam-reality.png"
              />
            </a>
            <br />
            Get TaxTim FREE (earn up to 3,000 tier points) <br />
            <a href="sanlam-reality">Read more</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
