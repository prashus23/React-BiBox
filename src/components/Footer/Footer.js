import React from "react";
import "../Footer/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="t-1">
          <table className="table1">
            <th>Contact us</th>
            <td>Find a Store</td>
          </table>
        </div>
        <div className="t-2">
          <table className="table2">
            <th>customer rervice</th>
            <br />
            <td>Contacr Us</td>
            <br />
            <td>Ordering & Payment</td>
            <br />
            <td>Shiping</td>
            <br />
            <td>Return</td>
            <br />
            <td>FAQ</td>
          </table>
        </div>
        <div className="t-3">
          <table className="table3">
            <th>Informantion</th>
            <br />
            <td>Work With US</td>
            <br />
            <td>Privacy Policy</td>
            <br />
            <td>Terms & Conditions</td>
            <br />
            <td>Press Enquiries</td>
          </table>
        </div>
        <div className="ft-rt">
          <h3>Subscribe</h3>
          <h4>
            Excepteur sint occaecat cupidatat non 
            &nbsp;
            <br/>proident, sunt in culpa qui
            officia
          </h4>
          <input type="email" placeholder="Email Address"/>
            <button>SUBSCRIBE</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
