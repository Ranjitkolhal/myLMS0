import React from 'react';
import FooterUser from '../../components/user/FooterUser';
const centerTitle = {
  textAlign: 'center',
    fontSize : "25px"
};

const hrStyle = {
  width: '80%',
  margin: '0 auto',
  minHeight:"2px",
  background: 'linear-gradient(to right, #000, #eee, #000)',
};
const para = {
    margin : '20px 20%',
    textAlign:'left',
    listStyle :"disc"

}
const mainclass = {
    minHeight : "80vh"
}
function PrivacyPolicy() {
  return (
    <>

    <div style={mainclass}>
      <h1 style={centerTitle}>Privacy Policy</h1>
      <hr style={hrStyle} />
      <div style={para}>
      <li>
        This Privacy Policy describes our policies and procedures on the collection, use, and
        disclosure of your information when you use the Service.
      </li>
      <br />

      <li>
        We will not use or share your information with anyone except as described in this Privacy
        Policy.
      </li>
      <br />

      </div>
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
      <h2 style={centerTitle}>Information Collection and Use</h2>
      <hr style={hrStyle} />
      <div style={para}>
      <li >
        For a better experience, while using our Service, we may require you to provide us with
        certain personally identifiable information.
      </li>
      <br />
      <li>Your privacy is important to us. This privacy policy outlines how we collect, use, store, and protect your personal information. By using this website, you consent to the data practices described in this policy.</li>
      <br />

      <li>Any personal information provided by you will be securely stored and will not be shared with third parties unless required by law or with your consent.
</li>
<br />

      <li>We may use cookies to personalize and enhance your experience on our website. These cookies do not collect personal information.
</li>
<br />

      <li>Our website may contain links to external sites that are not operated by us. We have no control over the content and practices of these sites and cannot be held responsible for their privacy policies.
</li>
<br />

<li>
You may request access to or correction of your personal information by contacting us using the information provided in the "Contact Us" section below.

</li>
      </div>
      </div>
      {/* Add more privacy policy content here */}
    </div>
    <FooterUser/>
    </>
  );
}

export default PrivacyPolicy;
