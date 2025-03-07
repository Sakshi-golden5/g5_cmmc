import React, { useEffect, useRef } from "react";
import "./BHost.css";
import img1 from "../assets/2.jpg"
import img2 from "../assets/3.jpg"
import vendorimg from "../assets/1.jpg"
import bannerimg from "../assets/4 3.jpg"
import logo from "../assets/Final.png"

function BHost() {
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {

            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.5 }
    );

    if (imageRef1.current) observer.observe(imageRef1.current);
    if (imageRef2.current) observer.observe(imageRef2.current);

    return () => {
      if (imageRef1.current) observer.unobserve(imageRef1.current);
      if (imageRef2.current) observer.unobserve(imageRef2.current);
    };
  }, []);

  return (
    <div className="bhost-page">
      <div className="bhost-banner">
        <img src={bannerimg} alt="Banner" />

        <div className="logo-center">
          <img src={logo} alt="Logo" />
        </div>
      </div>
      {/* <div class="vendor-section">
            <div class="vendor-content">
                <h2>Finding a Vendor - The Express Connect Way</h2>
                <p>Normally finding a vendor match is time consuming. Researching candidates, sitting through introductory meetings, gathering the team – it takes so much time! With Express Connect, you’ll be able to bounce from vendor to vendor in 30-minute sessions and more likely you’ll know what feels right, and what does not. When you get home from CEIC West your vendor selection process will have truly hit the <em>Express</em> button.</p>
            </div>
            <div class="vendor-image">
                <img src={vendorimg} alt="Vendor Meeting"/>
            </div>
        </div> */}

        <div class="section-separator"></div>

      <div className="bhost-container">
 
        <div className="bhost-box-attendee">
        <h2>How It Works for Attendees</h2>
          <img
            src={img1}
            alt="Attendees"
            className="bhost-header-image animate-up"
          />
          <p>
            Attendees will designate an interest in participating in the Express
            Connect program when registering for the conference.
          </p>
          <p>
            <strong>Step 1:</strong> Building the Attendee Company Profile.
          </p>
          <p>
            <strong>Step 2:</strong> Attendees complete their profile by
            providing company details.
          </p>
          <p>
            <strong>Step 3:</strong> They select the Hosts they want to meet
            with during the conference.
          </p>
          <p>
            <strong>Step 4:</strong> Forum Leaders schedule meetings for them
            with selected Hosts.
          </p>
          <p>
            <strong>Step 5:</strong> Attendees receive their final meeting
            schedule before the event.
          </p>

          <button className="blue-btn" onClick={() => window.open("https://www.eventbrite.com/e/example-event-registration", "_blank")}> Register Today</button>        
          </div>

        <div className="bhost-box-host">
        <h2>How It Works for Speakers</h2>
          <img
            src={img2}
            alt="Hosts"
            className="bhost-header-image animate-up"
          />
          <p>
            Interested organizations that are RPOs, C3PAOs, MSPs, MSSPs, and
            companies with product offerings sign up to be an Express Connect
            Host.
          </p>

          <p>
            <strong>Step 1:</strong> Hosts complete their Host Company Profile.
          </p>
          <p>
            <strong>Step 2:</strong> They list their areas of expertise and
            services offered.
          </p>
          <p>
            <strong>Step 3:</strong> Hosts are matched with attendees based on
            mutual interests.
          </p>
          <p>
            <strong>Step 4:</strong> They receive a list of scheduled meetings
            before the conference.
          </p>
          <p>
            <strong>Step 5:</strong> Hosts engage with attendees in
            pre-arranged meetings during the event.
          </p>

          <button className="blue-btn"  onClick={() => window.open("https://sessionize.com/CWS2025/", "_blank")}>Be a Speaker</button>
        </div>
      </div>
      {/* <div class="section-separator"></div> */}
      <div className="pricing-section">
        <h2 className="pricing-title">PRICING</h2>
  
        <div className="pricing-table">
        <div className="pricing-column sponsor">
          <h3>Lunch Sponsor</h3>
          <h4>$1500</h4>
        </div>

        <div className="pricing-column sponsor">
          <h3>Breakfast Sponsor</h3>
          <h4>$750</h4>
        </div>

        <div className="pricing-column sponsor">
          <h3>Happy Hour Sponsor</h3>
          <h4>$2500</h4>
        </div>
      </div>
      </div>
      <button className="blue-btn-2" >Be a Sponser</button>
    </div>
  );
}

export default BHost;


// onClick={() => window.open("https://sessionize.com/CWS2025/", "_blank")}