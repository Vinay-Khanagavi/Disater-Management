import React from 'react';
import './CommunicationCenterPage.css'; // Create a CSS file for styling this page

interface Contact {
    name: string;
    number: string;
    email?: string;
    website?: string;
}

// Sample data (Replace with actual data)
const emergencyHotlines: Contact[] = [
    { name: 'National Emergency Number', number: '112' },
    { name: 'Police', number: '100' },
    { name: 'Fire', number: '101' },
    { name: 'Ambulance', number: '102' },
    { name: 'NDRF', number: '1078' },
];

const ngoContacts: Contact[] = [
    { name: 'NGO 1', number: '123-456-7890', email: 'ngo1@example.com', website: 'https://www.ngo1.org' },
    // Add more NGO contact information here
];

const governmentContacts: Contact[] = [
    { name: 'Government Agency 1', number: '987-654-3210', website: 'https://www.govagency1.gov' },
    // Add more government agency contact information here
];

    const CommunicationCenterPage: React.FC = () => {
        return (
            <div className="communication-center">
                <h2>Communication Center</h2>

                {/* Emergency Hotlines Section */}
                <section className="emergency-hotlines">
                    <h3>Emergency Hotlines</h3>
                    <ul>
                        {emergencyHotlines.map((hotline, index) => (
                            <li key={index} className="hotline-item">  {/* Added className for styling */}
                                <div className="hotline-name">{hotline.name}</div>
                                <div className="hotline-number">
                                    <a href={`tel:${hotline.number}`}>{hotline.number}</a>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* NGO Contacts Section */}
                <section className="ngo-contacts">
                    <h3>NGO Contacts</h3>
                    <ul>
                        {ngoContacts.map((ngo, index) => (
                            <li key={index} className="contact-item">
                                <div className="contact-name">{ngo.name}</div>
                                <div className="contact-details">
                                    <p>Phone: {ngo.number}</p>
                                    {ngo.email && <p>Email: <a href={`mailto:${ngo.email}`}>{ngo.email}</a></p>}
                                    {ngo.website && <p>Website: <a href={ngo.website} target="_blank" rel="noopener noreferrer">{ngo.website}</a></p>}
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Government Agency Contacts Section */}
                <section className="government-contacts">
                    <h3>Government Agency Contacts</h3>
                    <ul>
                        {governmentContacts.map((agency, index) => (
                            <li key={index} className="contact-item">
                                <div className="contact-name">{agency.name}</div>
                                <div className="contact-details">
                                    <p>Phone: {agency.number}</p>
                                    {agency.email && <p>Email: <a href={`mailto:${agency.email}`}>{agency.email}</a></p>}
                                    {agency.website && <p>Website: <a href={agency.website} target="_blank" rel="noopener noreferrer">{agency.website}</a></p>}
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* ... (rest of your component code - map, live chat, safety tips) ... */}
            </div>
        );
    };

    export default CommunicationCenterPage;