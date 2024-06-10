import React, { useState } from 'react';
import CreateContentBox from '../content-box/CreateContentBox';
import { DisasterEvent } from '../entities/DisasterEvent';// Import DisasterEvent

const IncidentReportingPage: React.FC = () => {
    // You don't need these state variables in this component:
    // const [disasterEvents, setDisasterEvents] = useState<DisasterEvent[]>([]);
    // const [selectedEvent, setSelectedEvent] = useState<DisasterEvent | null>(null);
    // const [editing, setEditing] = useState(false);
    const [errorMessage, setErrorMessage] = useState(''); // For error messages

    const handleCreateSubmit = async (newDisasterEventData: Omit<DisasterEvent, 'id'>) => { // Async function
        try {
            const response = await fetch('http://localhost:8080/api/disaster-events', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newDisasterEventData),
            });

            if (response.ok) {
                const createdEvent: DisasterEvent = await response.json();
                // (Optional) If you want to display a success message:
                setErrorMessage('Disaster event reported successfully!');

            } else {
                throw new Error('Failed to report disaster event.');
            }

        } catch (error) {
            console.error('Error reporting disaster event:', error);
            setErrorMessage('An error occurred while reporting the disaster event.');
        }
    };

    return (
        <div>
            <h2>Report a Disaster Event</h2>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <CreateContentBox onSubmit={handleCreateSubmit} />
        </div>
    );
};

export default IncidentReportingPage;
