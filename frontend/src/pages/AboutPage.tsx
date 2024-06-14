import React from 'react';
import './AboutPage.css'; // Create a CSS file for styling

const AboutPage: React.FC = () => {
    return (
        <div className="about-page-container">
            {/* Section: Introduction */}
            <section className="about-intro">
                <h1>About Us</h1>
                <p className="mission-statement">
                    At Disaster Response Network (DRN), our mission is to harness the power of technology and community collaboration to effectively address and mitigate the impact of disasters on individuals, families, and communities. We strive to provide a platform for timely information dissemination, resource coordination, and streamlined communication during critical times.
                </p>
            </section>

            {/* Section: Our Story */}
            <section className="our-story">
                <h2>Our Story</h2>
                <p>
                    DRN was founded in 2024  in the wake of a devastating [Disaster Type] that highlighted the need for a more efficient and connected disaster response system. A group of dedicated individuals with backgrounds in technology, disaster management, and community outreach came together to create a platform that could make a real difference in times of crisis.
                </p>
                <p>
                    Since then, we have grown to become a trusted partner for governments, NGOs, and communities around the world, leveraging our expertise and technology to help build resilience and save lives.
                </p>
            </section>

            {/* Section: Our Values */}
            <section className="our-values">
                <h2>Our Values</h2>
                <div className="values-list">
                    <div className="value-item">Compassion</div>
                    <div className="value-item">Collaboration</div>
                    <div className="value-item">Innovation</div>
                    <div className="value-item">Empowerment</div>
                    <div className="value-item">Accountability</div>
                </div>
            </section>

            {/* Section: Our Team */}
            <section className="our-team">
                <h2>Our Team</h2>
                <p>
                    We are a diverse group of passionate individuals dedicated to making a positive impact on the world. Our team includes experienced disaster management professionals, skilled software engineers, creative designers, and committed community organizers.
                </p>
            </section>

            {/* Section: Our Approach */}
            <section className="our-approach">
                <h2>Our Approach</h2>
                <p>
                    We believe in a multi-faceted approach to crisis response, combining technology, community engagement, and data-driven insights. Our platform provides a central hub for information sharing, resource allocation, and communication, ensuring that all stakeholders can collaborate effectively to address the needs of those affected by disasters.
                </p>
            </section>




            {/* Section: Interactive Timeline (Optional) */}
            {/* You can use a library like react-vertical-timeline-component to implement this */}



            {/* Section: Contact Information */}
            <section className="contact-info">
                <h2>Contact Us</h2>
                <p>
                    Email: info@disasterresponsenetwork.org (Replace with actual email)
                </p>
                <p>
                    Phone: +1-555-123-4567 (Replace with actual phone number)
                </p>
            </section>

            {/* Section: Call to Action */}
            <section className="call-to-action">
                <h3>Get Involved</h3>
                <p>Join us in our mission to build a safer and more resilient world.</p>
                <button>Volunteer</button>
                <button>Donate</button>
            </section>
        </div>
    );
};

export default AboutPage;
