import React, { useState } from 'react';
import './ContentBox.css';
import { DisasterEvent } from '../entities/DisasterEvent';

interface ContentBoxProps {
    onSubmit: (disasterEvent: Omit<DisasterEvent, 'id'>) => void; // Exclude id from props
}

const CreateContentBox: React.FC<ContentBoxProps> = ({ onSubmit }) => {
    const [disasterEvent, setDisasterEvent] = React.useState<Omit<DisasterEvent, 'id'>>({
        name: '',
        type: '',
        address: '',
        date: new Date(),
        severityLevel: '',
        description: '',
    });

    const handleSubmit = () => {
        // Submit the entire object (without id)
        onSubmit(disasterEvent);

        // Reset form fields
        setDisasterEvent({
            name: '',
            type: '',
            address: '',
            date: new Date(), // Reset the date as well
            severityLevel: '',
            description: '',
        });
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setDisasterEvent(prevState => ({
            ...prevState,
            [name]: name === 'date' ? new Date(value) : value, // Directly use Date object
        }));
    };

    return (
        <div className="content-box">
            <input
                type="text"
                name="name"
                value={disasterEvent.name}
                onChange={handleChange}
                placeholder="Disaster Name"
            />
            <input
                type="text"
                name="type"
                value={disasterEvent.type}
                onChange={handleChange}
                placeholder="Disaster Type"
            />
            <input
                type="text"
                name="address"
                value={disasterEvent.address}
                onChange={handleChange}
                placeholder="Address"
            />
            <textarea
                name="description"
                value={disasterEvent.description}
                onChange={handleChange}
                placeholder="Description"
            />
            <input
                type="date"
                name="date"
                value={disasterEvent.date.toISOString().split('T')[0]} // Format date for input type="date"
                onChange={handleChange}
            />

            <select
                name="severityLevel"
                value={disasterEvent.severityLevel}
                onChange={handleChange}
            >
                <option value="">Select Severity</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>

            <button onClick={handleSubmit}>Submit Report</button>
        </div>
    );
};

export default CreateContentBox;

