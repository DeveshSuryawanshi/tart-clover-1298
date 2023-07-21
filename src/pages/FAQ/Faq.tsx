import { Flex } from '@chakra-ui/react';
import React from 'react';

export const Faq = () => {
  return (
    <div className='faq' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '30px', textAlign: 'left' }}>
      <h1 style={{ fontWeight: 'bold', marginBottom: '10px', marginTop: '10px' }}>Frequently asked questions</h1>
      <h2>What makes TaxTim the fastest, easiest way to submit your tax return</h2>

      <h3 style={{ fontWeight: 'bold', marginBottom: '10px', marginTop: '10px' }}>What is TaxTim?</h3>
      <p>
        TaxTim is your very own digital tax assistant. He is here to help you complete and submit your tax return as
        quickly and easily as possible to SARS. Think of him as an all-in-one tax practitioner in a box :)
      </p>

      <h3 style={{ fontWeight: 'bold', marginBottom: '10px', marginTop: '10px' }}>How does TaxTim work?</h3>
      <p>
        After registering on the TaxTim website, TaxTim will appear on the screen and start asking you questions about
        your salary, expenses, and other incomes. Much like a WhatsApp chat, the conversation is interactive and will
        explain all those complicated tax terms in simple to understand plain language that absolutely everyone can
        follow. After the chat, TaxTim fills in your tax return forms instantly and submits them to SARS in just a
        click!
      </p>

      <h3 style={{ fontWeight: 'bold', marginBottom: '10px', marginTop: '10px' }}>Do I need to know anything about tax to use TaxTim?</h3>
      <p>
        Not at all. TaxTim is built for absolutely everyone, and zero tax knowledge is required to use it. TaxTim will
        guide you step-by-step to get your tax returns done right, first time.
      </p>

      <h3 style={{ fontWeight: 'bold', marginBottom: '10px', marginTop: '10px' }}>Who are the people behind TaxTim? Is it just a bot?</h3>
      <p>
        TaxTim is powered by a passionate team of Chartered Accountants and expert Tax Practitioners based in our Cape
        Town office. All of the TaxTim questions and help materials were written by us to help you understand the world
        of tax better. If at any stage you feel lost or uncertain, we are waiting to help you on our helpdesk, email, or
        social media. Working late on your tax return? We're probably also up.
      </p>

      <h3 style={{ fontWeight: 'bold', marginBottom: '10px', marginTop: '10px' }}>How is TaxTim different from SARS eFiling?</h3>
      <p>
        SARS has created one of the best systems in the world for submitting tax returns online. Think of TaxTim as a
        layer on top of SARS eFiling, designed to help you better and make life easier:
      </p>
      <br />
      <br />
      <table style={{ border: '1px solid' }}>
        <tbody>
          <tr style={{ border: '1px solid' }}>
            <td style={{ border: '1px solid', padding: '8px' }}></td>
            <td style={{ border: '1px solid', padding: '8px' }}>
              <b>SARS eFILING</b>
            </td>
            <td style={{ border: '1px solid', padding: '8px' }}>
              <b>TaxTim</b>
            </td>
          </tr>
          <tr style={{ border: '1px solid' }}>
            <td style={{ border: '1px solid', padding: '8px' }}>Functions</td>
            <td style={{ border: '1px solid', padding: '8px' }}>
              Submit tax forms
              <br />
              Provide assessments
            </td>
            <td style={{ border: '1px solid', padding: '8px' }}>
              Submit tax forms
              <br />
              Explain assessments
              <br />
              Find all possible deductions
              <br />
              Optimize tax payable
              <br />
              Increase potential refund
            </td>
          </tr>
          <tr style={{ border: '1px solid' }}>
            <td style={{ border: '1px solid', padding: '8px' }}>Language</td>
            <td style={{ border: '1px solid', padding: '8px' }}>Tax terminology</td>
            <td style={{ border: '1px solid', padding: '8px' }}>Plain language + explanations</td>
          </tr>
          <tr style={{ border: '1px solid' }}>
            <td style={{ border: '1px solid', padding: '8px' }}>Help provided</td>
            <td style={{ border: '1px solid', padding: '8px' }}>
              SARS website
              <br />
              Call centre operator
              <br />
              SARS branch
            </td>
            <td style={{ border: '1px solid', padding: '8px' }}>
              Friendly tax practitioners and CA's via online helpdesk
              <br />
              In-context help and explanations
              <br />
              7,000+ tax articles and calculators
            </td>
          </tr>
          <tr style={{ border: '1px solid' }}>
            <td style={{ border: '1px solid', padding: '8px' }}>Checking your submission</td>
            <td style={{ border: '1px solid', padding: '8px' }}>Basic compliance checks</td>
            <td style={{ border: '1px solid', padding: '8px' }}>
              Basic compliance checks
              <br />
              Potential tax deduction checks
              <br />
              Multiple system checks to detect errors
            </td>
          </tr>
          <tr style={{ border: '1px solid' }}>
            <td style={{ border: '1px solid', padding: '8px' }}>Audit requests</td>
            <td style={{ border: '1px solid', padding: '8px' }}>Sent to you</td>
            <td style={{ border: '1px solid', padding: '8px' }}>Sent to you
              <br />
              Explained to you
            </td>
          </tr>
          <tr style={{ border: '1px solid' }}>
            <td style={{ border: '1px solid', padding: '8px' }}>Additional tools</td>
            <td style={{ border: '1px solid', padding: '8px' }}>None</td>
            <td style={{ border: '1px solid', padding: '8px' }}>Yes many! See below</td>
          </tr>
        </tbody>
      </table>

      <h3 style={{ fontWeight: 'bold', marginBottom: '10px', marginTop: '10px' }}>Aren't my taxes too complicated for TaxTim to handle?</h3>
      <p>
      No individual taxpayer or tax situation is too complicated for us to handle. The only section we do not complete for people is the Farming section, which we hope doesn't affect too many of you. So from foreign dividends to local business, from independent contractors to capital gains - you name it - TaxTim is perfectly suited to take care of any tax situation and complete and submit your tax return to SARS, whether it's simple or complicated.
      </p>
      <h3 style={{ fontWeight: 'bold', marginBottom: '10px', marginTop: '10px' }}>Is it easy to switch from eFiling to TaxTim?</h3>
      <p>
      Yes it is. Connecting TaxTim to your eFiling profile takes less than a minute (on average) and once connected you can import your saved IRP5s from eFiling (saves you time), submit your completed tax returns to eFiling in a click, get your ITA34 assessments and letters (we'll explain what these mean when we send them to you) and upload supporting documents. All your TaxTim submissions are copied onto eFiling automatically so you can go back to eFiling should you ever wish to.
      </p>
      <h3 style={{ fontWeight: 'bold', marginBottom: '10px', marginTop: '10px' }}>How much does it cost?</h3>
      <p>
      For our latest pricing, please see our pricing page. Please note the price quoted is per tax return and is a once-off price, NOT a subscription or monthly cost. Therefore, in most cases where you only need to file a tax return once in a year, then the cost will be one single payment. If you are behind in your tax return filings and you need the prior year and current year filed, you will need to pay the fee twice (two tax returns).
      </p>
      <h3 style={{ fontWeight: 'bold', marginBottom: '10px', marginTop: '10px' }}>Do I need to have all my documents prepared before I start with TaxTim?</h3>
      <p>
      No you don't. TaxTim will ask you for specific information from your documents as you follow the on screen process. TaxTim will tell you what documents you need and where to look on them for the numbers you need. If you don't have the document required TaxTim will help you to get it from your medical scheme, investment house, etc. You can start and stop, leave and come back at any time - your work is saved automatically as you go.
      </p>
      <h3 style={{ fontWeight: 'bold', marginBottom: '10px', marginTop: '10px' }}>Is my tax return checked before it goes to SARS?</h3>
      <p>
      Yes, our system checks your tax return before it is submitted to SARS. Remember, you are responsible for filling in the correct amounts (only you know these!) but we check to ensure it makes sense and there are no obvious duplicates or omissions and you have answered all the relevant questions. We will query any unusual amounts with you to ensure they are correct. Let us pick up any errors, before your tax return gets sent to SARS.
      </p>
      <h3 style={{ fontWeight: 'bold', marginBottom: '10px', marginTop: '10px' }}>What do I get for my money, besides a completed tax return?</h3>
    <ol>
      <li>Tax season deadline reminders so you never forget to submit on time.</li>
      <li>An online document storage facility to keep important tax certificates safe.</li>
      <li>Multiple system checks before submission to SARS.</li>
      <li>Online support from expert tax practitioners throughout the process.</li>
      <li>A "Tax Health Score" report containing personalised recommendations on how to become more tax efficient.</li>
      <li>Tax Expense Tracker app to track expenses throughout the year and make end-of-year accounting easy.</li>
      <li>Vehicle logbook app to track your work and private car trips.</li>
      <li>Assistance with supporting documents submission, if audited by SARS.</li>
      <li>Assistance with dispute resolution / objection process, if applicable. (Note there may be an additional fee charged depending on the complexity of the dispute).</li>
      <li>Last but not least, peace of mind when doing your taxes.</li>
    </ol>
    </div>
  );
};
