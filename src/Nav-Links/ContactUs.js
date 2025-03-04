import React from 'react';
import './ContactUs.css'; // Import CSS file

function ContactUs() {
  return (
    <div className="container">
      <h2>Venue</h2>

      {/* Office Locations */}
      <div className="grid">
        {/* America Office */}
        <div className="office-card">
          <h3>America (Headquarters)</h3>
          <p>Golden Five LLC</p>
          <p>2655, First Street Suite 250, Simi Valley, CA 93065</p>
          <p>Phone: +1.323.489.8001</p>
          <p>Email: <a href="mailto:info@GoldenFive.net">info@GoldenFive.net</a></p>
        </div>

        {/* Canada Office */}
        {/* <div className="office-card">
          <h3>Canada</h3>
          <p>Golden Five INC</p>
          <p>1315 Pickering Parkway, Suite 300, Pickering, Ontario, Canada L1V7G5</p>
          <p>Phone: +1.289.539.0444</p>
          <p>Email: <a href="mailto:info@GoldenFive.net">info@GoldenFive.net</a></p>
        </div> */}

        {/* India Office */}
        {/* <div className="office-card">
          <h3>India</h3>
          <p>Golden Five India Pvt. Ltd</p>
          <p>Kalyanpur, Kanpur, UP, 208017</p>
          <p>Phone: +91.22.6241.6500</p>
          <p>Email: <a href="mailto:info@GoldenFive.net">info@GoldenFive.net</a></p>
        </div> */}
      </div>

      <hr className="separator" />
      
      {/* Contact Form */}
      <h3>Contact Us</h3>
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Your Name" />

        <label>Email:</label>
        <input type="email" placeholder="Your Email" />

        <label>Message:</label>
        <textarea rows="4" placeholder="Your Message"></textarea>

        <input type="submit" value="Send Message" className="button-submit" onClick={() => window.open("https://sessionize.com/CWS2025/", "_blank")} /> 
      </form>
    </div>
  );
}

export default ContactUs;


