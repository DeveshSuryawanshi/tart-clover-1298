import React from 'react'
import {Link} from "react-router-dom";
import {FaFrown, FaGlasses} from "react-icons/fa"
import "./Contact.css"

export const Contact = () => {
  return (
    <div className='section'>
      <div>
      <h1 className='heading'>Got something to say?</h1>
      <h2 className='headingh2'>Please contact us with any questions, comments, requests, criticisms or complaints!</h2>

      </div>
      <div>
        <div>
      <b className='tagB'> <FaGlasses  />Contact Qualified Staff via our Helpdesk</b>
      <br />
        <p className='para1'>Ask one of our qualified tax professionals your question and we'll get back to you with an informed answer.</p>
         <br />
        
         <Link to = "/"><button className='formbtn1'>Ask a Tax Professional</button></Link>
         </div>
         <div>
            <br />
            <br />
         <b className='tagB'> <FaFrown />Make a Complaint</b>
          <p  className='para1'>Something go wrong? Contact one of our customer service agents and we will gladly attend to your problem.</p>
           <br />
          
           <Link to = "/"><button className='formbtn1'>Let us know</button></Link>
         </div>
      </div>

    </div>
  )
}