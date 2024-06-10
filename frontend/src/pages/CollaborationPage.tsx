import React from 'react';
import './CollaborationPage.css'; // Create a separate CSS file for this page's styling
import fireDepartmentImage from '../images/fire.jpg'; // Replace with your actual image path
import ndrfImage from '../images/ndrf.jpg'; // Replace with your actual image path

const CollaborationPage: React.FC = () => {
    return (
        <div className="collaboration-page">
            <h2>Collaboration for Effective Crisis Response</h2>

            {/* Section 1: Introduction */}
            <section className="section">
                <p>
                    In times of crisis, effective collaboration between non-governmental organizations (NGOs) and government bodies is crucial. This synergy combines the agility and specialized expertise of NGOs with the resources and reach of government agencies, ensuring a swift and coordinated response to disasters.
                </p>
            </section>

            {/* Section 2: Fire Department Collaboration */}
            <section className="section">
                <h3>Collaboration with Fire Departments</h3>
                <div className="image-container">
                    <img src={fireDepartmentImage} alt="Firefighters in action" />
                </div>
                <p>
                    We work closely with local and regional fire departments to enhance our response to fire-related disasters. This collaboration includes:
                </p>
                <ul>
                    <li>Joint training exercises to improve coordination.</li>
                    <li>Sharing of resources and information.</li>
                    <li>Combined efforts for fire prevention and public awareness campaigns.</li>
                </ul>
            </section>

            {/* Section 3: NDRF Collaboration */}
            <section className="section">
                <h3>Collaboration with National Disaster Response Force (NDRF)</h3>
                <div className="image-container">
                    <img src={ndrfImage} alt="NDRF team during rescue operation" />
                </div>
                <p>
                    Our partnership with the NDRF is instrumental in our ability to respond to large-scale disasters. We collaborate on:
                </p>
                <ul>
                    <li>Specialized rescue operations.</li>
                    <li>Providing relief and support to affected communities.</li>
                    <li>Coordinating evacuation efforts.</li>
                </ul>
            </section>

            {/* Section 4: (Optional) Video Section */}
            <section className="section">
                <h3>Learn More About Our Collaborations</h3>
                {/* Embed videos from YouTube or Vimeo here */}
            </section>
        </div>
    );
};

export default CollaborationPage;
