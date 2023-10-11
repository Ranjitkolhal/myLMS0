import React from 'react';
import FooterUser from '../../components/user/FooterUser';

const centerTitle = {
  textAlign: 'center',
  fontSize : "25px"
};

const hrStyle = {
  width: '80%',
  margin: '0 auto',
  minHeight: '2px',
  background: 'linear-gradient(to right, #000, #eee, #000)',
};

const para = {
  margin: '20px 20%',
  textAlign: 'left',
  listStyle :"disc"

};

const mainclass = {
  minHeight: '80vh',
};

function RefundPolicy() {
  return (
    <>
      <div style={mainclass}>
        <h1 style={centerTitle}>Refund & Cancellation Policy</h1>
        <hr style={hrStyle} />
        <div style={para}>
          <ul>
            <li>
              We want to ensure your satisfaction with our products and services. Please review the following refund and cancellation policy:
            </li>
            <br />
            <li>
              Refunds will be considered on a case-by-case basis and will depend on the nature of the product or service purchased.
            </li>
            <br />
            <li>
              To request a refund, please contact our customer support team within 2-3 business days from the date of purchase.
            </li>
            <br />
            <li>
              Refunds, if approved, will be processed within 2-3 business days. It may take an additional 3-4 business days for the refunded amount to be credited to your bank account.
            </li>
            <br />
            <li>
              Cancellations of services or subscriptions may be subject to specific terms and conditions mentioned during the purchase process.
            </li>
            <br />
            <br />
          </ul>
        </div>
      </div>
      <FooterUser />
    </>
  );
}

export default RefundPolicy;
