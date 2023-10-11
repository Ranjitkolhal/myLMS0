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

function TermsConditions() {
  return (
    <>
      <div style={mainclass}>
        <h1 style={centerTitle}>Terms & Conditions</h1>
        <hr style={hrStyle} />
        <div style={para}>
            <li>
              Welcome to Standard Security Solutions ! These terms and conditions outline the rules and regulations for the use of our website.
              By accessing this website, we assume you accept these terms and conditions in full.
            </li>
            <br />
            <li>
              The content of this website is for general information and use only. It is subject to change without notice.
            </li>
            <br />

            <li>
              Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable.
              It shall be your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.
            </li>
            <br />

            <li>
              This website contains material that is owned or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited without prior written consent.
            </li>
            <br />

            <li>
              Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.
            </li>
            <br />

            <li>
              From time to time, this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website. Your use of this website and any dispute arising out of such use of the website is subject to the laws of India.
            </li>
     </div>
      </div>
      <FooterUser />
    </>
  );
}

export default TermsConditions;
