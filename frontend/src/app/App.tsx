import React, { useState, useEffect } from 'react';
import './App.css';
import VerticalContainer from '../vertical-container/VerticalContainer';
import CreateContentBox from '../content-box/CreateContentBox';
import ReadContentBox from '../content-box/ReadContentBox';
import UpdateContentBox from '../content-box/UpdateContentBox';
import { DisasterEvent } from '../entities/DisasterEvent';
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import IncidentReportingPage from "../pages/IncidentReportingPage";
import CollaborationPage from "../pages/CollaborationPage";
import CommunicationCenterPage from "../pages/CommunicationCenterPage";
import AboutPage from "../pages/AboutPage";
import Navbar from "../components/Navbar";// Import DisasterEvent from here




const App: React.FC = () => {
    const [disasterEvents, setDisasterEvents] = useState<DisasterEvent[]>([]);
    const [selectedEvent, setSelectedEvent] = useState<DisasterEvent | null>(null);
    const [editing, setEditing] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        fetchDisasterEvents();
    }, []);

    const fetchDisasterEvents = () => {
        setErrorMessage(''); // Reset error before fetching
        fetch('http://localhost:8080/api/disaster-events')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok.');
                }
                return res.json();
            })
            .then((data: DisasterEvent[]) => setDisasterEvents(data))
            .catch(handleFetchError);
    };

    const handleCreateSubmit = (newDisasterEventData: Omit<DisasterEvent, 'id'>) => { // Change argument type
        fetch('http://localhost:8080/api/disaster-events', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newDisasterEventData), // Send data without id
        })
            .then(res => res.json())
            .then(createdEvent => setDisasterEvents([createdEvent, ...disasterEvents]))
            .catch(handleFetchError);
    };


    const handleUpdateSubmit = (updatedEvent: DisasterEvent) => {
        fetch(`http://localhost:8080/api/disaster-events/${updatedEvent.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedEvent), // send updatedEvent to backend
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok.');
                }
                return res.json();
            })
            .then((updatedEventFromServer: DisasterEvent) => {
                // Update the disasterEvents state with the modified event
                setDisasterEvents(disasterEvents.map(e => e.id === updatedEventFromServer.id ? updatedEventFromServer : e));
                setEditing(false); // Switch back to create mode
                setSelectedEvent(null); // Clear the selected event
                setErrorMessage('');
            })
            .catch(error => {
                console.error('Error updating event:', error);
                setErrorMessage('Failed to update disaster event.');
            });
    };

    const handleDeleteClick = (id: number) => {
        fetch(`http://localhost:8080/api/disaster-events/${id}`, {method: 'DELETE'})
            .then(() => {
                setDisasterEvents(disasterEvents.filter(e => e.id !== id));
                setErrorMessage('');
            })
            .catch(error => {
                console.error('Error deleting event:', error);
                setErrorMessage('Failed to delete disaster event.');
            });
    };
    const handleFetchError = (error: Error) => {
        console.error('Fetch Error:', error);
        setErrorMessage('An error occurred while communicating with the server.');
    };
    const handleEditClick = (event: DisasterEvent) => {
        setSelectedEvent(event);
        setEditing(true);
    };

    return (
        <div className="app-container">
            <Navbar />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/report-incident" element={<IncidentReportingPage />} />
                <Route path="/update/:id" element={<UpdateContentBox event={selectedEvent!} onSubmit={handleUpdateSubmit} />} />
                <Route path="/collaborate" element={<CollaborationPage />} />
                <Route path="/contact" element={<CommunicationCenterPage />} />
                <Route path="/about-us" element={<AboutPage />} />
                <Route path="*" element={<Navigate to="/" />} /> {/* Redirect for unknown paths */}
            </Routes>
        </div>
    );
};

export default App;