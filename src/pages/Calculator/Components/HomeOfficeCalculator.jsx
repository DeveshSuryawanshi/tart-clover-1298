import React from 'react'
import styled from 'styled-components'

export const HomeOfficeCalculator = () => {
  return (
    <div>
        <DIV>
            <h1>Home Office Calculator</h1>
            <h2>Calculate the home office expense you can claim in your tax return</h2>
            <div className="container">
                <div className="child">
                    <h2 className='formHeading'>HOUSEHOLD COSTS</h2>
                    <div>
                        <div>
                            <p>Please enter in your home office-related expenses for the full tax year below.</p>
                            <p>Please note if you moved during the tax year and you worked at two different properties</p>
                            <p>then you need to do a separate calculation for the time spent at each property.</p>
                        </div>
                        <div className='inputsContainer'>
                            <div className='input'>
                                <p className='inpHeading'>Tax year</p>
                                <div>
                                    <input type="radio"/>
                                    <br />
                                    <input type="radio"/>
                                </div>
                            </div>
                            <div className="input">
                                <p className='inpHeading'>Rental</p>
                                <input type="number"/>
                            </div>
                            <div className="input">
                                <p className='inpHeading'>Electricity</p>
                                <input type="number"/>
                            </div>
                            <div className="input">
                                <p className='inpHeading'>Rates and Taxes</p>
                                <input type="number"/>
                            </div>
                            <div className="input">
                                <p className='inpHeading'>Cleaning</p>
                                <input type="number"/>
                            </div>
                            <div className="input">
                                <p className='inpHeading'>Insurance</p>
                                <input type="number"/>
                            </div>
                            <div className="input">
                                <p className='inpHeading'>Levy</p>
                                <input type="number"/>
                            </div>
                            <div className="input">
                                <p className='inpHeading'>Repairs and Maintenance</p>
                                <input type="number"/>
                            </div>
                            <div className="input">
                                <p className='inpHeading'>Security</p>
                                <input type="number"/>
                            </div>
                            <div className="input">
                                <p className='inpHeading'>Low value office equipment</p>
                                <input type="number"/>
                            </div>
                            <div className="input">
                                <p className='inpHeading'>Wear and tear on office equipment</p>
                                <input type="number"/>
                            </div>
                            <div className="input">
                                <p className='inpHeading'>Other expenses</p>
                                <input type="number"/>
                            </div>
                            <div className="input">
                                <p className='inpHeading'>Total household costs</p>
                                <div>R0</div>
                            </div>
                            <div className="input">
                                <p className='inpHeading'>Square meterage of your home office</p>
                                <input type="number"/>
                            </div>
                            <div className="input">
                                <p className='inpHeading'>Square meterage of your total property</p>
                                <input type="number"/>
                            </div>
                            <div className="input">
                                <p className='inpHeading'>Percentage household costs you can claim</p>
                                <div>0.00%</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="child"></div>
            </div>
        </DIV>
    </div>
  )
}

const DIV = styled.div`
     
    h1{
        color: #444444;
        font-size: 35px;
    }
    
    .formHeading{
        background-color: #444444;
        padding: 20px;
        color: white;
        font-size: 35px;
    }
`
